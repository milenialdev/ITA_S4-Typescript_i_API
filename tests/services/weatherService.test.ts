import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getWeather } from '../../src/services/weatherService';

// Mock global fetch
globalThis.fetch = vi.fn();

describe('weatherService', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('getWeather', () => {
        it('debería retornar datos meteorológicos cuando la API responde correctamente', async () => {
            const mockWeatherData = {
                current: {
                    time: '2025-10-07T12:00',
                    temperature_2m: 22.5,
                    weather_code: 0
                }
            };

            (globalThis.fetch as any).mockResolvedValueOnce({
                ok: true,
                json: async () => mockWeatherData
            });

            const result = await getWeather();

            expect(result).toEqual(mockWeatherData);
            expect(result.current).toHaveProperty('temperature_2m');
            expect(result.current).toHaveProperty('weather_code');
            expect(result.current).toHaveProperty('time');
            expect(globalThis.fetch).toHaveBeenCalledTimes(1);
        });

        it('debería llamar a la URL correcta con las coordenadas de Barcelona', async () => {
            const mockData = {
                current: {
                    time: '2025-10-07T12:00',
                    temperature_2m: 20,
                    weather_code: 1
                }
            };

            (globalThis.fetch as any).mockResolvedValueOnce({
                ok: true,
                json: async () => mockData
            });

            await getWeather();

            expect(globalThis.fetch).toHaveBeenCalledWith(
                'https://api.open-meteo.com/v1/forecast?latitude=41.3874&longitude=2.1686&current=temperature_2m,weather_code&timezone=Europe/Madrid'
            );
        });

        it('debería lanzar un error cuando la respuesta no es ok', async () => {
            (globalThis.fetch as any).mockResolvedValueOnce({
                ok: false,
                status: 500
            });

            await expect(getWeather()).rejects.toThrow(
                'Error al obtener información meteorológica'
            );
        });

        it('debería lanzar un error cuando fetch falla', async () => {
            (globalThis.fetch as any).mockRejectedValueOnce(
                new Error('Network timeout')
            );

            await expect(getWeather()).rejects.toThrow();
        });
    });
});
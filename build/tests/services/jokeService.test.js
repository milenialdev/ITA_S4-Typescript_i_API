import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getRandomJoke } from '../../src/services/jokeService';
globalThis.fetch = vi.fn();
describe('jokeService', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    describe('getRandomJoke', () => {
        it('debería retornar un chiste cuando la API responde correctamente', async () => {
            const mockJokeData = {
                id: '123',
                joke: 'test joke',
                status: 200
            };
            globalThis.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => mockJokeData
            });
            const result = await getRandomJoke();
            expect(result).toEqual(mockJokeData);
            expect(globalThis.fetch).toHaveBeenCalledTimes(1);
        });
        it('Debería llamar a la URL correcta con headers correctos', async () => {
            const mockData = { id: '123', joke: 'test joke', status: 200 };
            globalThis.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => mockData
            });
            await getRandomJoke();
            expect(globalThis.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', {
                headers: {
                    'Accept': 'application/json'
                }
            });
        });
        it('Debería lanzar un error cuando la respuesta no es ok', async () => {
            globalThis.fetch.mockResolvedValueOnce({
                ok: false,
                status: 500
            });
            await expect(getRandomJoke()).rejects.toThrow('Error al obtener el chiste y eso no hace gracia');
        });
        it('debería lanzar un error cuando fetch falla', async () => {
            globalThis.fetch.mockRejectedValueOnce(new Error('Network error'));
            await expect(getRandomJoke()).rejects.toThrow();
        });
    });
});
//# sourceMappingURL=jokeService.test.js.map
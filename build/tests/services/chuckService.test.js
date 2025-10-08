import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getChuckJoke } from '../../src/services/chuckService';
globalThis.fetch = vi.fn();
describe('chuckService', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    describe('getChuckJoke', () => {
        it('debería retornar un chiste de Chuck Norris cuando la API responde correctamente', async () => {
            const mockChuckData = {
                value: 'Chuck Norris can divide by zero.',
                id: 'abc123',
                url: 'https://api.chucknorris.io/jokes/abc123'
            };
            globalThis.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => mockChuckData
            });
            const result = await getChuckJoke();
            expect(result).toEqual(mockChuckData);
            expect(globalThis.fetch).toHaveBeenCalledTimes(1);
        });
        it('debería llamar a la URL correcta de la API de Chuck Norris', async () => {
            const mockData = {
                value: 'Test joke',
                id: 'test123',
                url: 'https://test.com'
            };
            globalThis.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => mockData
            });
            await getChuckJoke();
            expect(globalThis.fetch).toHaveBeenCalledWith('https://api.chucknorris.io/jokes/random');
        });
        it('debería lanzar un error cuando la respuesta no es ok', async () => {
            globalThis.fetch.mockResolvedValueOnce({
                ok: false,
                status: 404
            });
            await expect(getChuckJoke()).rejects.toThrow('Error al obtener el chiste de Chuck y eso no hace gracia');
        });
        it('debería lanzar un error cuando fetch falla', async () => {
            globalThis.fetch.mockRejectedValueOnce(new Error('Network error'));
            await expect(getChuckJoke()).rejects.toThrow();
        });
    });
});
//# sourceMappingURL=chuckService.test.js.map
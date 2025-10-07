import { describe, it, expect } from 'vitest';
import { getWeatherDescription } from '../../src/utils/weatherHelpers';

describe('weatherHelpers', () => {
    describe('getWeatherDescription', () => {
        it('Debería retornar "Cel clar" para código 0', () => {
            expect(getWeatherDescription(0)).toBe('Cel clar');
        });
        it('Debería retornar "Pluja lleugera para código 61', () => {
            expect(getWeatherDescription(61)).toBe('Pluja lleugera');
        });
        it('Debería retornar "Desconegut" para código 1000', () => {
            expect(getWeatherDescription(1000)).toBe('Desconegut')
        });
        it('Debería retornar "Desconegut" para código -1', () => {
            expect(getWeatherDescription(-1)).toBe('Desconegut')
        });
    });
});
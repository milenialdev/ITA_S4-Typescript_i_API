import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { getCurrentISODate, isValidScore, createJokeReport } from '../../src/utils/reportHelpers';
describe('reportHelpers', () => {
    describe('isValidScore', () => {
        it('Debería retornar "true" para valor 1', () => {
            expect(isValidScore(1)).toBe(true);
        });
        it('Debería retornar "true" para valor 2', () => {
            expect(isValidScore(2)).toBe(true);
        });
        it('Debería retornar "true" para valor 3', () => {
            expect(isValidScore(3)).toBe(true);
        });
        it('Debería retornar "false" para valor 0', () => {
            expect(isValidScore(0)).toBe(false);
        });
        it('Debería retornar "false" para valor 1,5', () => {
            expect(isValidScore(1.5)).toBe(false);
        });
    });
    describe('getCurrentISODate', () => {
        beforeEach(() => {
            vi.useFakeTimers();
            vi.setSystemTime(new Date('2025-10-07T12:00:00.000Z'));
        });
        afterEach(() => {
            vi.useRealTimers();
        });
        it('Debería retornar una fecha en formato ISO', () => {
            const result = getCurrentISODate();
            expect(result).toBe('2025-10-07T12:00:00.000Z');
        });
        it('Debería retornar un string', () => {
            const result = getCurrentISODate();
            expect(typeof result).toBe('string');
        });
    });
    describe('createJokeReport', () => {
        beforeEach(() => {
            vi.useFakeTimers();
            vi.setSystemTime(new Date('2025-10-07T15:30:00.000Z'));
        });
        afterEach(() => {
            vi.useRealTimers();
        });
        it('debería crear un reporte con todos los campos correctos', () => {
            const joke = 'texto test';
            const score = 2;
            const result = createJokeReport(joke, score);
            expect(result).toEqual({
                joke: joke,
                score: score,
                date: '2025-10-07T15:30:00.000Z'
            });
        });
        it('Debería incluir la fecha actual en el reporte', () => {
            const result = createJokeReport('Texto test', 2);
            expect(result.date).toBe('2025-10-07T15:30:00.000Z');
        });
        it('Debería mantener el texto del chiste sin modificar', () => {
            const joke = '  Chiste con espacios  ';
            const result = createJokeReport(joke, 2);
            expect(result.joke).toBe(joke);
        });
    });
});
//# sourceMappingURL=reportHelpers.test.js.map
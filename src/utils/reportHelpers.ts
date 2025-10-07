import { JokeReport } from '../types';

export function getCurrentISODate(): string {
    const currentDate = new Date().toISOString()
    return currentDate
}

export function isValidScore(score: number): boolean {
    return score === 1 || score === 2 || score === 3;
}

export function createJokeReport(joke: string, score: 1 | 2 | 3): JokeReport {
    return {
        joke: joke,
        score: score,
        date: getCurrentISODate()
    }
}

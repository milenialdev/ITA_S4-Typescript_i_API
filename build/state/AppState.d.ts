import { JokeReport } from '../src/types';
declare class AppState {
    private currentJoke;
    private currentScore;
    private reports;
    setJoke(joke: string): void;
    getCurrentJoke(): string;
    setScore(score: 1 | 2 | 3): void;
    getCurrentScore(): 1 | 2 | 3 | null;
    resetScore(): void;
    addReport(report: JokeReport): void;
    getReports(): JokeReport[];
}
export declare const appState: AppState;
export {};
//# sourceMappingURL=AppState.d.ts.map
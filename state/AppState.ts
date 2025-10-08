import { JokeReport } from '../src/types';

class AppState {
    private currentJoke: string = '';
    private currentScore: 1 | 2 | 3 | null = null;
    private reports: JokeReport[] = [];

    setJoke(joke: string): void{
        this.currentJoke = joke;
    }

    getCurrentJoke(): string{
        return this.currentJoke;
    }

    setScore(score: 1 | 2 | 3): void{
        this.currentScore = score;
    }

    getCurrentScore(): 1 | 2 | 3 | null{
        return this.currentScore;
    }

    resetScore():void{
        this.currentScore = null;
    }

    addReport(report: JokeReport): void{
        this.reports.push(report);
        console.log('Reportes guardados:', this.reports);
    }

    getReports(): JokeReport[]{
        return [...this.reports];
    }
}

export const appState = new AppState();

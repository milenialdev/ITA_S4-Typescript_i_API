class AppState {
    currentJoke = '';
    currentScore = null;
    reports = [];
    setJoke(joke) {
        this.currentJoke = joke;
    }
    getCurrentJoke() {
        return this.currentJoke;
    }
    setScore(score) {
        this.currentScore = score;
    }
    getCurrentScore() {
        return this.currentScore;
    }
    resetScore() {
        this.currentScore = null;
    }
    addReport(report) {
        this.reports.push(report);
        console.log('Reportes guardados:', this.reports);
    }
    getReports() {
        return [...this.reports];
    }
}
export const appState = new AppState();
//# sourceMappingURL=AppState.js.map
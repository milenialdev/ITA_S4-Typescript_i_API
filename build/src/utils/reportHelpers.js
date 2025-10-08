export function getCurrentISODate() {
    const currentDate = new Date().toISOString();
    return currentDate;
}
export function isValidScore(score) {
    return score === 1 || score === 2 || score === 3;
}
export function createJokeReport(joke, score) {
    return {
        joke: joke,
        score: score,
        date: getCurrentISODate()
    };
}
//# sourceMappingURL=reportHelpers.js.map
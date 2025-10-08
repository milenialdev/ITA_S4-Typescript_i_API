import { getRandomJoke } from '../src/services/jokeService';
import { getChuckJoke } from '../src/services/chuckService';
import { createJokeReport } from '../src/utils/reportHelpers';
import { appState } from '../state/AppState';
async function loadNewJoke() {
    try {
        let joke;
        if (Math.random() < 0.5) {
            const data = await getRandomJoke();
            joke = data.joke;
        }
        else {
            const data = await getChuckJoke();
            joke = data.value;
        }
        if (!joke || joke.trim() === '') {
            throw new Error('L\'API ha retornat un acudit buit');
        }
        appState.setJoke(joke);
        appState.resetScore();
        return joke;
    }
    catch (error) {
        console.error('Error al mostrar l\'acudit:', error);
        throw error;
    }
}
function handleRatingClick(score) {
    appState.setScore(score);
}
async function handleNextJoke() {
    const currentScore = appState.getCurrentScore();
    if (currentScore !== null) {
        const currentJoke = appState.getCurrentJoke();
        const report = createJokeReport(currentJoke, currentScore);
        appState.addReport(report);
    }
    const newJoke = await loadNewJoke();
    return newJoke;
}
export { loadNewJoke, handleRatingClick, handleNextJoke };
//# sourceMappingURL=JokeController.js.map
import './styles.css';
import { loadNewJoke, handleRatingClick, handleNextJoke } from '../controllers/JokeController';
import { loadWeather } from '../controllers/WeatherController';
const jokeText = document.querySelector('#joke-text');
const nextBtn = document.querySelector('#next-joke-btn');
const ratingBtns = document.querySelectorAll('.rating-btn');
const weatherInfo = document.querySelector('#weather-info');
// DOM Manipulation
function renderJoke(joke) {
    jokeText.textContent = joke;
}
function renderWeather(weatherText) {
    weatherInfo.textContent = weatherText;
}
function updateRatingButtons(score) {
    ratingBtns.forEach(btn => btn.classList.remove('selected'));
    if (score !== null) {
        const selectedBtn = document.querySelector(`[data-score="${score}"]`);
        selectedBtn?.classList.add('selected');
    }
}
function showJokeError() {
    jokeText.textContent = 'Error al carregar l\'acudit. Torna-ho a intentar.';
}
function showWeatherError() {
    weatherInfo.textContent = 'No es pot carregar el temps';
}
//Event Listeners
nextBtn.addEventListener('click', async () => {
    try {
        const newJoke = await handleNextJoke();
        renderJoke(newJoke);
        updateRatingButtons(null);
    }
    catch (error) {
        showJokeError();
    }
});
ratingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const score = parseInt(btn.dataset.score);
        handleRatingClick(score);
        updateRatingButtons(score);
    });
});
// ===== INICIALIZACIÓN =====
async function init() {
    try {
        const weather = await loadWeather();
        renderWeather(weather);
    }
    catch (error) {
        showWeatherError();
    }
    try {
        const joke = await loadNewJoke();
        renderJoke(joke);
    }
    catch (error) {
        showJokeError();
    }
}
init();
//# sourceMappingURL=main.js.map
import './styles.css';
import { loadNewJoke, handleRatingClick, handleNextJoke } from '../controllers/JokeController';
import { loadWeather } from '../controllers/WeatherController';

const jokeText = document.querySelector('#joke-text') as HTMLParagraphElement;
const nextBtn = document.querySelector('#next-joke-btn') as HTMLButtonElement;
const ratingBtns = document.querySelectorAll('.rating-btn') as NodeListOf<HTMLButtonElement>;
const weatherInfo = document.querySelector('#weather-info') as HTMLParagraphElement;

// DOM Manipulation

function renderJoke(joke: string): void {
    jokeText.textContent = joke;
}

function renderWeather(weatherText: string): void {
    weatherInfo.textContent = weatherText;
}

function updateRatingButtons(score: 1 | 2 | 3 | null): void {
    ratingBtns.forEach(btn => btn.classList.remove('selected'));
    if (score !== null) {
        const selectedBtn = document.querySelector(`[data-score="${score}"]`);
        selectedBtn?.classList.add('selected');
    }
}

function showJokeError(): void {
    jokeText.textContent = 'Error al carregar l\'acudit. Torna-ho a intentar.';
}

function showWeatherError(): void {
    weatherInfo.textContent = 'No es pot carregar el temps';
}

//Event Listeners
nextBtn.addEventListener('click', async () => {
    try {
        const newJoke = await handleNextJoke();
        renderJoke(newJoke);
        updateRatingButtons(null);
    } catch (error) {
        showJokeError();
    }
});

ratingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const score = parseInt(btn.dataset.score!) as 1 | 2 | 3;
        handleRatingClick(score);
        updateRatingButtons(score);
    });
});

//App Initialization

async function init() {
    try {
        const weather = await loadWeather();
        renderWeather(weather);
    } catch (error) {
        showWeatherError();
    }

    try {
        const joke = await loadNewJoke();
        renderJoke(joke);
    } catch (error) {
        showJokeError();
    }
}

init();
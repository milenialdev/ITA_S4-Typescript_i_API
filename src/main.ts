import './styles.css';
import { getRandomJoke } from './services/jokeService';
import { JokeReport } from './types';
import { createJokeReport } from './utils/reportHelpers';
import { getWeather } from './services/weatherService';
import { getWeatherDescription } from './utils/weatherHelpers';
import { getChuckJoke } from './services/chuckService';

const jokeText = document.querySelector('#joke-text') as HTMLParagraphElement;
const nextBtn = document.querySelector('#next-joke-btn') as HTMLButtonElement;
const ratingBtns = document.querySelectorAll('.rating-btn') as NodeListOf<HTMLButtonElement>;
const weatherInfo = document.querySelector('#weather-info') as HTMLParagraphElement;
const reportAcudits: JokeReport[] = [];
let currentJoke: string = '';
let currentScore: 1 | 2 | 3 | null = null;

async function displayJoke() {
    try{
        let joke: string;

        if (Math.random() < 0.5){
            const data = await getRandomJoke();
            joke = data.joke;
        } else {
            const data = await getChuckJoke();
            joke = data.value;
        }

        if (!joke || joke.trim() === '') {
            throw new Error('L\'API ha retornat un acudit buit');
        }
        console.log('Acudit obtingut:', joke);
        jokeText.textContent = joke;
        currentJoke = joke;
        currentScore = null;
        ratingBtns.forEach(btn => btn.classList.remove('selected'));
    } catch (error) {
        console.error ('Error al mostrar el chiste:', error)
        jokeText.textContent = 'Error al carregar l\'acudit. Torna-ho a intentar.'
    }
    
}

function handleRatingClick(score: 1 | 2 | 3){
    currentScore = score;
    ratingBtns.forEach(btn => btn.classList.remove('selected'));
    const clickedBtn = document.querySelector(`[data-score="${score}"]`);
    clickedBtn?.classList.add('selected');
}

async function displayWeather() {
    try{
        const weather = await getWeather();
        const description = getWeatherDescription(weather.current.weather_code);
        const temp = Math.round(weather.current.temperature_2m);
        weatherInfo.textContent = `${description} ${temp}°C`;
    }catch (error) {
        console.error('Error al mostrar el tiempo:', error);
        weatherInfo.textContent = 'No es pot carregar el temps';
    }
    
}

// Show first joke and weather after loading the web
displayJoke();
displayWeather();

// Show jokes after clicking on button
nextBtn.addEventListener('click', () => {
    if (currentScore !== null) {
        const report = createJokeReport(currentJoke, currentScore);
        reportAcudits.push(report);
        console.log('Reportes guardados:', reportAcudits);
    }
    displayJoke();
});

// Gets scores from buttons
ratingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const score = parseInt(btn.dataset.score!) as 1 | 2 | 3;
        handleRatingClick(score);
    });
});


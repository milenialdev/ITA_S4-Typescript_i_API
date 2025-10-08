import { getWeather } from '../src/services/weatherService';
import { getWeatherDescription } from '../src/utils/weatherHelpers';
async function loadWeather() {
    try {
        const weather = await getWeather();
        const description = getWeatherDescription(weather.current.weather_code);
        const temp = Math.round(weather.current.temperature_2m);
        return `${description} ${temp}°C`;
    }
    catch (error) {
        console.error('Error al mostrar el tiempo:', error);
        throw error;
    }
}
export { loadWeather };
//# sourceMappingURL=WeatherController.js.map
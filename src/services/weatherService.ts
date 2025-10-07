import { WeatherResponse } from "../types";

export async function getWeather(): Promise<WeatherResponse> {
    try{
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.3874&longitude=2.1686&current=temperature_2m,weather_code&timezone=Europe/Madrid');

    if (!response.ok) {
        throw new Error('Error al obtener información meteorológica');
    }

    const data = await response.json();
    return data;
    } catch(error) {
        console.error('Error en getWeather:', error);
        throw error;
    }
}


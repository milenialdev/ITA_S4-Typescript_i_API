import { JokeResponse } from "../types";

export async function getRandomJoke(): Promise<JokeResponse> {
    try{
        const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Error al obtener el chiste y eso no hace gracia');
    }

    const data = await response.json();
    return data;
    } catch(error) {
        console.error('Error en getRandomJoke:', error);
        throw error;
    }
}
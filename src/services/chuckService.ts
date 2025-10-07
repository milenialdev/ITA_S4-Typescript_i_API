import { ChuckResponse } from "../types";

export async function getChuckJoke(): Promise<ChuckResponse> {
    try{
        const response = await fetch('https://api.chucknorris.io/jokes/random');

    if (!response.ok) {
        throw new Error('Error al obtener el chiste de Chuck y eso no hace gracia');
    }

    const data = await response.json();
    return data;
    } catch(error) {
        console.error('Error en getChuckJoke:', error);
        throw error;
    }
}
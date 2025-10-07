export interface JokeResponse {
    id: string;
    joke: string;
    status: number;
}


export interface JokeReport {
    joke: string;
    score: 1 | 2 | 3;
    date: string;
}

export interface WeatherResponse {
    current: {
        time: string;
        temperature_2m: number;
        weather_code: number;
    };
}

export interface ChuckResponse {
    value: string,
    id: string, 
    url: string
}
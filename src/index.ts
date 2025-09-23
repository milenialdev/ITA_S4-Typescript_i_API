document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('next-joke')!;
    const container = document.getElementById('joke-container')!;
    button.addEventListener('click', async () => {
        try{
           const response = await fetch('https://icanhazdadjoke.com/', {
            headers: { 'Accept': 'application/json' }
            });
            const data = await response.json();
            console.log(data.joke);
            container.textContent = data.joke; 
        } catch (error){
            console.error(error);
        }
    });
});
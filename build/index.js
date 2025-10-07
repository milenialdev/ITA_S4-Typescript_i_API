document.addEventListener('DOMContentLoaded', () => {
    const reportAcudits = [];
    let currentJoke = '';
    let currentScore = null;
    const button = document.getElementById('next-joke');
    const container = document.getElementById('joke-container');
    const scoreButtons = Array.from(document.querySelectorAll('.score-btn'));
    async function loadJoke() {
        try {
            const response = await fetch('https://icanhazdadjoke.com/', {
                headers: { 'Accept': 'application/json' }
            });
            const data = await response.json();
            currentJoke = data.joke;
            container.textContent = currentJoke;
            currentScore = null;
            scoreButtons.forEach(btn => btn.classList.remove('selected'));
        }
        catch (error) {
            console.error(error);
        }
    }
    scoreButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const score = Number(btn.dataset.score);
            currentScore = score;
            scoreButtons.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });
    button.addEventListener('click', () => {
        if (currentJoke && currentScore) {
            reportAcudits.push({
                joke: currentJoke,
                score: currentScore,
                date: new Date().toISOString()
            });
            console.log(reportAcudits);
        }
        loadJoke();
    });
    loadJoke();
});
export {};
//# sourceMappingURL=index.js.map
let currentQuote;
let score = 0;
let timeLeft = 120;
let timer;
let quotesAnswered = 0;

const homeScreen = document.getElementById('home-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const playAgainBtn = document.getElementById('play-again');
const quoteText = document.querySelector('.quote-text');
const optionsContainer = document.querySelector('.options');
const timeDisplay = document.getElementById('time');
const scoreDisplay = document.getElementById('score');

startBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', () => {
    endScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
    resetGame();
});

function startGame() {
    homeScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    resetGame();
    showNextQuote();
    startTimer();
}

function resetGame() {
    score = 0;
    timeLeft = 120;
    quotesAnswered = 0;
    updateDisplay();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    scoreDisplay.textContent = score;
}

function showNextQuote() {
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = `「${currentQuote.text}」`;
    
    const options = [currentQuote.author, ...currentQuote.fakeAuthors];
    shuffleArray(options);
    
    optionsContainer.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedAuthor) {
    quotesAnswered++;
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === currentQuote.author) {
            button.classList.add('correct');
        } else if (button.textContent === selectedAuthor && selectedAuthor !== currentQuote.author) {
            button.classList.add('wrong');
        }
    });

    if (selectedAuthor === currentQuote.author) {
        const timeBonus = Math.ceil(timeLeft / 10);
        const points = 100 + timeBonus;
        score += points;
        
        // Create and animate a floating score indicator
        const scoreIndicator = document.createElement('div');
        scoreIndicator.textContent = `+${points}`;
        scoreIndicator.style.cssText = `
            position: absolute;
            color: #4CAF50;
            font-weight: bold;
            font-size: 1.2rem;
            animation: floatUp 1s ease-out forwards;
            pointer-events: none;
        `;
        document.querySelector('.quote-container').appendChild(scoreIndicator);
        
        setTimeout(() => scoreIndicator.remove(), 1000);
        updateDisplay();
    }

    setTimeout(() => {
        showNextQuote();
    }, 1000);
}

function endGame() {
    clearInterval(timer);
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('quotes-answered').textContent = quotesAnswered;
    
    const achievementMessage = getAchievementMessage();
    document.getElementById('achievement-message').textContent = achievementMessage;
}

function getAchievementMessage() {
    const accuracy = quotesAnswered > 0 ? (score / (quotesAnswered * 100)) * 100 : 0;
    
    if (score >= 1500) {
        return `
🏆 傳奇名言大師！ 🏆\n
你擁有無與倫比的智慧！
分數：${score} | 準確率：${accuracy.toFixed(1)}%
你已達到真正的無人的境界！
        `;
    }
    if (score >= 1000) {
        return `
✨ 精英名言達人！ ✨
你的知識真是令人讚嘆！
分數：${score} | 準確率：${accuracy.toFixed(1)}%
你已躋身精英名言達人的行列！
        `;
    }
    if (score >= 500) {
        return `
📚 厲害的名言愛好者！ 📚
你正一步一步的往上爬！
分數：${score} | 準確率：${accuracy.toFixed(1)}%
繼續保持這驚人的表現！
        `;
    }
    if (accuracy >= 75) {
        return `
🌟 冉冉升起的新星！ 🌟
你展現了巨大的潛力！
分數：${score} | 準確率：${accuracy.toFixed(1)}%
熟能生巧！
        `;
    }
    return `
🎯 勇敢的挑戰者！ 🎯
每位大師都曾是位新手！
分數：${score} | 準確率：${accuracy.toFixed(1)}%
繼續學習，再接再厲！
    `;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-50px); opacity: 0; }
    }
`;
document.head.appendChild(style);

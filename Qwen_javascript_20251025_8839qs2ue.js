// Открытие конверта
document.getElementById('envelope').addEventListener('click', function() {
    this.classList.add('opened');
    setTimeout(() => {
        document.getElementById('invitation').classList.add('show');
        createFloatingHearts();
    }, 600);
});

// Обработка ответов
function showResponse(type) {
    document.getElementById('invitation').classList.remove('show');
    setTimeout(() => {
        document.getElementById('response-' + type).classList.add('show');
        if (type === 'yes') {
            createCelebration();
        }
    }, 300);
}

// Создание плавающих сердечек
function createFloatingHearts() {
    const heartsContainer = document.getElementById('floating-hearts');
    const hearts = ['💕', '💖', '💗', '💝', '💘'];
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heartsContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 800);
}

// Празднование при положительном ответе
function createCelebration() {
    const heartsContainer = document.getElementById('floating-hearts');
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = '🎉';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = '3s';
            heart.style.fontSize = '30px';
            heartsContainer.appendChild(heart);
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100);
    }
}

// Имитация фоновой музыки (визуальный эффект)
function animateMusicNote() {
    const musicNote = document.querySelector('.music-note');
    const notes = ['♪', '♫', '♬', '♩'];
    let index = 0;
    setInterval(() => {
        musicNote.textContent = notes[index];
        index = (index + 1) % notes.length;
    }, 2000);
}

// Запуск анимации музыкальной ноты
animateMusicNote();
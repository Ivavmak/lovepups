const heartContainer = document.getElementById('heart-container');
const phraseCounter = document.getElementById('phraseCount');

const phrases = [
    'Люблю тебя!',
    'Маленькая моя!',
    'Самая лучшая!',
    'Я всегда рядом!',
    'Бусинка!',
    'Пупа моя!',
    'Принцесска!',
    'Самая красивая!',
    'Свети ярче!',
    'Я тебя обожаю!',
	'Мои<br>156см счастья!',
	'Против зелёных глаз<br>иммунитета нет!',
	'Самая красивая<br>вишенка!',
	'Безумно<br>люблю тебя!',
	'Карим глазам<br>суждено быть<br>с зелёными!',
	'Заобнимаю!',
	'Люблю!'
];

function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

function createHeart(count) {
    for (let i = 0; i < count; i++) {
        const heartDiv = document.createElement('div');
        heartDiv.className = 'heart';
        
        heartDiv.innerHTML = '<img src="g7034.png" alt="❤️">';
        
        const phraseLink = document.createElement('a');
        phraseLink.innerHTML = getRandomPhrase();
        
        heartDiv.appendChild(phraseLink);
        
        heartContainer.appendChild(heartDiv);
    }
}

function handleScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight - 600) {
        createHeart(50);
        console.log(heartsCount);
    }
}

window.addEventListener('scroll', handleScroll);

phraseCounter.textContent = 'Всего: ' + phrases.length + ' надписей';
createHeart(100);

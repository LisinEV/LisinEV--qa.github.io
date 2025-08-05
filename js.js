/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('просто кнопка')
})
// Функция обновления текущего времени
function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Форматирование вывода времени: ЧЧ:ММ:СС
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

// Обновляем каждые секунду
setInterval(updateClock, 1000);

// Запускаем обновление сразу же при загрузке страницы
updateClock();
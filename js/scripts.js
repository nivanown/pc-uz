/*- search-panel -*/
document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-panel__icon');
    const searchDropdown = document.querySelector('.search-panel__dropdown');
    const searchOverlay = document.querySelector('.search-panel__overlay');  // Находим элемент overlay

    // Функция для переключения классов
    function togglePanel() {
        searchIcon.classList.toggle('open');
        searchDropdown.classList.toggle('show');
    }

    // Функция для удаления классов
    function closePanel() {
        searchIcon.classList.remove('open');
        searchDropdown.classList.remove('show');
    }

    // Обработчик клика на search-panel__icon
    searchIcon.addEventListener('click', function(event) {
        event.stopPropagation();  // Останавливаем всплытие события, чтобы не вызвать закрытие при клике на саму панель
        togglePanel();
    });

    // Обработчик клика на свободную область (document)
    document.addEventListener('click', function(event) {
        // Если клик не по панели, закрываем панель
        if (!searchIcon.contains(event.target) && !searchDropdown.contains(event.target)) {
            closePanel();
        }
    });

    // Обработчик клика на search-panel__overlay
    searchOverlay.addEventListener('click', function() {
        closePanel();  // Закрываем панель при клике на overlay
    });
});

/*- language -*/
document.addEventListener('DOMContentLoaded', function() {
    const languageText = document.querySelector('.language__text');
    const languageDropdown = document.querySelector('.language__dropdown');

    // Функция для переключения классов
    function togglePanel() {
        languageText.classList.toggle('open');
        languageDropdown.classList.toggle('show');
    }

    // Функция для удаления классов
    function closePanel() {
        languageText.classList.remove('open');
        languageDropdown.classList.remove('show');
    }

    // Обработчик клика на user-panel__col
    languageText.addEventListener('click', function(event) {
        event.stopPropagation();  // Останавливаем всплытие события, чтобы не вызвать закрытие при клике на саму панель
        togglePanel();
    });

    // Обработчик клика на свободную область (document)
    document.addEventListener('click', function(event) {
        // Если клик не по панели, закрываем панель
        if (!languageText.contains(event.target) && !languageDropdown.contains(event.target)) {
            closePanel();
        }
    });
});

/*- discounts-slider -*/
document.querySelectorAll('.tabs__nav li').forEach(button => {
  button.addEventListener('click', () => {
    const tabNumber = button.getAttribute('data-tab');
    
    // Убираем активный класс у всех кнопок и контентов
    document.querySelectorAll('.tabs__nav li').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tabs__item').forEach(content => {
      content.classList.remove('active');
    });

    // Добавляем активный класс выбранным элементам
    button.classList.add('active');
    document.getElementById(`tab-${tabNumber}`).classList.add('active');
  });
});

/*- products-slider -*/
var swiper = new Swiper(".products-slider", {
	loop: true,
	slidesPerView: 5,
	spaceBetween: 20,
	navigation: {
		nextEl: ".products-slider .swiper-button-next",
		prevEl: ".products-slider .swiper-button-prev",
		},
	pagination: {
		el: ".products-slider .swiper-pagination",
		clickable: true,
		},
	keyboard: true,
});

/*- events-slider -*/
var swiper = new Swiper(".events-slider", {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: ".events-pagination",
		clickable: true,
	},
});
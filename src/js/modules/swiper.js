import Swiper from 'swiper/bundle';
new Swiper(document.querySelector('.swiper-feedback'), {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	//spaceBetween: 20,

	mousewheel: {
		//Чувствительность колеса мыши
		sensitivity: 1,
		//Класс объекта, на котором
		//будет срабатывать прокрутка мышью
		eventsTarget: '.swiper-feedback'
	},
	//Управление клавиатурой
	keyboard: {
		//Включить/выключить
		enabled: true,
		//Включить/выключить
		//только когда слайдер
		//в пределах вьюпорта
		onlyInViewport: true,
		//Включить/выключить
		//управление клавишами
		//pageUP, pageDown
		pageUpDown: true,
	},

	//перетаскивания на ПК
	simulateTouch: true,
	//Чувствительность свайпа
	touchRatio: 1,
	//Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	//Курсор перетаскивания
	grabCursor: true,

	// Navigation arrows
	navigation: {
		nextEl: '.left',
		prevEl: '.right',
	},
});

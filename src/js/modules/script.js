$('.wrapper').addClass('loaded');

$(document).ready(function () {
	/*ПРОВЕРЯЕМ НАЖАТА ЛИ КНОПКА ОТПРАВКИ*/
	$('.popup__button').click(function () {
		$.ajax({
			url: "send.php", // куда отправляем
			type: "post", // метод передачи
			data: { // что отправляем
				"name": user_name,
				"email": user_email,
			},
			error: function () { $("#erconts").html("Произошла ошибка!"); },
			/* если произойдет ошибка в элементе с id erconts выведится сообщение*/
			beforeSend: function () {
				$("#erconts").html("Отправляем данные...");
			},
			success: function (result) {
				/* В случае удачной обработки и отправки выполнится следующий код*/
				$('#erconts').html(result);
				checkThis();
			}
		});
		return false;
	});
});


//Scroll
let cords = ['scrollX', 'scrollY'];
// сохраняем позицию скролла в localStorage
window.addEventListener('unload', e => cords.forEach(cord => localStorage[cord] = window[cord]));
// вешаем событие на загрузку (ресурсов) страницы
window.addEventListener('load', e => {
	// если в localStorage имеются данные
	if (localStorage[cords[0]]) {
		// скроллим к сохраненным координатам
		window.scroll(...cords.map(cord => localStorage[cord]));
		// удаляем данные с localStorage
		cords.forEach(cord => localStorage.removeItem(cord));
	}
});

document.querySelectorAll('.__button').forEach(el => {
	el.addEventListener('click', () => {
		cords.forEach(cord => localStorage[cord] = window[cord]);
	});
});
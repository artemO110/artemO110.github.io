//Создаем наш объект с использованием литеральной нотации
//Объект = {идентификатор : значение,...} 
var page = {
	header: 'Тест по программированию',
	questions: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
	answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 
	'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 
	'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
	submit: 'Проверить мои результаты'

}



//СОЗДАЕМ КЛАСC WRAPPER
var wrapper = document.createElement('div');//создаем новый элемент div
wrapper.classList.add('wrapper');//создаем класс wrapper
document.body.appendChild(wrapper);// добавление в конец

//Заголовок
var header = document.createElement('h1')
wrapper.appendChild(header);
header.innerHTML = 'Тест по програмированию'

var ol = document.createElement('ol')
wrapper.appendChild(ol);

var k = 0; 

for (var i = 0; i < page.questions.length; i++) {
	var li = document.createElement('li')
	ol.appendChild(li);
	li.innerHTML = page.questions[i];
	var ul = document.createElement('ul')
	li.appendChild(ul);

	for(var j = 0; j < 3; j++) {

		var answerItem = document.createElement('li');
		ul.appendChild(answerItem)
		var answers = document.createElement('p');
		answerItem.appendChild(answers)
		var checkbox = document.createElement('input')
		checkbox.type = 'checkbox';
		checkbox.id = k + 1;
		answers.appendChild(checkbox);
		var label = document.createElement('label');
		label.setAttribute('for', k + 1);
		answers.appendChild(label);
		label.innerHTML = page.answers[k];

		k++
		
	}

}




//СОЗДАЕМ КНОПКУ
var btn = document.createElement('button'); // Create a <button> element
var t = document.createTextNode('Проверить мои результаты');       // Create a text node
btn.appendChild(t);                                // Append the text to <button>
document.body.appendChild(btn);   

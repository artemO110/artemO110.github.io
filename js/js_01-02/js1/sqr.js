function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {     /*умножаем х столько раз, не сравняемся с n*/
    result *= x;
  }

  return result;
}

var x = prompt("введите число, которое возводится в степень", '');
var n = prompt("введите степень, должна быть целым числом больше 1", '');

 if (x == 0) {
console.log('Результат не определен, пожалуйста введите значение больше нуля')
}

else if (n == 0) {
	console.log('Ответ: 1')
}

else if (n < 0 ) {
  alert('Степень' + ' ' + n + ' ' +
    'не поддерживается, введите целую степень, большую 1');
} 
else (n > 1)
  console.log ( pow(x, n) );

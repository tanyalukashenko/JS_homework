//1. Запросить у пользователя его возраст и определить, кем он является: 
// ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

let age = +prompt('Введите свой возраст:');

if(age < 12) {
	alert('Вы ребёнок');
} else if (age >= 12 && age < 18) {
	alert('Вы подросток');
} else if (age >= 18 && age < 60) {
	alert('Вы взрослый');
} else (age >= 60) {
	alert('Вы пенсионер');
	};



//2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, 
	/*который расположен на этой клавише (1–!, 2–@, 3–# и т. д).*/

/*let num = prompt('Введите число от 0 до 9');

switch (num) {
	case '0':
		alert('Этой клавише соответствует спецсимвол - }');
		break;
	case '1':
		alert('Этой клавише соответствует спецсимвол - !');
		break;
	case '2':
		alert('Этой клавише соответствует спецсимвол - @');
		break;
	case '3':
		alert('Этой клавише соответствует спецсимвол - #');
		break;
	case '4':
		alert('Этой клавише соответствует спецсимвол - $');
		break;
	case '5':
		alert('Этой клавише соответствует спецсимвол - %');
		break;
	case '6':
		alert('Этой клавише соответствует спецсимвол - ^');
		break;
	case '7':
		alert('Этой клавише соответствует спецсимвол - &');
		break;
	case '8':
		alert('Этой клавише соответствует спецсимвол - *');
		break;
	case '9':
		alert('Этой клавише соответствует спецсимвол - (');
		break;
}*/



//3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

/*let num = prompt('Введите трехзначное число:');
let num1 = num[0];
let num2 = num[1];
let num3 = num[2];

if(num1 == num2 || num1 == num3 || num2 == num3) {
	alert('В числе есть одинаковые цифры');
} else {
	alert('В числе нет одинаковых цифр')
}*/




//4. Запросить у пользователя год и проверить, високосный он или нет. 
/*Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.*/

/*let year = +prompt('Введите год:');

if (year % 400 == 0 || year % 4 == 0 && year % 100 !== 0) {
	alert ('Это высокосный год');
} else {
	alert ('Это не высокосный год');
}*/




//5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

/*let num = prompt('Введите пятизначное число:');
let num1 = num[0];
let num2 = num[1];
let num3 = num[2];
let num4 = num[3];
let num5 = num[4];

if (num1 == num5 && num2 == num4) {
	alert ('Это число является палиндромом');
} else {
	alert('Это число не является палиндромом');
}*/




//6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, 
// в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

// let amount = +prompt('Введите сумму USD:');
// let currency = prompt('Введите валюту (EUR, UAH, RUB):');
// let EUR = 0.82;
// let UAH = 28.09;
// let	RUB = 75.35;
// let result = 0;

// switch(currency){
// 	case 'EUR':
// 	result = amount * EUR;
// 	alert(amount + " USD" + " = " + result + " EUR");
// 	break;
// 	case 'UAH':
// 	result = amount * UAH;
// 	alert(amount + " USD" + " = " + result + " UAH");
// 	break;
// 	case 'RUB':
// 	result = amount * RUB;
// 	alert(amount + " USD" + " = " + result + " RUB");
// 	break;
// }




//7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
 // от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

// let sum = +prompt('Введите сумму покупки:');
// let discount = 0;
// let	sumDiscount = 0;

// if(sum >= 200 && sum < 300) {
// 	discount = sum * 3 / 100;
// 	sumDiscount = sum - discount;
// 	alert('Сумма к оплате со скидкой: '+ sumDiscount + " y.e.")
// } else if(sum >= 300 && sum < 500) {
// 	discount = sum * 5 / 100;
// 	sumDiscount = sum - discount;
// 	alert('Сумма к оплате со скидкой: '+ sumDiscount + " y.e.")
// 	} else if(sum >= 500) {
// 	discount = sum * 7 / 100;
// 	sumDiscount = sum - discount;
// 	alert('Сумма к оплате со скидкой: '+ sumDiscount + " y.e.")
// 	}




//8. Запросить у пользователя длину окружности и периметр квадрата. 
// Определить, может ли такая окружность поместиться в указанный квадрат.

// Радиус вписанной в квадрат окружности равен половине стороны квадрата. Следовательно,
// если радиус окружности будет больше стороны квадрата, то окружность не поместиться в указанный квадрат

// let L_circle = +prompt('Введите длину окружности:');
// let P_square = +prompt('Введите периметр квадрата:');
// let R_circle = L_circle / 2 * 3.14;
// let sideSquare = P_square / 4;

// if(R_circle < sideSquare) {
// 	alert('Такая окружность поместиться в указанный квадрат');
// } else {
// 	alert('Такая окружность не поместиться в указанный квадрат');
// }




// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
// За каждый правильный ответ начисляется 2 балла. После вопросов выведите 
// пользователю количество набранных баллов.

// let firstAnswer = +prompt('Какое из представленных чисел являетя целым?' + ' (Выберите 1 - 3)\n1) .0000009\n2) 3.14\n3) 127');
// let secondAnswer = +prompt('Какой из следующих вариантов сохраняет число 225.622 в переменной milesToTheMoon?' + ' (Выберите 1 - 3)\n1) var milesToTheMoon=225.622;\n2) var milesToTheMoon=225622;\n3) var milesToTheMoon=225,622;');
// let thirdAnswer = +prompt('Что выведет данный код?\nalert( null || 2 || undefined );\n' + '(Выберите 1 - 3)\n1) 2\n2) undefined\n3) ошибку');
// let result = 0;

// if(firstAnswer == 3){
// 	result += 2;
// } if(secondAnswer == 1){
// 	result += 2;
// 	} if(thirdAnswer == 3) 
// 		result += 2;
// alert('Ваш результат: ' + result);


// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату.
// Учтите возможность перехода на следующий месяц, год, а также високосный год.
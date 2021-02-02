// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.

// let numStart = +prompt('Введите начальное число');
// let numFinish = +prompt('Введите конечное число');
// let sum = 0;

// for (let i = numStart; i <= numFinish; i++) {
// 	sum = sum + i;
// }

// alert('Сумма чисел в промежутке от ' + numStart + ' до ' + numFinish + ' равна ' + sum);



//2. Запросить 2 числа и найти только наибольший общий делитель.

// let firstNum = +prompt('Введите первое число');
// let secondNum = +prompt('Введите второе число');

// let firstNum = +prompt('Введите первое число');
// let secondNum = +prompt('Введите второе число');
// let minNum = Math.min(firstNum, secondNum);

// for (; minNum >= 1; minNum--) {
//   if (firstNum % minNum == 0 && secondNum % minNum == 0) {
//     alert('Наибольший общий делитель: 'minNum);
//     break;
//   }
// }


//3. Запросить у пользователя число и вывести все делители этого числа.

// let num = +prompt('Введите число');

// for (let i = 1; i <= num; i++) {
// 	if (num % i == 0) {
//     console.log(i);
//   }
// }


//4. Определить количество цифр в введенном числе.

// let num = prompt('Введите число');
// let result = 0;

// for (var i = 0; i < num.length; i++) {
// 	result = i;
// }

// alert('Количество цифр в введенном числе: ' +i);



//5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных,
 // отрицательных и нулей. При этом также посчитать, сколько четных и нечетных.
  // Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) 
  // для ввода чисел пользователем.

// let positive=0;
// let negative=0;
// let zero=0;
// let even=0;
// let odd=0;

// for (let i=1; i<=10; i++ ) {
// let num = prompt("Введите число");
// 	if (num>0) {  
// 	  positive++;
// 	} 
// 	if (num<0) {
// 	  negative++;
// 	}
// 	if (num==0) {
// 	  zero++;
// 	}
// 	if (num%2==0) {
// 	  even++;
// 	}
// 	if (num%2!==0) {
// 	  odd++;
// 	}
// };

// console.log('Положительных чисел: ' + positive);
// console.log('Отрицательных чисел: ' + negative);
// console.log('Нолей: ' + zero);
// console.log('Четных чисел: ' + even);
// console.log('Нечетных чисел: ' + odd);


// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, 
// вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, 
// пока пользователь не откажется.
// let firstNum = 0;
// let secondNum = 0;
// let operator = '';
// let result = 0;
// let answer = false;
// do{
// 	firstNum = +prompt('Введите первое число');
// 	secondNum = +prompt('Введите второе число');
// 	operator = prompt('Введите знак');

// 	switch(operator){
// 		case '+':
// 		result = firstNum + secondNum
// 		alert(firstNum + ' + ' + secondNum + ' = ' + result);
// 		break;
// 		case '-':
// 		result = firstNum - secondNum
// 		alert(firstNum + ' - ' + secondNum + ' = ' + result);
// 		break;
// 		case '*':
// 		result = firstNum * secondNum
// 		alert(firstNum + ' * ' + secondNum + ' = ' + result);
// 		break;
// 		case '/':
// 		result = firstNum / secondNum
// 		alert(firstNum + ' / ' + secondNum + ' = ' + result);
// 		break;
// 	}
// 	answer = confirm('Решить ещё один пример?');
// } while (answer);



// 7. Запросить у пользователя число и на сколько цифр его сдвинуть. 
// Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, 
// 	то получится 345612).
// let num = prompt('Введите число');
// let step = prompt("На сколько цифр его сдвинуть?");
// let newNum = 0;
// newNum = num.slice(step) + num.slice(0, step);
// alert(newNum);



//8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?»
 // и так до тех пор, пока пользователь нажимает OK.

// const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let currDay = 0;

// while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
//   currDay = (currDay + 1) % days.length;
// }

// 9. Вывести таблицу умножения для всех чисел от 2 до 9. 
// Каждое число необходимо умножить на числа от 1 до 10.

// for (i=2; i<10; i++) {
//   for (j=1; j<11; j++) {
//     let answer=i*j;
//     console.log(`${i}*${j}=${answer}`);
//   }
// }



//10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 
// и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, 
// записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». 
// В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон 
// от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, 
// то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

//  let X =parseInt(prompt("Задайте число от 0 до 100"));
//  let N=50;
//  let lower_range=0;
//  let upper_range=100;

//  while (X!==N) {
// 	let answer = prompt(`Ваше число >, < или = ${N}?`);  

// 	if (answer ==">") {
//   	lower_range=N;
//   	N=Math.ceil((upper_range-lower_range)/2 +lower_range);   
// 	} else if (answer =="<") {
//   		upper_range=N; 
//   		N=Math.ceil((upper_range-lower_range)/2 +lower_range)
//   	} else  {
//  			 break;
// 			}
//  }

// console.log(N);

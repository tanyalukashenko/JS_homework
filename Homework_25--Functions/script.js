// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе;
// 1 – если первое больше, чем второе; и 0 – если числа равны.

// function getNumber(num1, num2) {
//   if (num1 < num2) alert("-1");
//   else if (num1 > num2) alert("1");
//   else if (num1 == num2) alert("0");
// }

// getNumber(+prompt("Ввведите число "), +prompt("Ввведите число 2"));


//2. Написать функцию, которая вычисляет факториал переданного ей числа.

// function factorial(n) {
//   return n ? n * factorial(n - 1) : 1;
// }

// let res = factorial(+prompt("Ввведите число "));

// alert(res);


//3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. 
// Например: цифры 1, 4, 9 превратятся в число 149.
// let num = prompt("Ввведите число ");
// let num2 = prompt("Ввведите число 2 ");
// let num3 = prompt("Ввведите число 3 ");

// function getNumber(n, n2, n3) {
//   alert(n + n2 + n3);
// }

// getNumber(num, num2, num3);



//4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. 
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

// function calcSquare(length, width) {
//   if (length > 0 && width > 0) return length * width;
//   else if (length == 0) return width * width;
//   else if (width == 0) return length * length;
// }

// let res = calcSquare(+prompt("Ввведите длину"), +prompt("Ввведите ширину"));

// alert(res);

//5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
// Совершенное число – это число, равное сумме всех своих собственных делителей.

// let sum = 0;
// function checkPerfectNumber(num) {
// 	for (i = 1; i < num - 1; i++) {
// 	    if (num % i === 0) sum += i;
// 	  	}
// 		  if (sum === num) {
// 		  	console.log(num + " - совершенное число"); 
// 		  } else console.log(num + " - не совершенное число");{
// 	}
// }

// checkPerfectNumber(+prompt("Введите число"));


//6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
// и выводит только те числа из диапазона, которые являются совершенными. Используйте 
// написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
// function checkPerfectNumber2(start, end) {
//   for (i = start; i < end; i++) {
//     sum = 0;
//     for (n = 1; n < i; n++) {
//       if (i % n === 0) sum += n;
//     }
//     if (i === sum) console.log("совершенное число ", i);
//   }
// }

// checkPerfectNumber2(+prompt("Начало диапозона"), +prompt("Конец диапозона"));


//7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран
// в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то 
// выводить их как 00.

// const getTime = (hours, min, sec) => `${hours}:${min || "00"}:${sec || "00"}`;
// console.log(getTime(24, 24, 70));

//8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

// let toSeconds = function(hour, min, sec) {
//     if (hour < 0 || min < 0 || sec < 0 || min > 60 || sec > 60 ) {
//         console.log(-1);
//         return -1;
//     }
//     if (!min) {
//         min = 0;
//     } 
//     if (!sec) {
//         sec = 0;
//     }
//     if (!Number.isInteger(hour) || !Number.isInteger(min) || !Number.isInteger(sec)){
//         console.log(-3);
//         return -3;
//     }
    
//     sec = sec + min*60 + hour*60*60;
//     return sec;
// }

// console.log(toSeconds(1, 1, 1));

//9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и 
// секунды и возвращает в виде строки «чч:мм:сс».

// let fromSeconds = function (sec) {
//     let time;
//     if (sec < 0) {
//         console.log(-1);
//         return -1;
//     }
//     let hour = Math.floor(sec/3600);
//     sec = sec % 3600;
//     let min = Math.floor(sec/60);
//     sec = sec % 60;
//     if (hour < 10) {
//         hour = `0${hour}`
//     }
//     if (min < 10) {
//         min = `0${min}`
//     }
//     if (sec < 10) {
//         sec = `0${sec}`
//     }
//     time = `${hour}:${min}:${sec}`
//     //console.log(time);
//     return time;
// }

// console.log(fromSeconds(12345));

//10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров,
// которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». 
// При выполнении задания используйте функции из предыдущих 2-х заданий: 
// сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу 
// переведите обратно в «чч:мм:сс»

// let toSeconds = function(hour, min, sec) {
//     if (hour < 0 || min < 0 || sec < 0 || min > 60 || sec > 60 ) {
//         console.log(-1);
//         return -1;
//     }
//     if (!min) {
//         min = 0;
//     } 
//     if (!sec) {
//         sec = 0;
//     }
//     if (!Number.isInteger(hour) || !Number.isInteger(min) || !Number.isInteger(sec)){
//         console.log(-3);
//         return -3;
//     }
    
//     sec = sec + min*60 + hour*60*60;
//     return sec;
// }

// let fromSeconds = function (sec) {
//     let time;
//     if (sec < 0) {
//         console.log(-1);
//         return -1;
//     }
//     let hour = Math.floor(sec/3600);
//     sec = sec % 3600;
//     let min = Math.floor(sec/60);
//     sec = sec % 60;
//     if (hour < 10) {
//         hour = `0${hour}`
//     }
//     if (min < 10) {
//         min = `0${min}`
//     }
//     if (sec < 10) {
//         sec = `0${sec}`
//     }
//     time = `${hour}:${min}:${sec}`
//     return time;
// }

// let time = function(hour1, min1, sec1, hour2, min2, sec2) {
//     let secFirst, secSecond, secDiff, time;
//     secFirst = toSeconds(hour1, min1, sec1);
//     secSecond = toSeconds(hour2, min2, sec2);
//     secDiff = secSecond - secFirst;
//     time = fromSeconds(secDiff);
//     return time;
// }

// console.log(time(0,30,0,1,0,60));


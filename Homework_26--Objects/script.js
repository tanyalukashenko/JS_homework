// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
// и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней 
// скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// let car = {
// 	manufacturer: 'Tesla',
// 	model: 'Model S',
// 	year: '2020',
// 	averageSpeed:'80';
// }

// function showInfo(car) {
// 	for (key in car) {
// 		console.log(key + " - " + car[key]);
// 	}
// }

// showInfo(car);

// function calcTravelTime (dictance) {
// 	let time = 0;
// 	let extraHour = 0;
// 	let totalTime = 0;

// 	time = dictance / car.averageSpeed;
// 	extraHour = Math.floor(time / 4);
//  return time + extraHour;
// }

// console.log(calcTravelTime(1000));




// 2. Создать объект user  со свойствами name, age, role. 
// Создать второй объект admin и унаследовать все свойства объекта user , кроме значения 
// свойства role. Также в объектах должны быть два метода, первый метод length() выводит 
// в консоль количество ключей в объекте, при вызове метода  user.length() должно отобразиться 
// количество ключей; второй метод checkPermission()  показывает alert с текстом 
// "Access granted"  если role === 'admin', и "Access denied" если role === 'user'.

// let user = {
// 	name: "Vasya",
// 	age: 20,
// 	role: "user",
// 	length: function() {
// 		alert(Object.keys(this).length);
// 	},
// 	checkPermission: function() {
// 		if (this.role === "admin") {
// 			alert("Access granted");
// 		} else if (this.role === "user") {
// 			alert("Access denied");
// 		}
// 	}
// }

// let admin = {};

// Object.assign(admin, user);

// admin.role = "";

// console.log(user);
// console.log(admin);
// user.length();
// admin.length();
// user.checkPermission();



// 3. Создать функцию createUser() которая создает объект со значениями name, age, height, weight. 
// Для свойств age, height, weight должен быть тип number, иначе вывести alert, что неверный тип и 
// объект не должен создаться. Если в функцию не переданы аргументы, вывести аргументы по умолчанию. 
// Функция должна вызываться так createUser('John', 39, 178, 67)

// function isNumber(variable) {
//     return !isNaN(variable) && typeof(variable) == "number";
// }

// function createUser(name, age, height, weight) {
//     if (isNumber(age) && isNumber(height) && isNumber(weight)) {
//         return {
//             name: name,
//             age: age,
//             height: height,
//             weight: weight,
//         };

//     } else return alert("Неверный тип данных");

// }

// console.log(createUser('John', 39, 178, 12));



// 4. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы 
// с этим объектом: 
// Функция вывода времени на экран;
// Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая.
// Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», 
// а не «20:30:75».

// let time = {
// 	hours: 20,
// 	minutes: 30,
// 	seconds: 45,
// }

// function showTime() {
// 	return alert(time.hours + " : " + time.minutes + " : " + time.seconds);
// }

// function changeTimeBySeconds (seconds) {
// 	let result = time.seconds + seconds;
// 	if (result < 60) {
// 		time.seconds = result;
// 	} else if (result >= 60) {
// 		time.seconds = result % 60;
// 		result -= time.seconds;
// 		let min = result / 60;
// 		changeTimeByMinutes(min);
// 	}

// }

// function changeTimeByMinutes (minutes) {
// 	let result = time.minutes + minutes;
// 	if (result < 60) {
// 		time.minutes = result;
// 	} else if (result >= 60) {
// 		time.minutes = result % 60;
// 		result -= time.minutes;
// 		let hour = result / 60;
// 		changeTimeByHours(hour);
// 	}
// }

// function changeTimeByHours (hours) {
// 	let result = time.hours + hours;
// }

// showTime();
// changeTimeBySeconds(30);
// showTime();
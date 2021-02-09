// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, 
// который содержит название продукта, необходимое количество и куплен или нет. 
// Написать несколько функций для работы с таким массивом.
// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, 
// а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим 
// в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

// let arr = [
//   { name: "Apple", count: 3, bought: true },
//   { name: "Orange", count: 5, bought: false },
//   { name: "Strawberry", count: 7, bought: true },
//   { name: "Potato", count: 9, bought: false },
//   { name: "Blackberry", count: 5, bought: true },
//   { name: "Coconut", count: 3, bought: false },
//   { name: "Muesli", count: 5, bought: true },
//   { name: "Milk", count: 2, bought: false }
// ];
// console.log(arr);
// let res = arr.slice();
// let compare = (a, b) => {
//   if (a.bought === false && b.bought === true) return -1;
//   if (a.bought === true && b.bought === false) return 1;
//   return 0;
// };

// console.log(res.sort(compare));

// let addPurchase = (name, count) => {
//   let b = {};
//   b.name = name;
//   b.count = count;
//   b.bought = false;
//   for (let i in res) {
//     let nname = res[i].name;
//     if (nname.toLowerCase() == name.toLowerCase()) {
//       res[i].count += count;
//       res[i].bought = false;
//       break;
//     } else if (nname.toLowerCase() != name.toLowerCase()) {
//       res.unshift(b);
//       break;
//     }
//   }
//   return res;
// };

// addPurchase("meat", 3);

// let buyIt = name => {
//   let b = {};
//   b.name = name;
//   b.count = 1;
//   b.bought = true;

//   for (let i in res) {
//     let nname = res[i].name;
//     if (nname.toLowerCase() == name.toLowerCase()) {
//       res[i].bought = true;
//       break;
//     } else if (nname.toLowerCase() != name.toLowerCase()) {
//       res.unshift(b);
//       break;
//     }
//   }
// };

// buyIt("Plates");
// res.sort(compare);


// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия 
// товара, количества и цены за единицу товара. Написать следующие функции:
// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.
// let check = [
//     {name: "lemon", amount: 2, price: 25},
//     {name: "salad", amount: 1, price: 47},
//     {name: "cheese", amount: 1, price: 100},
//     {name: "tomatoes", amount: 5, price: 14},
//     {name: "mussels", amount: 20, price: 12},
//     {name: "wine", amount: 1, price: 200}, 
// ];

// //     Распечатка чека на экран;
// function showCheck() {
//     for (let product of check) {
//         let cost = product.amount * product.price;
//         console.log(`${product.name}: ${cost} грн`);
//     }
// };

// //     Подсчет общей суммы покупки;
// function findTotal() {
//     let total = 0;
//     for (let product of check) {
//         let cost = product.amount * product.price;
//         total +=cost;
//     };

//     console.log(`Total: ${total} грн`);
//     return total;
// };

// //     Получение самой дорогой покупки в чеке;
// function findTheMostExpensive() {
//     check.sort((a, b) => (a.amount * a.price) < (b.amount * b.price) ? 1 : -1);
//     console.log(`Самая дорогая покупка: ${check[0].name} - ${check[0].amount * check[0].price} грн`)
// }

// //     Подсчет средней стоимости одного товара в чеке.
// function findAveragePrice() {
//     let total = findTotal();
//     let sumAmount = 0;
//     for (let product of check) {
//         sumAmount += product.amount;
//     };

//     console.log(`Средняя стоимость: ${(total/sumAmount).toFixed(2)} грн`);
// }

// showCheck();
// console.log("-----------");
// findTotal();
// findTheMostExpensive();
// findAveragePrice();

// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью 
// document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, 
// перечисленными в массиве.
// const arr = [
//   { name: "text-align", value: "center" },
//   { name: "text-transform", value: "capitalize" },
//   { name: "text-overflow", value: "ellipsis" },
//   { name: "font-size", value: "1em" },
//   { name: "color", value: "#555" },
//   { name: "letter-spacing", value: "2px" },
//   { name: "font-weight", value: "300" },
//   { name: "line-height", value: "1" },
//   { name: "font-style", value: "oblique" },
//   { name: "font-stretch", value: "extra-expanded" }
// ];

// const text = `Lorem ipsum dolor sit amet, 
// consectetur adipisicing elit. 
// Reprehenderit, rem sit eaque 
// temporibus sint explicabo. 
// Quod placeat quos inventore 
// quas magni architecto, 
// cupiditate assumenda enim, 
// eum exercitationem ex sunt iste?`;

// let styleText = (arr, text) => {
//   document.write('<p style = "');
//   for (let i in arr) {
//     document.write(arr[i].name + ":" + arr[i].value + ";");
//   }
//   document.write('">' + text + "</p>");
// };

// styleText(arr, text);

// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных 
// мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько 
// функций для работы с ним^

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).
// let auditoriums = [
//   {name: "Computer class 1", size: 15, faculty: "IT"},
//   {name: "Computer class 2", size: 19, faculty: "IT"},
//   {name: "Phys laboratory 1", size: 16, faculty: "Physics"},
//   {name: "Phys laboratory 2", size: 13, faculty: "Physics"},
//   {name: "English class", size: 12, faculty: "Foreign Languages"},
//   {name: "Deutsch class", size: 18, faculty: "Foreign Languages"},
// ];

// let group = {
//   number: 481,
//   person: 20,
//   faculty: "IT",
// };

// function showAuditoriums(arr) {
//   for (i = 0; i < arr.length; i++)
//     console.log(
//       `Аudience: ${arr[i].name}, faculty: ${arr[i].faculty}, Audience size: ${arr[i].size} seats`
//     );
// }
// // showAuditoriums(auditoriums);

// function showAuditoriumsForFaculty(arr, item) {
//   let res = arr.filter((x) => x.faculty === item);
//   for (i = 0; i < res.length; i++) {
//     console.log("Audience for your faculty: " + res[i].name);
//   }
// }
// // showAuditoriumsForFaculty(auditoriums, "Physics");

// function showAuditoriumsForGroup(arr, group) {
//   let res = arr.filter(
//     (x) => x.faculty === group.faculty && x.size >= group.person
//   );
//   for (i = 0; i < res.length; i++) {
//     console.log("Audience for your group: " + res[i].name);
//   }
// }
// showAuditoriumsForGroup(auditoriums, group);

// function showAuditoriumsBySize(arr) {
//   arr.sort(function compareNumbers(a, b) {
//     return a.size - b.size;
//   });
//   console.log(arr);
// }
// // showAuditoriumsBySize(auditoriums);

// function showAuditoriumsByABC(arr) {
//   arr.sort((prev, next) => {
//     if (prev.name < next.name) return -1;
//     if (prev.name < next.name) return 1;
//   });
//   console.log(arr);
// }
// // showAuditoriumsByABC(auditoriums);
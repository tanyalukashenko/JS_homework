// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.

// class Circle {
//   constructor(r) {
//     this.r = r;
//   }
//   get radius() {
//     return this.r;
//   }
//   set radius(r) {
//     this.r = r;
//   }
//   get diametr() {
//     return this.r * 2;
//   }
//   area() {
//     return Math.PI * this.r * this.r;
//   }
//   circumference() {
//     return Math.PI * this.diametr;
//   }
// }

// let circle = new Circle(15);
// console.log(circle.radius);
// console.log("Diametr is " + circle.diametr);
// console.log("Area is " + circle.area().toFixed(1));
// console.log("Circumference is " + circle.circumference().toFixed(1));

//  Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
// Продемонстрировать работу написанных методов.

// class Marker {
//   constructor(color, percent) {
//     (this.color = color), (this.percent = percent);
//   }
// }

// class MarkerWithPercentInk extends Marker {
//   constructor(color, percent) {
//     super(color, percent);
//   }
//   print(text) {
//     let textLength = this.percent / 0.5;
//     let textColor = text.substring(0, textLength);
//     let arr = textColor.split("");
//     let countSpaces = 1;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] == " ") {
//         countSpaces += 1;
//       }
//     }
//     textLength += countSpaces;
//     textColor = text.substring(0, textLength);

//     return document.write(`<p style = color:${this.color}>${textColor}</p>`);
//   }
// }

// let marker = new MarkerWithPercentInk("red", 7);
// marker.print(
//   "Success."
// );

// Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

// class Employee {
//     constructor (name, surname, age, position, salary) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.position = position;
//         this.salary = salary;
//     }
// }

// class EmpTable {
//     constructor (list) {
//         this.list = list;
//     }
//     getHTML() {
//         let table = document.createElement('table');
//         console.log(table);
        
//         for (let i = 0; i < this.list.length; i++) {
//             let tr = document.createElement('tr');


//             for (let j = 0; j < Object.keys(this.list[i]).length; j++) {
//                 let td = document.createElement("td");
//                 let key = Object.keys(this.list[i])[j];
//                 td.innerText = this.list[i][key];
//                 tr.appendChild(td);
//               }
//             table.appendChild(tr);
//         }
//         document.body.appendChild(table);
//     }
// }

// let employees = [
//     john = new Employee('John', 'Snow', 32, 'manager', 5000),
//     dey = new Employee('Deyneris', 'Targarien', 30, 'top-manager', 10000),
//     bran = new Employee('Bran', 'Blackwater', 45, 'security', 15000),
//     sercei = new Employee('Sercei', 'Lannister', 40, 'top-manager', 10000),
//     rob = new Employee('Rob', 'Stark', 18, 'manager', 5000),
//     varis = new Employee('Varis', 'Varis', 50, 'manager', 5000),
//     grey = new Employee('Grey', 'Worm', 25, 'cleener', 1000),
// ];

// let tbl = new EmpTable(employees);
// tbl.getHTML();
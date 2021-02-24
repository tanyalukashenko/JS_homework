// 1. Создать HTML-страницу для отображения/редактирования текста. 
// При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, 
// вместо div появляется textarea с тем же текстом, который теперь можно редактировать. 
// При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте 
// выключить поведение по умолчанию для этих сочетаний клавиш.

// const div = document.createElement('div');
// const p = document.createElement('p');
// const textarea = document.createElement('textarea');
// const text = 'Hello world';
// p.innerText = text;
// div.appendChild(p);
// document.body.appendChild(div);
// const switcher = 'div';

// document.body.addEventListener('keydown', (e) => {
//     if (e.ctrlKey && e.code == 'KeyE' && switcher == 'div') {
//         e.preventDefault();
//         toTextarea();
//     }
//     if (e.ctrlKey && e.code == 'Equal' && switcher == 'textarea') {
//         e.preventDefault();
//         toDiv();
//     }
// });

// function toTextarea () {
//     textarea.innerText = p.innerText;
//     div.replaceChild(textarea, p);
//     switcher = 'textarea';
// }

// function toDiv () {
//     p.innerText = textarea.value;
//     div.replaceChild(p, textarea);
//     switcher = 'div';
// }


// Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать
// данные по этой колонке. Учтите, что числовые значения должны сортироваться как числа, а не как строки.
// table.onclick = function(e) {
//     const th = e.target;
//     if (e.target.tagName != 'TH') return;

//     sortTable(th.cellIndex, th.dataset.type);
// };

// function sortTable(column, type) {
//     const tbody = table.querySelector('tbody');
//     const rowsArray = Array.from(tbody.rows);
//     const compare;

//     // console.log(tbody);
//     // console.log(tbody.rows);
//     // console.log(rowsArray);

//     switch (type) {
//       case 'number':
//         compare = function(row1, row2) {
//           return row1.cells[column].innerHTML - row2.cells[column].innerHTML;
//         };
//         break;
//       case 'string':
//         compare = function(row1, row2) {
//           return row1.cells[column].innerHTML > row2.cells[column].innerHTML ? 1 : -1;
//         };
//         break;
//     }

//     rowsArray.sort(compare);
//     tbody.append(...rowsArray);
// }

// Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, 
// если зажать мышку в правом нижнем углу и тянуть ее дальше.

const resDiv = document.getElementById("content__textarea");
const resizer = document.querySelector("div.content__textarea--resizer");

const initResize = (e) => {
  e.preventDefault;
  window.addEventListener("mousemove", startResize);
  window.addEventListener("mouseup", stopResize);
};

const startResize = (e) => {
  resDiv.style.width = e.clientX - resDiv.offsetLeft + "px";
};
const stopResize = (e) => {
  window.removeEventListener("mousemove", startResize);
  window.removeEventListener("mouseup", stopResize);
};

resizer.addEventListener("mousedown", initResize);
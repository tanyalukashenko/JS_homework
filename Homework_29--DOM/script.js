// 1. Создать страницу, которая выводит нумерованный список песен:

// const playList = [
//     {
//      author: "LED ZEPPELIN",
//      song:"STAIRWAY TO HEAVEN"
    
//     },
//     {
//      author: "QUEEN",
//      song:"BOHEMIAN RHAPSODY"
//     },
//     {
//      author: "LYNYRD SKYNYRD",
//      song:"FREE BIRD"
//     },
//     {
//      author: "DEEP PURPLE",
//      song:"SMOKE ON THE WATER"
//     },
//     {
//      author: "JIMI HENDRIX",
//      song:"ALL ALONG THE WATCHTOWER"
//     },
//     {
//      author: "AC/DC",
//      song:"BACK IN BLACK"
//     },
//     {
//      author: "QUEEN",
//      song:"WE WILL ROCK YOU"
//     },
//     {
//      author: "METALLICA",
//      song:"ENTER SANDMAN"
//     }
// ];

// const ol = document.createElement('ol');
// console.log(ol);

// for (let i = 0; i < playList.length; i++) {
//     let li = document.createElement('li');
//     let html = `Author: ${playList[i].author} <br> Song: ${playList[i].song}`;
//     li.innerHTML = html;
//     ol.appendChild(li);
// }

// document.body.appendChild(ol);

// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. 
// На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. 
// При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

// const button = document.createElement('button');
// const hiddenButton = document.createElement('button');
// const hiddenDiv = document.createElement('div');
// const p = document.createElement('p');
// const open = 'Open';
// const close = 'Close';
// const text = "Click to close";


// hiddenButton.setAttribute('style', 'position:absolute; top:50%; left:50%;');
// p.setAttribute('style', 'width:80%; padding-top:20vh; margin:0 auto; color: white; font-size:30px; text-align:center');
// button.innerText = open;
// hiddenButton.innerText = close;
// p.innerText = text;

// button.onclick = function() {
//    document.body.appendChild(hiddenDiv);
//    hiddenDiv.appendChild(hiddenButton);
//    hiddenDiv.appendChild(p);
//    hiddenDiv.setAttribute('style', 'position:absolute; top:0; left:0; right:0; bottom:0; background-color:grey;');
// };

// hiddenButton.onclick = function() {
//     hiddenDiv.setAttribute('style', 'display:none;');
// }

// document.body.appendChild(button);

// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
// document.body.setAttribute('style', 'background-color:black;');
// const ul = document.createElement('ul');
// const liRed = document.createElement('li');
// const liYellow = document.createElement('li');
// const liGreen = document.createElement('li');
// const button = document.createElement('button');
// const text = 'Click!';

// ul.setAttribute('style', 'width:10vw; margin:0 auto;');
// liRed.setAttribute('style', 'margin-top:1vw; width:10vw; height:10vw; border-radius: 100%; background-color:red;');
// liYellow.setAttribute('style', 'margin-top:1vw; width:10vw; height:10vw; border-radius: 100%; background-color:white;');
// liGreen.setAttribute('style', 'margin-top:1vw; width:10vw; height:10vw; border-radius: 100%; background-color:white;');
// button.setAttribute('style', 'position:absolute; bottom:0; left:49%; width:100px; height:50px;');
// button.innerText = text;


// document.body.appendChild(ul);
// ul.appendChild(liRed);
// ul.appendChild(liYellow);
// ul.appendChild(liGreen);
// document.body.appendChild(button);

// let counter = 0;
// button.onclick = function() {
//     counter++;
//     counter = counter % 4;
//     if (counter === 0) {
//         liRed.setAttribute('style', 'margin-top:1vw; width:10vw; height:10vw; border-radius: 100%; background-color:red;');
//         liYellow.setAttribute('style', 'margin-top:1vw; width:10vw; height:10vw; border-radius: 100%; background-color:white;');
//         liGreen.setAttribute('style', 'margin-top:1vw; width:10vw; height:10vw; border-radius: 100%; background-color:white;');
//     } else if (counter === 1 || counter === 3) {
//         liRed.setAttribute('style', 'margin-top:1vw; width:10vw; height:10vw; border-radius: 100%; background-color:white;');
//         liYellow.setAttribute('style', 'margin-top:1vw; width:10vw; height:10vw; border-radius: 100%; background-color:yellow;');
//         liGreen.setAttribute('style', 'margin-top:1vw; width:10vw; height:10vw; border-radius: 100%; background-color:white;');
//     } else {
//         liRed.setAttribute('style', 'margin-top:1vw; width:10vw; height:10vw; border-radius: 100%; background-color:white;');
//         liYellow.setAttribute('style', 'margin-top:1vw; width:10vw; height:10vw; border-radius: 100%; background-color:white;');
//         liGreen.setAttribute('style', 'margin-top:1vw; width:10vw; height:10vw; border-radius: 100%; background-color:green;');
//     }    
// }
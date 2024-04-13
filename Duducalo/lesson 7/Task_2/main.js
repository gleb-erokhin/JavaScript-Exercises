// Реализуйте в документе (в body) следующую структуру HTML-элементов с помощью встроенных функция создания элементов в Javascript:

/*
<h1>Что я узнал в видео</h1>
<ul>
  <li>1) Как создавать HTML-элементы</li>
  <li>2) Узнал, как добавлять текст и HTML-код в элемент</li>
  <li>3) Как добавлять и удалять классы</li>
  <li>4) Узнал, как вложить один элемент в другой</li>
  <li>5) Узнал, что такое событие и обработчик события</li>
  <li>6) Как назначить обработчик события</li>
</ul>
*/
let counter = 0;

let title = document.createElement('h1');
title.textContent = "Что я узнал в видео"

let uList = document.createElement('ul');

counter++
let listItem = document.createElement('li');
listItem.textContent = `${counter})  Как создавать HTML-элементы`
counter++
let listItem1 = document.createElement('li');
listItem1.textContent = `${counter})  Узнал, как добавлять текст и HTML-код в элемент`
counter++
let listItem2 = document.createElement('li');
listItem2.textContent = `${counter})  Как добавлять и удалять классы`
counter++
let listItem3 = document.createElement('li');
listItem3.textContent = `${counter})  Узнал, как вложить один элемент в другой`
counter++
let listItem4 = document.createElement('li');
listItem4.textContent = `${counter})  Узнал, что такое событие и обработчик события`
counter++
let listItem5 = document.createElement('li');
listItem5.textContent = `${counter})  Как назначить обработчик события`

document.body.append(title)
document.body.append(uList)
uList.append(listItem)
uList.append(listItem1)
uList.append(listItem2)
uList.append(listItem3)
uList.append(listItem4)
uList.append(listItem5)

// Для создания элементов необходимо использовать:
// document.createElement()
// textContent
// append()

// document.write() мы уже не используем

// 2 вариант задачи

// используем функцкию для создания Li
// function createLi(index, text) {
//   let item = document.createElement('li');
//   item.textContent = `${index} ${text}`
//   return item;
// }

// // создание списка
// let lists = document.createElement('ul');

// // добавление данных
// counter++
// let item1 = createLi(counter, 'Как создавать HTML-элементы')

// lists.append(item1)
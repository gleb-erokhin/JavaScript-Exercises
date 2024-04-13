// Эта программа выводит в документ список достижений в Javascript. Ваша задача изменить способ вывода, используя встроенные функции создания, стилизации и настройки HTML-элементов. 
// document.write() в итоговой реализации быть не должно.

// Напомню, что функции - удобный инструмент сокращения кода. Используйте функции, аргументы функций и return для оптимизации кода. Найдите повторяющиеся фрагменты кода в программе и используйте функции для сокращения кода.

document.write('<div class="container">')

document.write('<h1 class="main-title">Достижения в изучении Javascript</h1>')

document.write('<ul class="list">')

let i = 0 // Счетчик

// Карточка 1
i++
document.write(`<li class="list__item">
                  <span class="list__index">${i}</span>
                  <p class="list__desc">
                    Знаю, что такое вывод и ввод информации
                  </p>
                </li>`)

// Карточка 2
i++
document.write(`<li class="list__item">
                  <span class="list__index">${i}</span>
                  <p class="list__desc">
                    Знаю о способах вывода информации
                  </p>
                </li>`)

// Карточка 3
i++
document.write(`<li class="list__item">
                  <span class="list__index">${i}</span>
                  <p class="list__desc">
                    Знаю, что такое числа, строки, и переменные
                  </p>
                </li>`)

// Карточка 4
i++
document.write(`<li class="list__item">
                  <span class="list__index">${i}</span>
                  <p class="list__desc">
                    Умею создавать функции и пользоваться ими
                  </p>
                </li>`)

// Карточка 5
i++
document.write(`<li class="list__item">
                  <span class="list__index">${i}</span>
                  <p class="list__desc">
                    Учусь создавать HTML - элементы с помощью встроенных функций
                  </p>
                </li>`)
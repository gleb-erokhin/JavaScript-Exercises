// Данная программа выводит список учеников в документ. Добавьте в вывод списка нумерацию каждого студента, используя переменную index и инкремент. 
let index = 0;
// Функция, возвращающая возраст по дате рождения
function getAge(year) {
  return 2023 - year
}

// Функция, возвращающая HTML элемент li с данными студента. В функцию передается два параметра: имя студента и год рождения
function getUserLi(index, name, year) {
  return `<li>
            ${index}),
            ${name}, 
            год рождения: ${year},
            возраст: ${getAge(year)}
          </li>`
}

// Функция выводит текст и HTML-элементы на экран. Удобно использовать для сокращения команды document.write()
function dw(text) {
  document.write(text)
}

// Вариант 1 (самый простой)
// dw("<h1>Список студентов</h1>")

// dw("<ul>")
// index++
// dw(getUserLi(index, "Наташа", 2011))
// index++
// dw(getUserLi(index, "Петр", 2015))
// index++
// dw(getUserLi(index, "Миша", 2014))
// index++
// dw(getUserLi(index, "Рита", 2010))
// index++
// dw(getUserLi(index, "Елена", 2015))

// dw("</ul>")

// Вариант 2 (созданием дополнительной функции для учета)
function getIndex() {
  index++;
  return index;
}

dw("<h1>Список студентов</h1>")

dw("<ul>")

dw(getUserLi(getIndex(), "Наташа", 2011))
dw(getUserLi(getIndex(), "Петр", 2015))
dw(getUserLi(getIndex(), "Миша", 2014))
dw(getUserLi(getIndex(), "Рита", 2010))
dw(getUserLi(getIndex(), "Елена", 2015))

dw("</ul>")
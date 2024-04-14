/**
 * 
 * @param {string} tag какой тег хотим создать
 * @param {string} className какое имя класса назначить тегу хотим
 * @returns возвращаем созданный элемент
 */
function createEl(tag, className) {
    let item = document.createElement(tag);
    item.classList.add(className)
    return item
}

/**
 * 
 * @param {string} title название кнопки
 * @param {string} className класс для кнопки
 * @returns возвращает кнопку
 */
function getButton(title, className, classDefaultName="btn") {
    let btn = document.createElement('button');
    btn.classList.add(className)
    btn.classList.add(classDefaultName)
    btn.textContent = `${title}`
    return btn
}

// создаем основные блоки приложения
let main = createEl("div", "main")
let container = createEl("div", "container")
let blockInput = createEl("div", "input-block")
let taskList = createEl("ul", "input-list")

// создаем инпут для ввода задач
let input = document.createElement('input');
input.classList.add("input__item")
input.placeholder = "Enter the name";
input.type = "text";

// создать кнопку для добавления задач
let addtaskBtn = getButton("Add task", "add")

// добавление задачи
addtaskBtn.onclick = function () {
    let inputText = input.value
    let listItem = createEl("li", "input-list__items")
    listItem.textContent = `${inputText}`
    console.log(listItem);
    
    let doneBtn = getButton("Выполнено", "done")
    let changeBtn = getButton("изменить", "change")
    let removeBtn = getButton("Удалить", "remove")

    listItem.append(doneBtn, changeBtn, removeBtn)
    taskList.append(listItem)

    input.value = ""
}

document.body.append(main)
main.append(container)
container.append(blockInput, taskList)
blockInput.append(input, addtaskBtn)

// объявляем переменные счетчика, суммы калорий проукта, общей суммы калорий,
let index = 0;
let total = 0;
let totalSum = 0;

// функция запроса значений
function calory() {
  index++;
  product = prompt(`Enter the product ${index}`);
  callories = Number(prompt(`Enter callories of the product ${index}`));
  totalProduct = Number(prompt(`Enter total weight of the product ${index}`));
  // передаем данные в функцию построения строки
  createElement(index, product, callories, totalProduct);
}

// формирование строки с результатом
function createElement(
  index,
  product,
  callories,
  totalProduct
) {
  document.write(`<li class="list__item">
                    ${index}) 
                    ${product}, 
                    калорийность: ${callories} ккал,
                    вес: ${totalProduct} гр.,
                    всего: ${total = totalProduct * callories} ккал.
                  </li>`);
                  totalSum = totalSum + total;
}

// начало формирования структуры HTML
document.write(`<div class="container">`);
document.write(`<h1>Калькулятор калорийности блюда</h1>`);
document.write(`<ul class="list__items">`);

calory();
calory();
calory();

document.write(`<li class="list__item list__total">Каллорийность всего блюда: ${totalSum} ккал</li>`);
document.write(`</ul>`);
document.write(`</div>`);

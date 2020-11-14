// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoriesAmount = document.querySelectorAll("ul#categories > li.item")
  .length;
const firstMessage = `В списке ${categoriesAmount} категории.`;

console.log(firstMessage);

const lists = document.querySelectorAll(".item");

lists.forEach((list) => {
  console.log(`Категория: ${list.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${list.lastElementChild.children.length}`);
});

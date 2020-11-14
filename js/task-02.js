// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ul = document.getElementById("ingredients");

const makeIngredientsList = function (array) {
  array.forEach((arr) => {
    const li = document.createElement("li");
    li.textContent = arr;
    ul.appendChild(li);
    return ul;
  });
};

makeIngredientsList(ingredients);

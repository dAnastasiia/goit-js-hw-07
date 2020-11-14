// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

{
  /* <div id="counter">
    <button type="button" data-action="decrement">
    -1
    </button>
    <span id="value">0</span>
    <button type="button" data-action="increment">
    +1
    </button>
</div>; */
}

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const counter = document.getElementById("value");
let counterValue = 0;

const decrement = () => {
  counterValue = Number(counter.textContent) - 1;
  counter.textContent = counterValue;
};
const increment = () => {
  counterValue = Number(counter.textContent) + 1;
  counter.textContent = counterValue;
};

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);

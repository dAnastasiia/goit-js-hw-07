// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.getElementById("validation-input");

const check = () => {
  let inputSymbolAmount = input.value.length;
  let rightSymbolAmount = Number(input.dataset.length);
  input.classList.add("invalid");

  if (inputSymbolAmount === rightSymbolAmount) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
};

input.addEventListener("change", check);

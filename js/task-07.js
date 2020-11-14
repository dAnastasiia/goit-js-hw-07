// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.getElementById("font-size-control");
const message = document.getElementById("text");

const changeFontSize = () => {
  message.style.fontSize = `${input.value}px`;
};

input.addEventListener("input", changeFontSize);

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("change", () => (output.textContent = input.value));

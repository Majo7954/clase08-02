import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#operacion-form"); // Corregido el ID del formulario
const sumarRadio = document.querySelector("#sumar-radio");
const multiplicarRadio = document.querySelector("#multiplicar-radio");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  let resultado;
  if (sumarRadio.checked) {
    resultado = sumar(firstNumber, secondNumber);
  } else if (multiplicarRadio.checked) {
    resultado = multiplicar(firstNumber, secondNumber);
  }

  div.innerHTML = "<p>" + resultado + "</p>";
});


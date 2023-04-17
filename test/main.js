import { cars } from "../data/cars.js";

const carList = document.getElementById("car-list");

function renderCarList() {
  carList.innerHTML = "";

  cars.forEach((car) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${car.name}: ${car.topSpeed} mph`;
    carList.appendChild(listItem);
  });
}

renderCarList();

const form = document.getElementById("add-car-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name-input");
  const speedInput = document.getElementById("speed-input");

  const name = nameInput.value;
  const topSpeed = parseInt(speedInput.value);

  const newCar = { name, topSpeed };
  cars.push(newCar);

  renderCarList();

  nameInput.value = "";
  speedInput.value = "";
});
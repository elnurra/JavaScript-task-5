const inputName = document.querySelector("#product-name");
const resultInputName = document.querySelector(".product-name");
const aboutInput = {
  name: "",
  price: "",
  category: "",
  count: "",
};
let newaboutInput = aboutInput;
let conditionName = false;
inputName.addEventListener("keyup", () => {
  const strName = inputName.value[0];
  if (inputName.value.trim().length === 0) {
    resultInputName.innerHTML = "<i>Product name is required*</i>";
    conditionName = false;
  } else if (
    inputName.value.trim().length > 0 &&
    !Number(inputName.value.trim()) &&
    // inputName.value[0] === strName.toUpperCase() &&
    !Number(inputName.value[0])
  ) {
    resultInputName.innerHTML = "<p>Correct</p>";
    conditionName = true;
  } else {
    resultInputName.innerHTML = "<strong>Input true value</strong>";
    conditionName = false;
  }
});
inputName.addEventListener("change", (input) => {
  aboutInput.name = input.target.value;
});
// ----------------------------------------------------------------------------------
const inputPrice = document.querySelector("#product-price");
const resultInputPrice = document.querySelector(".product-price");

let conditionPrice = false;
inputPrice.addEventListener("keyup", () => {
  if (inputPrice.value.trim().length === 0) {
    resultInputPrice.innerHTML = "<i>Product price is required*</i>";
    conditionPrice = false;
  } else if (
    inputPrice.value.trim().length > 0 &&
    Number(inputPrice.value.trim())
  ) {
    resultInputPrice.innerHTML = "<p>Correct</p>";
    conditionPrice = true;
  } else {
    resultInputPrice.innerHTML = "<strong>Input true value</strong>";
    conditionPrice = false;
  }
});
inputPrice.addEventListener("change", (input) => {
  aboutInput.price = input.target.value;
});
// ----------------------------------------------------------------------------------
const inputCount = document.querySelector("#product-count");
const resultInputCount = document.querySelector(".product-count");

inputCount.addEventListener("keyup", () => {
  if (inputCount.value.trim().length === 0) {
    resultInputCount.innerHTML = "<i>Product count is required*</i>";
  } else if (
    inputCount.value.trim().length > 0 &&
    Number(inputCount.value.trim())
  ) {
    resultInputCount.innerHTML = "<p>Correct</p>";
  } else {
    resultInputCount.innerHTML = "<strong>Input true value</strong>";
  }
});
inputCount.addEventListener("change", (input) => {
  aboutInput.count = input.target.value;
});
// ----------------------------------------------------------------------------------
const inputCategory = document.querySelector("#product-category");
const resultInputCategory = document.querySelector(".product-category");

let conditionCategory = false;
inputCategory.addEventListener("keyup", () => {
  const strCategory = inputCategory.value[0];
  if (inputCategory.value.trim().length === 0) {
    resultInputCategory.innerHTML = "<i>Product count is not required</i>";
    conditionCategory = false;
  } else if (
    inputCategory.value.trim().length > 0 &&
    !Number(inputCategory.value.trim()) &&
    inputCategory.value[0] === strCategory &&
    !Number(inputCategory.value[0])
  ) {
    resultInputCategory.innerHTML = "<p>Correct</p>";
    conditionCategory = true;
  } else {
    resultInputCategory.innerHTML = "<strong>Input true value</strong>";
    conditionCategory = false;
  }
});
inputCategory.addEventListener("change", (input) => {
  aboutInput.category = input.target.value;
});
// ----------------------------------------------------------------------------------

const buttonApply = document.querySelector(".submit");
const result = document.querySelector(".result i");
const countTable = document.querySelector(".col-3-1-1");
const tableResult1 = document.querySelector(".col-3-1");
const tableResult2 = document.querySelector(".col-3-2");
const tableResult3 = document.querySelector(".col-3-3");
const tableResult4 = document.querySelector(".col-3-4");
const infoProduct = [];

let count = 0;
const form = document.querySelector(".test-form");
buttonApply.addEventListener("click", (element) => {
  if (conditionName && conditionPrice && conditionCategory) {
    infoProduct.push(aboutInput);
    result.innerHTML = "<i>Added*</i>";
    console.log(aboutInput);
    countTable.innerHTML += `${count} <br />`;
    tableResult1.innerHTML += `${aboutInput.name}<br />`;
    tableResult2.innerHTML += `${aboutInput.category}<br />`;
    tableResult3.innerHTML += `${aboutInput.price}<br />`;
    tableResult4.innerHTML += `${aboutInput.count}<br />`;
    count++;
  } else {
    result.innerHTML = "<span>Fill out the form correctly*</span>";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(infoProduct);
});
// ----------------------------------------------------------------------------------

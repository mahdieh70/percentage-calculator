"use strict";

const total = document.querySelector(".total");
const correctInput = document.querySelector(".correct");
const falseInput = document.querySelector(".false");
const formElem = document.querySelector("form");
const result = document.querySelector(".result");
const inputs = document.querySelectorAll("input");

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  let totalValue = total.value;
  let correctValue = correctInput.value;
  let falseValue = falseInput.value;
  if ((result.style.opacity = "0")) {
    result.style.opacity = "1";
    if (!totalValue || !correctValue || !falseValue) {
      result.textContent = "لطفا تمام موارد خواسته شده را پر کنید.";
    } else if (totalValue == 0 && correctValue == 0 && falseValue == 0) {
      result.textContent = "اعداد وارد شده صحیح نیست.";
    } else if (
      Number(correctValue) + Number(falseValue) > Number(totalValue) ||
      Number(correctValue) + Number(falseValue) < Number(totalValue)
    ) {
      result.textContent =
        "مجموع سوالات درست و غلط با تعداد کل سوالات برابر نیست.";
    } else {
      let percentage =
        ((Number(correctValue) * 3 - Number(falseValue)) /
          (Number(totalValue) * 3)) *
        100;
      let finalResult = percentage.toFixed(2);
      result.textContent = `${finalResult} %`;
    }
  }
});

inputs.forEach((item) => {
  item.addEventListener("keyup", (e) => {
    if (e.code == "Backspace") {
      result.style.opacity = 0;
    }
  });
});

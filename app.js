let value = 0;
let count = document.querySelector(".value");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");

decrease.addEventListener("click", function () {
  value--;

  count.innerHTML = value;
  if (value <= -1) {
    count.style.color = "red";
  }
  if (value === 0) {
    count.style.color = "black";
  }
});
reset.addEventListener("click", function () {
  value = 0;

  count.innerHTML = value;

  count.style.color = "black";
});
increase.addEventListener("click", function () {
  value++;

  count.innerHTML = value;
  if (value >= 1) {
    count.style.color = "green";
  }
  if (value === 0) {
    count.style.color = "black";
  }
});

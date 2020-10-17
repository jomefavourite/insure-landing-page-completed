let ham = document.querySelector(".ham");
let hamclose = document.querySelector(".close");
let nav = document.querySelector(".nav__list");
let body = document.querySelector("body");

console.log(body);

ham.addEventListener("click", () => {
  ham.style.display = "none";
  hamclose.style.display = "block";
  nav.classList.add("show");
  body.classList.add("overhide");
});

hamclose.addEventListener("click", () => {
  hamclose.style.display = "none";
  ham.style.display = "block";
  nav.classList.remove("show");
  body.classList.remove("overhide");
});

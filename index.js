//Navigation
const navigation = document.querySelectorAll("li");
const converters = [
  ["celsius", "farenheit", "kelvin"],
  ["cm", "in"],
  ["kg", "lbs"],
  ["km", "miles"],
  ["amperage", "tension", "resistance"],
];

let lastConverter;
let activeConverter;
let activeID;
let counter = 0;
let link;
let b;

navigation.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    if (document.querySelector(".active"))
      document.querySelector(".active").classList.remove("active");
    link = e.target.className;
    activeID = converters[link][0];
    activeConverter = document.getElementById(activeID);
    activeConverter.classList.toggle("active");
    lastConverter = activeConverter;
  });
});

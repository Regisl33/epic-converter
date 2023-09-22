//Navigation
const navigation = document.querySelectorAll("li");
const nexts = document.querySelectorAll(".nexts");
const converters = [
  ["celsius", "farenheit", "kelvin"],
  ["cm", "in"],
  ["kg", "lbs"],
  ["km", "miles"],
  ["amperage", "tension", "resistance"],
];

let activeConverter;
let activeID;
let counter = 0;
let link;

navigation.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    if (document.querySelector(".active"))
      document.querySelector(".active").classList.remove("active");
    link = e.target.className;
    activeID = converters[link][0];
    activeConverter = document.getElementById(activeID);
    activeConverter.classList.toggle("active");
    counter = 0;
  });
});
nexts.forEach((next) => {
  next.addEventListener("click", () => {
    counter++;
    if (counter === converters[link].length) counter = 0;
    document.querySelector(".active").classList.remove("active");
    activeID = converters[link][counter];
    activeConverter = document.getElementById(activeID);
    activeConverter.classList.toggle("active");
  });
});

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
//sidebar
const lines = document.querySelectorAll(".lines");
let sidebarStatus = true;

btnMenu.addEventListener("click", () => {
  lines.forEach((line) => {
    line.classList.toggle("activate");
  });
  if (sidebarStatus === true) {
    sidebar.style.left = "0";
    content.style.opacity = "0.45";
    sidebarStatus = false;
  } else {
    sidebar.style.left = "-320px";
    content.style.opacity = "1";
    sidebarStatus = true;
  }
});
//Conversion logic
const submit = document.querySelectorAll('button[type="submit"]');
let x;
let y;

submit.forEach((button) => {
  button.addEventListener("click", () => {
    switch (activeID) {
      case "celsius":
        break;
      case "farenheit":
        break;
      case "kelvin":
        break;
      case "cm":
        if (cmInput.value == 0) {
          alert("You must enter a value!");
        } else if (cmInput.value.match(/^[0-9]*\.?[0-9]{0,2}$/)) {
          x = cmInput.value;
          y = Math.round((x / 0.393701) * 100) / 100;
          cmResult.textContent = `${cmInput.value} inches is equal to ${y} cm`;
        } else {
          alert("You must only enter digits with a maximum of 2 décimals");
        }
        break;
      case "in":
        break;
      case "kg":
        break;
      case "lbs":
        break;
      case "km":
        break;
      case "miles":
        break;
      case "amperage":
        break;
      case "tension":
        break;
      case "resistance":
        break;

      default:
        null;
    }
  });
});

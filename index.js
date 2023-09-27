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
let x, y, z, valid;

const singleInput = (inputId) => {
  if (inputId.value == 0) {
    valid = false;
    alert("You must enter a value!");
  } else if (!inputId.value.match(/^[0-9]*\.?[0-9]{0,2}$/)) {
    valid = false;
    alert("You must only enter digits with a maximum of 2 décimals");
  } else {
    x = inputId.value;
    valid = true;
  }
};

const temperature = (input1, input2) => {
  if (input1.value == 0 && input2.value == 0) {
    valid = false;
    alert("You must enter a value!");
  } else if (
    !input1.value.match(/^[0-9]*\.?[0-9]{0,2}$/) ||
    !input2.value.match(/^[0-9]*\.?[0-9]{0,2}$/)
  ) {
    valid = false;
    alert("You must only enter digits with a maximum of 2 décimals");
  } else {
    x = input1.value;
    y = input2.value;
    valid = true;
  }
};

const electric = (input1, input2) => {
  if (input1.value == 0 || input2.value == 0) {
    valid = false;
    alert("You must enter a value!");
  } else if (
    !input1.value.match(/^[0-9]*\.?[0-9]{0,2}$/) ||
    !input2.value.match(/^[0-9]*\.?[0-9]{0,2}$/)
  ) {
    valid = false;
    alert("You must only enter digits with a maximum of 2 décimals");
  } else {
    x = input1.value;
    y = input2.value;
    valid = true;
  }
};

submit.forEach((button) => {
  button.addEventListener("click", () => {
    switch (activeID) {
      case "celsius":
        temperature(celsiusInput1, celsiusInput2);
        if (x == 0 && valid) {
          z = Math.round(y - 273.15);
          celsiusResult.textContent = `${celsiusInput2.value} Kelvin is equal to ${z} Celsius`;
        } else if (y == 0 && valid) {
          z = Math.round(((x - 32) * 5) / 9);
          celsiusResult.textContent = `${celsiusInput1.value} farenheit is equal to ${z} Celsius`;
        } else if (valid) {
          z = Math.round(((x - 32) * 5) / 9);
          x = Math.round(y - 273.15);
          celsiusResult.textContent = `${celsiusInput1.value} farenheit is equal to ${z} Celsius and ${celsiusInput2.value} kelvin is equal to ${x} Celsius`;
        }
        break;
      case "farenheit":
        temperature(farenheitInput1, farenheitInput2);
        if (x == 0 && valid) {
          z = Math.round(((y - 273.15) * 9) / 5 + 32);
          farenheitResult.textContent = `${farenheitInput2.value} Kelvin is equal to ${z} farenheit`;
        } else if (y == 0 && valid) {
          z = Math.round((x * 9) / 5 + 32);
          farenheitResult.textContent = `${farenheitInput1.value} Celsius is equal to ${z} farenheit`;
        } else if (valid) {
          z = Math.round((x * 9) / 5 + 32);
          x = Math.round(((y - 273.15) * 9) / 5 + 32);
          farenheitResult.textContent = `${farenheitInput1.value} Celsius is equal to ${z} farenheit and ${farenheitInput2.value} kelvin is equal to ${x} farenheit`;
        }
        break;
      case "kelvin":
        temperature(kelvinInput1, kelvinInput2);
        if (x == 0 && valid) {
          z = Math.round(((y - 32) * 5) / 9 + 273.15);
          kelvinResult.textContent = `${kelvinInput2.value} farenheit is equal to ${z} kelvin`;
        } else if (y == 0 && valid) {
          z = Math.round(x * 1 + 273.15);
          kelvinResult.textContent = `${kelvinInput1.value} Celsius is equal to ${z} kelvin`;
        } else if (valid) {
          z = Math.round(x * 1 + 273.15);
          x = Math.round(((y - 32) * 5) / 9 + 273.15);
          kelvinResult.textContent = `${kelvinInput1.value} Celsius is equal to ${z} kelvin and ${kelvinInput2.value} farenheit is equal to ${x} kelvin`;
        }
        break;
      case "cm":
        singleInput(cmInput);
        if (valid) {
          y = Math.round((x / 0.393701) * 100) / 100;
          cmResult.textContent = `${cmInput.value} inches is equal to ${y} cm`;
        }
        break;
      case "in":
        singleInput(inInput);
        if (valid) {
          y = Math.round(x * 0.393701 * 100) / 100;
          inResult.textContent = `${inInput.value} CM is equal to ${y} Inches`;
        }
        break;
      case "kg":
        singleInput(kgInput);
        if (valid) {
          y = Math.round(x * 0.453592 * 100) / 100;
          kgResult.textContent = `${kgInput.value} Lbs is equal to ${y} Kg`;
        }
        break;
      case "lbs":
        singleInput(lbsInput);
        if (valid) {
          y = Math.round((x / 0.453592) * 100) / 100;
          lbsResult.textContent = `${lbsInput.value} Kg is equal to ${y} Lbs`;
        }
        break;
      case "km":
        singleInput(kmInput);
        if (valid) {
          y = Math.round((x / 0.621371) * 100) / 100;
          kmResult.textContent = `${kmInput.value} Miles is equal to ${y} Km`;
        }
        break;
      case "miles":
        singleInput(milesInput);
        if (valid) {
          y = Math.round(x * 0.621371 * 100) / 100;
          milesResult.textContent = `${milesInput.value} Km is equal to ${y} Miles`;
        }
        break;
      case "amperage":
        electric(amperageInput1, amperageInput2);
        break;
      case "tension":
        electric(tensionInput1, tensionInput2);
        break;
      case "resistance":
        electric(resistanceInput1, resistanceInput2);
        break;

      default:
        null;
    }
  });
});

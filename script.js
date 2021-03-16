"use strict";

const destinationOptions = [
  "Hoth",
  "Tatooine",
  "Coruscant",
  "Naboo",
  "Kashyyyk",
  "Dagobah",
];
const restaurantOptions = [
  "Docking Bay 7 Food and Cargo (quick service dining)",
  "Oga’s Cantina (bar/lounge)",
  "Milk Stand (snack stand)",
  "Ronto Roasters (quick service)",
  "Kat Sakas Kettle (snack stand)",
];

const transportationOptions = [
  "All Terrain Armored Transport (AT-AT)",
  "All Terrain Scout Transport (AT-ST)",
  "Snowspeeder (T-47 Airspeeder)",
  "ETA-2 Jedi Starfighter",
  "Y-Wing Fighter",
  "X-Wing Fighter",
  "TIE Interceptor",
  "Slave I",
  "Millennium Falcon",
];

const entertainmentOptions = [
  "Podracing",
  "Droid Boxing",
  "Jedi Temple Experience",
  "Nightclub Dancing",
  "Live Music",
];

// RNG selector of items in arrays
const getRandomFrom = function (arr) {
  return arr[Math.trunc(Math.random() * arr.length)];
};

// Event listener for confirm button
document.querySelector(".confirm").addEventListener("click", function () {
  const finalTrip = document.querySelector(".summary").Value;
  console.log(finalTrip);
});

// Initial values set
let dayTrip = {
  destination: getRandomFrom(destinationOptions),
  restaurants: getRandomFrom(restaurantOptions),
  transportation: getRandomFrom(transportationOptions),
  entertainment: getRandomFrom(entertainmentOptions),
};

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

// Initial values set
let dayTrip = {
  destination: getRandomFrom(destinationOptions),
  restaurant: getRandomFrom(restaurantOptions),
  transportation: getRandomFrom(transportationOptions),
  entertainment: getRandomFrom(entertainmentOptions),
};

// Build initial form
document.querySelector(".destinations").textContent = [...destinationOptions];
document.querySelector(".restaurants").textContent = [...restaurantOptions];
document.querySelector(".transports").textContent = [...transportationOptions];
document.querySelector(".entertainments").textContent = [
  ...entertainmentOptions,
];
const displayTrip = function () {
  document.querySelector(
    ".trip"
  ).textContent = `You are going to ${dayTrip.destination}.\n Dining will be at ${dayTrip.restaurant}.\n You will travel using the ${dayTrip.transportation}.\n The entertainment will be ${dayTrip.entertainment}.`;
};
// Event listener for start button
document.querySelector(".start").addEventListener("click", function () {
  displayTrip();
});

function changeDayTripOption(opt) {
  let newOption;
  switch (opt) {
    case "destination":
      newOption = getRandomFrom(destinationOptions);
      while (newOption === dayTrip.destination) {
        newOption = getRandomFrom(destinationOptions);
      }
      break;
    case "restaurant":
      newOption = getRandomFrom(restaurantOptions);
      while (newOption === dayTrip.restaurant) {
        newOption = getRandomFrom(restaurantOptions);
      }
      break;
    case "transportation":
      newOption = getRandomFrom(transportationOptions);
      while (newOption === dayTrip.transportation) {
        newOption = getRandomFrom(transportationOptions);
      }
      break;
    case "entertainment":
      newOption = getRandomFrom(entertainmentOptions);
      while (newOption === dayTrip.entertainment) {
        newOption = getRandomFrom(entertainmentOptions);
      }
      break;
  }
  return newOption;
}

document.querySelector(".change-dest").addEventListener("click", function () {
  dayTrip.destination = changeDayTripOption("destination");
  displayTrip();
});
document.querySelector(".change-din").addEventListener("click", function () {
  dayTrip.restaurant = changeDayTripOption("restaurant");
  displayTrip();
});
document.querySelector(".change-tran").addEventListener("click", function () {
  dayTrip.transportation = changeDayTripOption("transportation");
  displayTrip();
});
document.querySelector(".change-ent").addEventListener("click", function () {
  dayTrip.entertainment = changeDayTripOption("entertainment");
  displayTrip();
});
// Event listener for confirm button
document.querySelector(".confirm").addEventListener("click", function () {
  console.log(dayTrip);
});

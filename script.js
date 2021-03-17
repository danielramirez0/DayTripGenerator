"use strict";

const destinationOptions = ["Hoth", "Tatooine", "Coruscant", "Naboo", "Kashyyyk", "Dagobah"];
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

const entertainmentOptions = ["Podracing", "Droid Boxing", "Jedi Temple Experience", "Nightclub Dancing", "Live Music"];

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
document.querySelector(".entertainments").textContent = [...entertainmentOptions];

const displayTrip = function (identifier, objProperty) {
  document.querySelector(`.${identifier}`).textContent = `${identifier[0].toUpperCase() + identifier.slice(1)}: ${objProperty}`;
};

// Event listener for start button
document.querySelector(".start").addEventListener("click", function () {
  displayTrip("destination", dayTrip.destination);
  displayTrip("restaurant", dayTrip.restaurant);
  displayTrip("transportation", dayTrip.transportation);
  displayTrip("entertainment", dayTrip.entertainment);
});

function verifyDifferentOption(optArr, currentOpt) {
  let result = getRandomFrom(optArr);
  while (result === currentOpt) {
    result = getRandomFrom(optArr);
  }
  return result;
}

function changeDayTripOption(opt) {
  let newOption;
  switch (opt) {
    case "destination":
      newOption = verifyDifferentOption(destinationOptions, dayTrip.destination);
      break;
    case "restaurant":
      newOption = verifyDifferentOption(restaurantOptions, dayTrip.restaurant);
      break;
    case "transportation":
      newOption = verifyDifferentOption(transportationOptions, dayTrip.transportation);
      break;
    case "entertainment":
      newOption = verifyDifferentOption(entertainmentOptions, dayTrip.entertainment);
      break;
  }
  return newOption;
}

document.querySelector(".change-dest").addEventListener("click", function () {
  dayTrip.destination = changeDayTripOption("destination");
  displayTrip("destination", dayTrip.destination);
});
document.querySelector(".change-din").addEventListener("click", function () {
  dayTrip.restaurant = changeDayTripOption("restaurant");
  displayTrip("restaurant", dayTrip.restaurant);
});
document.querySelector(".change-tran").addEventListener("click", function () {
  dayTrip.transportation = changeDayTripOption("transportation");
  displayTrip("transportation", dayTrip.transportation);
});
document.querySelector(".change-ent").addEventListener("click", function () {
  dayTrip.entertainment = changeDayTripOption("entertainment");
  displayTrip("entertainment", dayTrip.entertainment);
});
// Event listener for confirm button
document.querySelector(".confirm").addEventListener("click", function () {
  console.log(dayTrip);
  alert(`Congrats! You will go to ${dayTrip.destination}, eat at ${dayTrip.restaurant}, ride in the ${dayTrip.transportation}, and enjoy ${dayTrip.entertainment}`);
});

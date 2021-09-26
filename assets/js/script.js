"use strict";

const destinations = ["Hoth", "Tatooine", "Coruscant", "Naboo", "Kashyyyk", "Dagobah"];
const restaurants = [
  "Docking Bay 7 Food and Cargo (quick service dining)",
  "Oga’s Cantina (bar/lounge)",
  "Milk Stand (snack stand)",
  "Ronto Roasters (quick service)",
  "Kat Sakas Kettle (snack stand)",
];

const transports = [
  "All Terrain Armored Transport (AT-AT)",
  "All Terrain Scout Transport (AT-ST)",
  "Snowspeeder (T-47 Airspeeder)",
  "ETA-2 Jedi Starfighter",
  "Y-Wing Fighter",
  "X-Wing Fighter",
  "TIE Interceptor",
  "Millennium Falcon",
];

const entertainment = ["Podracing", "Droid Boxing", "Jedi Temple Experience", "Nightclub Dancing", "Live Music"];

const getRandom = (arr) => arr[Math.trunc(Math.random() * arr.length)]

const dayTrip = {
  destination: getRandom(destinations),
  restaurant: getRandom(restaurants),
  transportation: getRandom(transports),
  entertainment: getRandom(entertainment),
};

document.querySelector(".destinations").textContent = [...destinations];
document.querySelector(".restaurants").textContent = [...restaurants];
document.querySelector(".transports").textContent = [...transports];
document.querySelector(".entertainment").textContent = [...entertainment];

const displayTrip = function (identifier, objProperty) {
  document.querySelector(`.${identifier}`).textContent = `${identifier[0].toUpperCase() + identifier.slice(1)}: ${objProperty}`;
};

document.querySelector(".start").addEventListener("click", function () {
  displayTrip("destination", dayTrip.destination);
  displayTrip("restaurant", dayTrip.restaurant);
  displayTrip("transportation", dayTrip.transportation);
  displayTrip("entertainment", dayTrip.entertainment);
});

function verifyDifferentOption(optArr, currentOpt) {
  let result = getRandom(optArr);
  while (result === currentOpt) {
    result = getRandom(optArr);
  }
  return result;
}

function changeDayTripOption(opt) {
  let newOption;
  switch (opt) {
    case "destination":
      newOption = verifyDifferentOption(destinations, dayTrip.destination);
      break;
    case "restaurant":
      newOption = verifyDifferentOption(restaurants, dayTrip.restaurant);
      break;
    case "transportation":
      newOption = verifyDifferentOption(transports, dayTrip.transportation);
      break;
    case "entertainment":
      newOption = verifyDifferentOption(entertainment, dayTrip.entertainment);
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

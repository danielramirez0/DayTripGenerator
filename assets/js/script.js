'use strict';

const destinations = [
  'Hoth',
  'Tatooine',
  'Coruscant',
  'Naboo',
  'Kashyyyk',
  'Dagobah',
];
const restaurants = [
  'Docking Bay 7 Food and Cargo',
  'Oga’s Cantina',
  'Milk Stand',
  'Ronto Roasters',
  'Kat Sakas Kettle',
];

const transports = [
  'AT-AT',
  'AT-ST',
  'Snowspeeder',
  'ETA-2',
  'Y-Wing',
  'X-Wing',
  'TIE Interceptor',
  'Millennium Falcon',
];

const entertainment = [
  'Podracing',
  'Droid Boxing',
  'Jedi Temple Experience',
  'Nightclub Dancing',
  'Live Music',
];

const getRandom = (arr) => arr[Math.trunc(Math.random() * arr.length)];
const dayTrip = {};

const generateRandomTrip = () => {
  dayTrip.destination = getRandom(destinations);
  dayTrip.restaurant = getRandom(restaurants);
  dayTrip.transportation = getRandom(transports);
  dayTrip.entertainment = getRandom(entertainment);
};

const displayTrip = function (identifier, objProperty) {
  document.querySelector(`#${identifier}`).textContent = `
  ${objProperty}`;
};

document.querySelector('.start').addEventListener('click', function () {
  generateRandomTrip();
  displayTrip('destination', dayTrip.destination);
  displayTrip('restaurant', dayTrip.restaurant);
  displayTrip('transport', dayTrip.transportation);
  displayTrip('entertainment', dayTrip.entertainment);
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
    case 'destination':
      newOption = verifyDifferentOption(destinations, dayTrip.destination);
      break;
    case 'restaurant':
      newOption = verifyDifferentOption(restaurants, dayTrip.restaurant);
      break;
    case 'transportation':
      newOption = verifyDifferentOption(transports, dayTrip.transportation);
      break;
    case 'entertainment':
      newOption = verifyDifferentOption(entertainment, dayTrip.entertainment);
      break;
  }
  return newOption;
}

document.querySelector('#c-destination').addEventListener('click', function () {
  dayTrip.destination = changeDayTripOption('destination');
  displayTrip('destination', dayTrip.destination);
});
document.querySelector('#c-restaurant').addEventListener('click', function () {
  dayTrip.restaurant = changeDayTripOption('restaurant');
  displayTrip('restaurant', dayTrip.restaurant);
});
document.querySelector('#c-transport').addEventListener('click', function () {
  dayTrip.transportation = changeDayTripOption('transportation');
  displayTrip('transport', dayTrip.transportation);
});
document.querySelector('#c-entertainment').addEventListener('click', function () {
  dayTrip.entertainment = changeDayTripOption('entertainment');
  displayTrip('entertainment', dayTrip.entertainment);
});
// Event listener for confirm button
document.querySelector('#confirm').addEventListener('click', function () {
  console.log(dayTrip);
  alert(
    `Congrats! You will go to ${dayTrip.destination}, eat at ${dayTrip.restaurant}, ride in the ${dayTrip.transportation}, and enjoy ${dayTrip.entertainment}`,
  );
});

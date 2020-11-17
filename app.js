'use strict';

// import analog clock
const analogClock = require('./analog-clock-v1.0.0');

// save the clock function
const theclock = analogClock();

// get the time and date
const theTime = theclock.time;
const theDay = theclock.date;

// log the time and date
console.log(theTime());
console.log(theDay());
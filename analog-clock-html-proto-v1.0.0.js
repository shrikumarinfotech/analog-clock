/**
 * Name: Analog Clock
 * Description: Display analog clock in JavaScript
 * Author: Shrikumar Infotech
 * Author URI: dev@shrikumarinfotech.com
 * License: GPLv2.0 or later
 * License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

'use strict';

const analogClock = function(){
    // define options for time
    const optionsTime = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    // define options for hour
    const optionsHour = {
        hour: 'numeric'
    };
    // define options for minute
    const optionsMinute = {
        minute: 'numeric'
    };
    // define options for second
    const optionsSecond = {
        second: 'numeric'
    };


    // define options for date
    const optionsDate = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZoneName: 'long'
    };

    // define function for hour
    return {
        time: function(){
            return (new Intl.DateTimeFormat('en-US', optionsTime).format(new Date()));
        },
        hour: function(){
            return (new Intl.DateTimeFormat('en-US', optionsHour).format(new Date()));
        },
        minute: function(){
            return (new Intl.DateTimeFormat('en-US', optionsMinute).format(new Date()));
        },
        second: function(){
            return (new Intl.DateTimeFormat('en-US', optionsSecond).format(new Date()));
        },
        date: function(){
            return (new Intl.DateTimeFormat('en-US', optionsDate).format(new Date()));
        }
    };
};

// save the function
const theClock = analogClock();

// get the time and date
const theTime = theClock.time;
const theDay = theClock.date;
const timeHour = theClock.hour;
const timeMinute = theClock.minute;
const timeSecond = theClock.second;

// console.log(timeHour());
// console.log(timeMinute());
// console.log(timeSecond());

// display on html
const displayTime = document.getElementById('display-time');
const displayDate = document.getElementById('display-date');

// define hands
const handSecond = document.querySelector('.hand-second');
const handMinute = document.querySelector('.hand-minute');
const handHour = document.querySelector('.hand-hour');

// rotate hands with seconds
function rotateClockHands(){
    // rotate hands
    // With each second rotate handSecond by 6degres
    // With each second rotate handMinute by 6/60 degres
    // with each seond rotate handHour by 6/60/60 degres
    // set initial positions of hands
    let rotateSecondDeg = 0;
    let rotateMinuteDeg = 0;
    let rotateHourDeg = 0;
    function setInitialPos(){
        // set initial position when load with current local time zone
        // calculate degres for second
        rotateSecondDeg = ( timeSecond() * 6 );
        // calculte degres for minute
        rotateMinuteDeg = ( (timeMinute() * 6) + (rotateSecondDeg / 60 ) );
        // calculate degres for hour
        rotateHourDeg = ( (Number.parseInt(timeHour()) * 30 ) + (rotateMinuteDeg / 60) );

    };
    
    setInterval(function(){
        // set initial positions
        setInitialPos();

        // rotate handSecond
        handSecond.style.setProperty('transform', `rotate(${rotateSecondDeg}deg)`);
        rotateSecondDeg += 6;

        // rotate handMinute
        handMinute.style.setProperty('transform', `rotate(${rotateMinuteDeg}deg)`);
        rotateMinuteDeg += (6 / 60);

        // rotate hourHand
        handHour.style.setProperty('transform', `rotate(${rotateHourDeg}deg)`);
        rotateHourDeg += (30 / 60 / 60);


        // display time and date
        displayTime.innerHTML = theTime();
        displayDate.innerHTML = theDay();

        // reset function
        resetRotateHands();
    }, 1000);

    // reset rotating hands to 0deg when one round is complete
    function resetRotateHands(){
        if(rotateSecondDeg >= 360){
            rotateSecondDeg = 0;
        }

        if(rotateMinuteDeg >= 360){
            rotateMinuteDeg = 0;
        }

        if(rotateHourDeg >= 360){
            rotateHourDeg = 0;
        }
    };
    

};
rotateClockHands();


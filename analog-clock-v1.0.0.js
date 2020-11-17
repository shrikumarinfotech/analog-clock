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
        date: function(){
            return (new Intl.DateTimeFormat('en-US', optionsDate).format(new Date()));
        }
    };
};

module.exports = analogClock;
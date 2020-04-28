

/**
 * Counterdown Timer Counter
 * 
 * Doesn't return anything, but fills the divs with new data
 */

function setCountdownTimerLocation($location = 'default') {


    if($location=='default') {
        $('div#countdown-timer').style.css('color:blue');
        $('div#countdown-timer').style.css('text-decoration: bold');


    } else {
        print ('else test');
    }



}

/**
 * SET YOUR CONFIG HERE
 */
function config() {
    
    var config = {};
    
    // General
    config['loading_bar_id'] = 'countdown-bar';
    config['loading_timer_id'] = 'countdown-timer';
    
    
    // Countdown bar
    config['bar_width'] = 300;
    config['border'] = 'rgb(233, 8, 8)';
    config['background_color'] =  'rgba(189, 184, 184, 0.788)';
    config['finished_message'] = '';

    // Countdown timer



    // Add time here
    config['days_add'] = 0;
    config['hours_add'] = 0;
    config['minutes_add'] = 0;
    config['seconds_add'] = 5;


    return config;
}




/**
 * Counterdown Timer Counter
 * 
 * Doesn't return anything, but fills the divs with new data
 */
function CountdownTimer() {


    var config = this.config();

    // Set the date we're counting down to
    var datenow = new Date();
    var hour = datenow.getHours();
    var minutes = datenow.getMinutes();
    var seconds = datenow.getSeconds();
    
    // Set new timer
    var countDownDate = datenow.setDate(datenow.getDate() + config.days_add);
    var countDownDate = datenow.setHours(hour + config.hours_add);
    var countDownDate = datenow.setMinutes(minutes + config.minutes_add);
    var countDownDate = datenow.setSeconds(seconds + (config.seconds_add + 2));
    
    var now = new Date().getTime();

    var distance_start  = countDownDate - now;

    // Update the count down every 1 second
    var CountdownInterval = setInterval(function() {

        
        var now = new Date().getTime();


        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Set timer
        if(distance > 0) {
           var timer = setTimer(distance);
        } else {
            timer = 0;
        }


        // Update the timer div HTML contents to the new time
        $("#" + config.loading_timer_id).html("Time left: " + timer);

        var onePercentOfDistance =  distance / config.bar_width;
        var countdownBarWidth = 100 - onePercentOfDistance;
        
        if (countdownBarWidth <= 0) {
            countdownBarWidth = 100;
        }
        
        if (distance <= 0) {
            distance = 0;
            countdownBarWidth = 100;
        }

        $countdownBarWidth = config.bar_width;
        if(countdownBarWidth < 100) {
            $("#" + config.loading_bar_id + ' #countdown-bar-loader').animate({ width: countdownBarWidth + '%' }, 500);
        } else {
            $("#" + config.loading_bar_id + ' #countdown-bar-loader').animate({ width: '100%' }, 500);
            clearInterval(CountdownInterval);
            $("#" + config.loading_timer_id).html("Time expired!");
        }



    }, 1000);

}


/**
 * Set the timer compared to what date it is and what time is set for it.
 * 
 * @param {timstamp} distance 
 */
function setTimer(distance) {
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(hours < 10) {
        hours = "0" + hours;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    if(hours !== "00" ) {
        var timeLeft = hours + ":" + minutes + ":" + seconds;
    } else {
        var timeLeft = minutes + ":" + seconds;
    }

    if(days !== 0) {

        if(days === 1) {
            var timeLeftFinal = days + " day " + timeLeft;
        } else {
            var timeLeftFinal = days + " days " + timeLeft;
        }
    
    } else {
        var timeLeftFinal = timeLeft;
    }

    return timeLeftFinal;
}


function getSeconds(time) {



}



function getDistance(distance) {

    var timer = {};
    timer['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
    timer['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    timer['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    timer['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);
    return timer;
}
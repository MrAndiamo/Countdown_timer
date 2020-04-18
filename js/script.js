
/**
 * SET YOUR CONFIG HERE
 */
function config() {
    
    var config = {};
    
    // General
    config['loading_bar_id'] = 'countdown-bar';
    config['loading_timer_id'] = 'countdown-timer';
    
    
    // Countdown bar
    config['bar_width'] = 200;
    config['bar_height'] = 10;
    
    config['border'] = 'rgb(233, 8, 8)';
    config['background_color'] =  'rgba(189, 184, 184, 0.788)';
    config['finished_message'] = '';

    // Countdown timer
    config['timer_font'] = 'Verdana';
    config['timer_font_size'] = 12;


    // Add time here
    config['days_add'] = 1;
    config['hours_add'] = 0;
    config['minutes_add'] = 0;
    config['seconds_add'] = 20;


    return config;
}




/**
 * Counterdown Timer Counter
 * 
 * Doesn't return anything, but fills the divs with new data
 */
function CountdownTimer() {


    var config = this.config();

    //set bar-width
    $("#" + config.loading_bar_id).css('width', config.bar_width);
    $("#" + config.loading_bar_id).css('height', config.bar_height);

    // Set the date we're counting down to
    var datenow = new Date();
    var hour = datenow.getHours();
    var minutes = datenow.getMinutes();
    var seconds = datenow.getSeconds();
    
    // Set new timer
    var timerLocation = 'bottom'; // top/bottom/left/right
    var countDownDate = datenow.setDate(datenow.getDate() + config.days_add);
    var countDownDate = datenow.setHours(hour + config.hours_add);
    var countDownDate = datenow.setMinutes(minutes + config.minutes_add);
    var countDownDate = datenow.setSeconds(seconds + (config.seconds_add));
    
    // Calculate dinstance to endTime in second 
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Calculate bar_part width per second
    var distance_bar_part =  config.bar_width / distance;

    if(timerLocation == 'top') {

    } else if(timerLocation == 'left') {

    } else if(timerLocation == 'right') {

    } else {

    }
    var countdownBarWidth = 0;

    // Update the count down every 1 secondx
    var CountdownInterval = setInterval(function() {

        // Get current time
        var now = new Date().getTime();

        // Find the distance between now and the countdown time
        var distance = countDownDate - now;
    
        // SET TIMER if there is still some seconds left
        if(distance > 0) {
            var timer = setTimer(distance);
        } else {
            var timer = 0;
        }
    
        // Update the timer div HTML contents to the new time
        var timerHtml = '<span style="font-family: ' + config.timer_font + '; font-size: ' + config.timer_font_size + 'px;">' + 'Time left: ' + timer + '</span>';
        $("#" + config.loading_timer_id).html(timerHtml);

        
        // COUNTDOWN BAR
        countdownBarWidth = countdownBarWidth + (distance_bar_part * 1000);
        
        // If timer is under 0, make it 0
        if (distance < 0) {
            distance = 0;
        }
        
        if(countdownBarWidth < config.bar_width) {
            $("#" + config.loading_bar_id + ' #countdown-bar-loader').animate({ width: countdownBarWidth + 'px' }, 500);
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
            var timeLeftFinal = days + " day + " + timeLeft;
        } else {
            var timeLeftFinal = days + " days + " + timeLeft;
        }
    
    } else {
        var timeLeftFinal = timeLeft;
    }

    return timeLeftFinal;
}


/**
 * SET YOUR CONFIG HERE
 */
function config() {
    
    var $config = [];
    
    // General
    $config['loadingBar_id'] = 'countdown-bar';
    $config['loadingBarloader_id'] = 'countdown-bar-loader';
    $config['loading_timer_id'] = 'countdown-timer';
    
    $config['endtime_message'] = 'Timer expired!';
    

    // Countdown bar
    $config['loadingBar_width'] = 200;
    $config['loadingBar_height'] = 20;
    
    $config['loadingBar_border_color'] = 'blue';
    $config['loadingBar_color'] =  'darkblue';
    $config['loadingBar_background_color'] =  'blue';
    $config['finished_message'] = '';

    // Countdown timer font
    $config['timer_color'] = 'blue';
    $config['timer_font_weight'] = 700;
    $config['timer_font'] = 'Verdana';
    $config['timer_font_size'] = 12;
    
    // DEFAULT TIME IS 20 SECONDS
    $config['days_add'] = 0;
    $config['hours_add'] = 0;
    $config['minutes_add'] = 0;
    $config['seconds_add'] = 20;

    return $config;
}


/**
 * Counterdown Timer Counter
 * 
 * Doesn't return anything, but fills the divs with new data
 */
function countdownTimer() {

    $config = this.config();

    //set bar-settings
    $("#" + $config.loadingBar_id).css('width', $config.loadingBar_width);
    $("#" + $config.loadingBar_id).css('height', $config.loadingBar_height);
    $("#" + $config.loadingBar_id).css('background-color', $config.loadingBar_background_color);
    $("#" + $config.loadingBarloader_id).css('background-color', $config.loadingBar_color);

    $("#" + $config.loadingBar_id).css('border-color', $config.loadingBar_border_color);

 

    // Set the date we're counting down to
    $dateNow = new Date();
    $hour = $dateNow.getHours();
    $minute = $dateNow.getMinutes();
    $second = $dateNow.getSeconds();
    
    // Set new timer
    $timerLocation = 'bottom'; // top/bottom/left/right
    $$countDownDate = $dateNow.setDate($dateNow.getDate() + $config.days_add);
    $countDownDate = $dateNow.setHours($hour + $config.hours_add);
    $countDownDate = $dateNow.setMinutes($minute + $config.minutes_add);
    $countDownDate = $dateNow.setSeconds($second + $config.seconds_add + 1);
    
    // Calculate dinstance to endTime in second 
    $now = new Date().getTime();
    $distance = $countDownDate - $now;
    
    // Calculate loadingBar_part width per second
    $distance_loadingBar_part =  (($config.loadingBar_width / ($distance - 1000)) * 1000);
    $distance_loadingBar_part = Math.ceil($distance_loadingBar_part * 100) / 100;
    
    if($timerLocation == 'top') {

    } else if($timerLocation == 'left') {

    } else if($timerLocation == 'right') {

    } else {

    }
    $countdownBarWidth = 0;
    
    // Update the count down every 1 secondx
    $countdownInterval = setInterval(function() {

        // Get current time
        $now = new Date().getTime();

        // Find the $distance between now and the countdown time
        $distance = $countDownDate - $now;
    
        // SET TIMER if there is still some seconds left
        if($distance > 0) {
            $timer = setTimer($distance);
        } else {
            $timer = 0;
        }
        
        $timerHtmlStart = '<span style="color: ' + $config.timer_color + '; font-weight: ' + $config.timer_font_weight + '; font-family: ' + $config.timer_font + '; font-size: ' + $config.timer_font_size + 'px;">';
        $timerHtmlEnd = '</span>';

        
        // Countdown bar Width
        $countdownBarWidth = $countdownBarWidth + $distance_loadingBar_part;
        
        // If timer is under 0, make it 0
        if ($distance < 0) {
            $distance = 0;
        }
        
        if($countdownBarWidth < $config.loadingBar_width) {
            // Update the timer div HTML contents to the new time
            $timerHtml = $timerHtmlStart + 'Time left: ' + $timer + $timerHtmlEnd;
            $("#" + $config.loading_timer_id).html($timerHtml);


            // Make this a function so it both loads simultanious?
            $("#" + $config.loadingBar_id + ' #countdown-bar-loader').animate({ width: $countdownBarWidth + 'px' }, 500);
        
    
        } else {
            $("#" + $config.loadingBar_id + ' #countdown-bar-loader').animate({ width: '100%' }, 500);
            clearInterval($countdownInterval);
            
            $timerHtml = $timerHtmlStart + $config.endtime_message + $timerHtmlEnd;
            $("#" + $config.loading_timer_id).html($timerHtml);
        }
        

    }, 1000);

}


/**
 * Set the timer compared to what date it is and what time is set for it.
 * 
 * @param {timstamp} $distance 
 */
function setTimer($distance) {
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor($distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(($distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor(($distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor(($distance % (1000 * 60)) / 1000);

    if(hours < 10) {
        hours = "0" + hours;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    var timeLeft = hours + ":" + minutes + ":" + seconds;
    
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


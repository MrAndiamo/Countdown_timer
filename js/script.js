// $( document ).ready(function() {



    // CONFIG FOR COUNTDOWN BAR
    var loading_bar_id = 'countdown-bar';
    var loading_timer_id = 'countdown-timer';
    var bar_width = '300px';
    var bar_height = '20px';
    var border = 'rgb(233, 8, 8)';
    var background_color =  'rgba(189, 184, 184, 0.788)';
    var finished_message = '';
    
    // CONFIF FOR COUNTDOWN TIMER


    // CONFIG FOR COUNTDOWN TIME
    var days_add = 2;
    var hours_add = 1;
    var minutes_add = 10;
    var seconds_add = 4;


    // Set the date we're counting down to
    var DateNow = new Date();
    var hour = DateNow.getHours();
    var minutes = DateNow.getMinutes();
    var seconds = DateNow.getSeconds();

    // Set new timer
    var countDownDate = DateNow.setHours(hour + hours_add);
    var countDownDate = DateNow.setMinutes(minutes + minutes_add);



    // Update the count down every 1 second
    var x = setInterval(function() {

        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Set timer
        var timer = setTimer(distance);
        
        // Change the timer div HTML contents to the new time
        $("#" + loading_timer_id).html("Time left: " + timer);

        // Countdown finished
        if (distance < 0) {
            clearInterval(x);
            $("#" + loading_timer_id).html("Time expired!");
        }
    }, 1000);




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

        if(hours !== 0 ) {
            var timeLeft = hours + ":" + minutes + ":" + seconds;
        } else {
            var timeLeft = minutes + ":" + seconds;
        }

        if(days !== 0) {
            return days + "day(s) " + timeLeft;
        } else {
            return timeLeft;
        }

    }

// });
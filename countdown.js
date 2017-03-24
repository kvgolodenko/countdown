(function ($) {
    jQuery.fn.countdown = function(options){


        var timer = function (delay) {
            var day_s = 86400;
            var hr_s = 3600;
            var min_s = 60;

            var days = Math.floor(delay / day_s);
            var hours = Math.floor((delay - days * day_s) / hr_s);
            var min = Math.floor((delay - days * day_s - hours * hr_s) / min_s);
            var sec = delay % 60;

            if (hours < 10) {
                hours = '0' + hours;
            }
            if (min < 10) {
                min = '0' + min;
            }
            if (sec < 10) {
                sec = '0' + Math.floor(sec);
            } else {
                sec = Math.floor(sec);
            }

            $('.days .counter-item').html(days);
            $('.hours .counter-item').html(hours);
            $('.minutes .counter-item').html(min);
            $('.seconds .counter-item').html(sec);

        }

                var settings = $.extend( {
                    'deadline':0
                },options);

        $('#cdt').append("<div class='content-wrapper spr'></div>")
            $('.spr').append("<div class='header'></div>")
            $('.spr').append("<div class='counter-wrapper'></div>")
                $('.counter-wrapper').append("<div class='days counter-group'></div>")
                    $('.counter-wrapper').append("<div class='counter-item divide'></div>")
                $('.counter-wrapper').append("<div class='hours counter-group'></div>")
                    $('.counter-wrapper').append("<div class='counter-item divide'></div>")
                $('.counter-wrapper').append("<div class='minutes counter-group'></div>")
                    $('.counter-wrapper').append("<div class='counter-item divide'></div>")
                $('.counter-wrapper').append("<div class='seconds counter-group'></div>")
                    $('.days, .hours, .minutes, .seconds').append("<div class='counter-item'></div>")
                    $('.days, .hours, .minutes, .seconds').append("<div class='unit-label spr'></div>")

                var date_time = settings.deadline;
                var deadline = Math.floor(new Date(date_time).getTime() / 1000);
                var interval = setInterval(function(){
                    var diff = deadline - Math.floor(new Date().getTime() / 1000)
                    if (diff >= 0) {
                        timer(diff);
                    } else {
                        timer(0);
                        clearInterval(interval);
                    }
                }, 250)
    }
})(jQuery)

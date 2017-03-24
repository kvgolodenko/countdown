<html>
    <head>
        <!--// plug-in jQuery framework-->
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.0.min.js"></script>
        <!--plug-in Countdown.js-->
        <script type="text/javascript" src="countdown.js"></script>
        <!--    Initializing counter...-->
        <script>
            $(window).ready(function () {
                $('#cdt').countdown({
                    deadline:$('#cdt').data('countdown')
                });
            })
        </script>
        <link href="countdown.css" rel="stylesheet"></link>
    </head>
    <body>
        <div id="cdt" class='widget-wrapper' data-countdown="2017-12-12 12:00"></div>
    </body>
</html>

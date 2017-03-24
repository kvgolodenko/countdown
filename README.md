# Countdown timer plugin

Easy to set up, nice to see


Initialization
====================
You need the last jQuery framework to be added to your index page

      <!-- plug-in jQuery framework-->
      <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.0.min.js"></script>
and add plugin to index page as well

      <!--plug-in Countdown.js-->
      <script type="text/javascript" src="countdown.js"></script>
Also, you need to create some block on you index page...

      <div id"cdt" class='widget-wrapper' data-countdown="2017-12-12 12:00"></div>
... and add some styles

      <link href="countdown.css" rel="stylesheet">
Deadline date must be in format "YYYY-MM-DD HH:MM". When deadline is less than current time or timer has reached zero  - you have "0|00|00|00" timer.

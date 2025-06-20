// main.js - handles interactive features like the countdown timer
(function(){
  // Countdown Timer functionality
  var countdownElement = document.getElementById('countdown-timer');
  if (countdownElement) {
    // Set the wedding date and time (adjust to the actual date/time):
    var weddingDate = new Date('2026-06-13T14:00:00');  // Example: Aug 1, 2025 2:00 PM
    function updateCountdown() {
      var now = new Date();
      var diff = weddingDate - now;
      if (diff < 0) {
        // Wedding date has passed or is now
        countdownElement.textContent = "It's our wedding day!";
        return;
      }
      // Calculate time components
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      var minutes = Math.floor((diff / (1000 * 60)) % 60);
      var seconds = Math.floor((diff / 1000) % 60);
      // Update the spans
      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;
    }
    // Update every second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // initial call to set initial values
  }
})();

'use strict';
function userGreeting() {
  var x = confirm('Press OK if you are not a robot.');
  var responseTime = prompt('What time is it? (in hours <= 24)');
  var greeting;
  if (responseTime > 18) {
    greeting = 'Good evening';
  } else if (responseTime > 12) {
    greeting = 'Good afternoon';
  } else if (responseTime > 0) {
    greeting = 'Good morning';
  } else {
    greeting = 'Welcome';
  }
  if (x === true) {
    var responseName = prompt('What is your name?');
    document.write('<h3>' + greeting + ', ' + responseName + '!' + '</h3>');
  } else {
    document.write('<h3>' + greeting + '! ' + 'You are not allowed in here. Self-destruct initiated!' + '</h3>');
  }
}
function TShirtInfo() {
  var TShirtNum = prompt('How many T-Shirts do you want?');
  for (var i = 1; i <= TShirtNum; i++) {
    var TShirtAmt = prompt('How many T-Shirts would you like in saved account' + i + '?');
    document.write( i + '. #' + TShirtAmt + ' ');
  }
}
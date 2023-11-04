TweenMax.from(".logo", 1, {
    opacity: 0,
    delay: 2,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("nav ul li", 1, {
    opacity: 0,
    delay: 2.2,
    x: -20,
    ease: Power3.easeInOut
}, 0.8)

TweenMax.from(".search", 1, {
    opacity: 0,
    delay: 2.35,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from(".menu", 1, {
    opacity: 0,
    delay: 2.55,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from(".title", 1, {
    opacity: 0,
    delay: 2.75,
    y: 20,
    ease: Expo.fadeIn
})

TweenMax.from(".btn", 1, {
    opacity: 0,
    delay: 2.95,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".img", 2, {
    opacity: 0,
    delay: 0,
  
    ease: Expo.fadeIn   
})

TweenMax.from(".year", 1, {
    opacity: 0,
    delay: 3.6,
    y: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".media ul li", 2, {
    opacity: 0,
    delay: 3.,
    y: 40,
    ease: Expo.easeInOut
}, 0.2)


TweenMax.staggerFrom(".card1", 4, {
    opacity: 0,
    delay: 1    ,
    y: 100,
    ease: Expo.easeInOut
}, 0.2)

var countDownDate = new Date("Dec 8 ,2023    10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));//34
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("counter").innerHTML = days + "D  " + hours + "H   "
  + minutes + "M  " + seconds + "S  ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);

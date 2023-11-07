
TweenMax.staggerFrom("nav ul li", 1, {
  opacity: 0,
  delay: 2.2,
  x: -20,
  ease: Power3.easeInOut
}, 0.8)

TweenMax.from(".logo", 1, {
  opacity: 0,
  delay: 2,
  x: -20,
  ease: Expo.easeInOut
})
TweenMax.from(".title", 1, {
  opacity: 0,
  delay: 2.75,
  y: 20,
  ease: Expo.fadeIn
})
TweenMax.from(".img", 2, {
  opacity: 0,
  delay: 1,
  ease: Expo.fadeIn   
})

var countDownDate = new Date("Dec 8 ,2023    09:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));//34
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("Days").innerHTML=days;
document.getElementById("Hours").innerHTML=hours;
document.getElementById("Min").innerHTML=minutes;
document.getElementById("Sec").innerHTML=seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);



const observer= new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.add('hide');

    }
  });
});

const hiddenElements= document.getElementById('img');
hiddenElements.forEach((el)=>observer.observe(el))

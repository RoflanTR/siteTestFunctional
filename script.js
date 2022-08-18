$('.reviews').slick({
  infinite: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 821,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: false
      }

    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    }
  ]
});
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  return {
    total: t,
    minutes: minutes,
    seconds: seconds
  };
}
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(new Date()) + 5 * 1000);
      initializeClock('countdown', deadline);
    }
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
var deadline = new Date(Date.parse(new Date()) + 1800 * 1000);
initializeClock("countdown", deadline);

var inputName = document.querySelector('.inputform1');
var inputPhone = document.querySelector('.inputform2');
function validatePhone(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9\s\+\-]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

inputPhone.onkeypress = function () {
  validatePhone(event);
}

inputPhone.onpaste = function () {
  validatePhone(event);
}

function validateName(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[а-я\А-Я\a-z\A-Z]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

inputName.onkeypress = function () {
  validateName(event);
}

inputName.onpaste = function () {
  validateName(event);
}

var first_example = document.querySelector('.first_example');
var second_example = document.querySelector('.second_example');
inputName.addEventListener("focus", function () {
  first_example.style.display = 'initial';
});
inputName.addEventListener("focusout", function () {
  first_example.style.display = 'none';
});
inputPhone.addEventListener("focus", function () {
  second_example.style.display = 'initial';
});
inputPhone.addEventListener("focusout", function () {
  second_example.style.display = 'none';
});
// navToggle

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".mobile-toggle");
  const bodyClasses = document.querySelector("body").classList;
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      const body = document.querySelector("body");
      body.classList.toggle("nav-open");
    });
  }
});

// burgerToggle

document.addEventListener("DOMContentLoaded", function () {
  const menuBurger = document.querySelector(".menu");
  const btnBurger = document.querySelector(".menu");
  if (menuBurger) {
    menuBurger.addEventListener("click", function () {
      const burgerMenu = document.querySelector(".menu");
      burgerMenu.classList.toggle("opened");
    });
  }
});

//page loader with jquery

$(document).ready(function () {
    setTimeout(function () {
      $("body").addClass("loaded");
    }, 700);
});

$(document).ready(function () {
  if(window.location.pathname === '/about.html') {
    setTimeout(function () {
      $("body").addClass("loaded");
    }, 5);
  }
});

// page loader

(function () {
  const bodyClasses = document.querySelector("body").classList;
  if (document.cookie.indexOf("visited=true") === -1) {
    setTimeout(function () {
      const body = document.querySelector("body");
      body.classList.toggle("loaded");
    }, 700);
  }
});

// tekst-typer

const TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  const i = this.loopNum % this.toRotate.length;
  const fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  const that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  const elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute("data-rotate");
    const period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};

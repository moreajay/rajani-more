
// $(document).ready(function() {
//   $(".arrow-down").click(function() {
//        $('html, body').animate({
//            scrollTop:$(".help").offset().top
//        }, 1500);
//    });
//   });

document.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-shrink');
  } else {
    navbar.classList.remove('navbar-shrink');
  }
});

$(document).ready(function () {
  // Function to initialize the counter
  function initializeCounter() {
    $('.number-counter').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now) + '+');
        }
      });
    });
  }

  // Check if the specific section is in the viewport
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return elemTop <= docViewBottom;
  }

  // Start the counter when the specific section is scrolled into view
  $(window).on('scroll', function () {
    if (isScrolledIntoView('.achivements')) {
      initializeCounter();
      // Remove the scroll event listener to ensure the counter only starts once
      $(window).off('scroll');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.swpie-down a');

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      var href = link.getAttribute('href');
      var targetElement = document.querySelector(href);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: '20px',
    prevArrow: '<i class="fa fa-arrow-right slick-icon"></i>',
    nextArrow: '<i class="fa fa-arrow-left slick-icon"></i>',
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Enable Scrollspy
  document.body.setAttribute('data-spy', 'scroll');
  document.body.setAttribute('data-target', '#navbar');

  // Smooth scrolling on click
  var navbarLinks = document.querySelectorAll('#navbar a[data-target]');
  navbarLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      var targetId = link.getAttribute('data-target');
      if (targetId) {
        event.preventDefault();

        if (window.innerWidth < 992) {
          var navbarToggle = document.querySelector('.navbar-toggler');
          if (navbarToggle) {
            navbarToggle.click();
          }
        }

        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const tabNavLinks = document.querySelectorAll('.tab-container a');
  const tabStageItems = document.querySelectorAll('.tabs-stage li');

  // Show the first tab by default
  tabNavLinks[0].classList.add('tab-active');
  tabStageItems[0].classList.add('active');

  // Event listener for tab clicks
  tabNavLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);

      // Remove 'active' class from all tab items
      tabNavLinks.forEach(function (navLink) {
        navLink.classList.remove('tab-active');
      });
      tabStageItems.forEach(function (stageItem) {
        stageItem.classList.remove('active');
      });

      // Add 'active' class to the clicked tab item
      this.classList.add('tab-active');
      document.getElementById(targetId).classList.add('active');
    });
  });
});


$(document).ready(function () {
  var carousel = $('#carouseltestimonial');
  var items = carousel.find('.carousel-inner .carousel-item');
  var controlPrev = carousel.find('.carousel-control-prev');
  var controlNext = carousel.find('.carousel-control-next');

  // Initially hide controls
  hideControls();

  // Show or hide controls when the carousel slides
  carousel.on('slid.bs.carousel', function () {
    hideControls();
  });

  // Show controls when the carousel starts sliding
  carousel.on('slide.bs.carousel', function () {
    showControls();
  });

  function hideControls() {
    if (items.first().hasClass('active')) {
      controlPrev.hide();
    } else {
      controlPrev.show();
    }
    if (items.last().hasClass('active')) {
      controlNext.hide();
    } else {
      controlNext.show();
    }
  }

  function showControls() {
    controlPrev.show();
    controlNext.show();
  }
});







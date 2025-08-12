(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section, div[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function onScroll() {
    let currentSectionId = "";
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const offsetTop = section.offsetTop;
      const offsetHeight = section.offsetHeight;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  }

  
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Evitar que el navegador cambie la URL

      const targetId = this.getAttribute("href").substring(1); // Borra "#"
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        // Asegurarse de que no aparezca a principio
        history.replaceState(null, null, location.pathname + location.search);
      }
    });
  });

  window.addEventListener("scroll", onScroll);
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  freeMode: true,
  speed: 2000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: {
    enabled: true,
    sticky: false,
  },
  loopedSlides: 9, // Ajusta según la cantidad de logos disponibles
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 25 },
    1024: { slidesPerView: 5, spaceBetween: 30 },
  }
});


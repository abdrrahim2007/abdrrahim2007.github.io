openMenu = document.getElementById('openMenu');
menu = document.getElementById('nav');
closeMenu = document.getElementById('close-menu');

openMenu.addEventListener("click", function() {
  menu.classList.toggle("active");
  
});
closeMenu.addEventListener("click", function() {
  menu.classList.toggle("active");
  
});


const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll < lastScrollTop) {
        header.classList.remove('hidden');
        // Additional actions you want to perform when scrolling up
    }else{
      header.classList.add('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});




  function initSwiper() {
    document.querySelectorAll('.swiper').forEach(function(swiper) {
      let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
      new Swiper(swiper, config);
    });
  }
  window.addEventListener('load', initSwiper)



            // {
            //   "loop": true,
            //   "speed": 600,
            //   "autoplay": {
            //     "delay": 5000
            //   },
            //   "slidesPerView": "auto",
            //   "pagination": {
            //     "el": ".swiper-pagination",
            //     "type": "bullets",
            //     "clickable": true
            //   },
            //   "breakpoints":{
                
            //   }
            // }
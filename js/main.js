const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true, // слайды перелистываются даже если закончились
    slidesPerView: 1, 
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6
      },
      1600: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 4
      },
      1100: {
        slidesPerView: 3
      },
      800: {
        slidesPerView: 2
      }
    },
    // Navigation arrows
    navigation: { // кнопки пагинации работают с данными классами 
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  
  });


  const swiper2 = new Swiper('.recommend-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1600: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 2
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.recommend-button-next',
      prevEl: '.recommend-button-prev',
    },
  
 
  });

  const swiper3 = new Swiper('.food-slider', {
    // Optional parameters
    loop: true, // слайды перелистываются даже если закончились
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6
      },
      1600: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 4
      },
      1100: {
        slidesPerView: 3
      },
      800: {
        slidesPerView: 2
      }
    },
    // Navigation arrows
    navigation: { // кнопки пагинации работают с данными классами 
      nextEl: '.food-button-next',
      prevEl: '.food-button-prev',
    },
  
  });

  const searchBtn = document.querySelector('.mobile-search');
  const mobileSearch = document.querySelector('.input-group');
  searchBtn.addEventListener('click', () => {
    mobileSearch.classList.toggle('is-open');
  });

  if (document.documentElement.scrollWidth <= 640) {
    swiper.destroy();
    swiper2.destroy();
    swiper3.destroy();
  }
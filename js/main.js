const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true, // слайды перелистываются даже если закончились
    slidesPerView: 4, //6
    // Navigation arrows
    navigation: { // кнопки пагинации работают с данными классами 
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  
  });


  const swiper2 = new Swiper('.recommend-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
  
    // Navigation arrows
    navigation: {
      nextEl: '.recommend-button-next',
      prevEl: '.recommend-button-prev',
    },
  
 
  });

  const swiper3 = new Swiper('.food-slider', {
    // Optional parameters
    loop: true, // слайды перелистываются даже если закончились
    slidesPerView: 4, //6
    // Navigation arrows
    navigation: { // кнопки пагинации работают с данными классами 
      nextEl: '.food-button-next',
      prevEl: '.food-button-prev',
    },
  
  });

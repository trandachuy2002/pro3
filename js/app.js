$(document).ready(function () {
  $(".image-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    prevArrow: `<button type='button' class='slick-prev pull-left slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

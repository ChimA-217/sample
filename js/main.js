// drawer
$(function () {
  $('.detail_hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {

      $('.detail_drawer').addClass('active');
    } else {
      $('.detail_drawer').removeClass('active');
    }
  });
});


// effect-fade
$(function () {
  $(window).scroll(function () {
    $('.effect-fade').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 50) {
        $(this).addClass('effect-scroll');
      }
    });
  });
});

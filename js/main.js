// Trang chủ

$('.shopping__category li').click(function() {
  $('.shopping__category li').removeClass('active');
  $(this).addClass('active');
});

$('.header__menu-cart').click(function () {
  $('.shopping-cart').fadeToggle();
});

$('.change-color__primary').click(function() {
  $('.color__selection').fadeToggle();
})

$
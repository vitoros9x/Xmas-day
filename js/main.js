$(document).ready(function () {
  $('.shopping__category li').click(function() {
    $('.shopping__category li').removeClass('active');
    $(this).addClass('active');
  });
});
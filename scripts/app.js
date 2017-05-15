$(document).ready(function() {
  console.log('hello');
  $(window).scroll(function () {
    $('.splash-header').each(fadeAnimations);
    $('.about').each(fadeAnimations);
    $('.project-card').each(slideAnimations);
  });


});

function fadeAnimations() {
  var imagePos = $(this).offset().top;
  var imageHeight = $(this).height();
  var topOfWindow = $(window).scrollTop();

  if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {

    $(this).removeClass('fadeOut').addClass('fadeIn');
  } else {
    $(this).removeClass('fadeIn').addClass('fadeOut');
  }
}

function slideAnimations() {
  var imagePos = $(this).offset().top;
  var imageHeight = $(this).height();
  var topOfWindow = $(window).scrollTop();

  if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {

    $(this).removeClass('slideOutLeft').addClass('slideInLeft');
  } else {
    $(this).removeClass('slideIneft').addClass('slideOutLeft');
  }
}

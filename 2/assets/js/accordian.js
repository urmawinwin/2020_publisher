$(document).ready(function () {
  $slides = $(".slides");
  $slides.bind("contentchanged", function () {
    animate($slides);
  });
  animate($slides);
});

function animate($slides) {
  var slidesLength = $slides.find("li").length;
  if (slidesLength > 3) {
    $slides.find("li:nth-last-child(-n+3)").clone().prependTo($slides);
    $slides.addClass("animate");
    $slides.css("animation-duration", slidesLength * 2 + "s");
  }
}

// 아코디언

// $(document).ready(function () {
//   $(".accor_acc h3").click(function () {
//     $(this).next(".accor_content").slideToggle();
//     $(this).parent().toggleClass("active");
//     $(this).parent().siblings().children(".accor_content").slideUp();
//     $(this).parent().siblings().removeClass("active");
//   });
// });

// $(document).ready(function () {
//   $(".accor_acc > accor_flex").click(function () {
//     $(this).next(".accor_content").slideToggle();
//     $(this).parent().toggleClass("active");
//     $(this).parent().siblings().children(".accor_content").slideUp();
//     $(this).parent().siblings().removeClass("active");
//   });
// });

// Js_Tap_Menu

var targetLink = document.querySelectorAll(".js_content_menu a");
var tabContent = document.querySelectorAll(".js_content_wrap > div");
console.log(tabContent);

for (var i = 0; i < targetLink.length; i++) {
  targetLink[i].addEventListener("click", function (e) {
    e.preventDefault();
    var orgTarget = e.target.getAttribute("href");
    var tabTarget = orgTarget.replace("#", "");

    for (var x = 0; x < tabContent.length; x++) {
      tabContent[x].style.display = "none";
    }
    document.getElementById(tabTarget).style.display = "block";

    for (var j = 0; j < targetLink.length; j++) {
      targetLink[j].classList.remove("js_active");
      e.target.classList.add("js_active");
    }
  });
}

document.getElementById("js_cont_one").style.display = "block";

/*
var orgTarget = '#js_cont_one'; //갖고 오는건 바로 가능ㅇ
var tabTarget = orgTarget.replace('#','');//#못쓰니까 빼줘
document.getElementById(tabTarget).style.display = 'block';//css조작
*/

// Accordian Dropdown Menu

var dropdown = document.querySelectorAll(".dropdown");
var dropdownArray = Array.prototype.slice.call(dropdown, 0);
dropdownArray.forEach(function (el) {
  var button = el.querySelector('a[data-toggle="dropdown"]'),
    menu = el.querySelector(".dropdown-menu"),
    arrow = button.querySelector("i.icon-arrow");

  button.onclick = function (event) {
    if (!menu.hasClass("show")) {
      menu.classList.add("show");
      menu.classList.remove("hide");
      arrow.classList.add("open");
      arrow.classList.remove("close");
      event.preventDefault();
    } else {
      menu.classList.remove("show");
      menu.classList.add("hide");
      arrow.classList.remove("open");
      arrow.classList.add("close");
      event.preventDefault();
    }
  };
});

Element.prototype.hasClass = function (className) {
  return (
    this.className &&
    new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className)
  );
};

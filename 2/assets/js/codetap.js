// $(function () {
//   // Menu Tabular
//   var $menu_tabs = $(".menu__tabs li a");
//   $menu_tabs.on("click", function (e) {
//     e.preventDefault();
//     $menu_tabs.removeClass("active");
//     $(this).addClass("active");

//     $(".menu__item").fadeOut(300);
//     $(this.hash).delay(300).fadeIn();
//   });
// });

window.addEventListener("load", function () {
  // store tabs variable
  var theTabs = document.querySelectorAll("ul.nav-tabs > li");

  function theTabClicks(tabClickEvent) {
    var clickedTab = tabClickEvent.currentTarget;
    var tabParent =
      tabClickEvent.currentTarget.parentNode.parentNode.parentNode;
    var theTabs = tabParent.querySelectorAll("ul.nav-tabs > li");
    for (var i = 0; i < theTabs.length; i++) {
      theTabs[i].classList.remove("active");
    }

    clickedTab.classList.add("active");
    tabClickEvent.preventDefault();
    var contentPanes = tabParent.querySelectorAll(".tab-pane");
    for (i = 0; i < contentPanes.length; i++) {
      contentPanes[i].classList.remove("active");
    }
    var anchorReference = tabClickEvent.target;
    var activePaneId = anchorReference.getAttribute("href");
    var activePane = tabParent.querySelector(activePaneId);
    activePane.classList.add("active");
  }
  for (i = 0; i < theTabs.length; i++) {
    theTabs[i].addEventListener("click", theTabClicks);
  }
});

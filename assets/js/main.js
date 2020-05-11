$(document).ready(function() {
  adjustTopbarHeight();
  document.getElementsByTagName("html")[0].style.visibility = "visible";
});

function adjustTopbarHeight() {
  h = $("#topbar").outerHeight() + 4;
  $("#topbarborder").parent().height(h);
  $("#mySidepanel").css("top", h-4);
}

function toggleHamburger(ham) {
  $(ham).toggleClass("is-active")
  toggleSidePanel()
  togglePVBorder()
  toggleTopBarBorder()
}

function toggleSidePanel() {
  $("#mySidepanel").toggleClass("active")
}

function togglePVBorder() {
  $("#pv").toggleClass("active")
  $("#pv > i").toggleClass("active")
  $("#pv > a").toggleClass("active")

}
function toggleTopBarBorder() {
  $(".topbarborder").toggleClass("closed")
}

function toggleImg(arr) {
  $(arr).html(function (index, value) {
    if (value === 'add'){
      return 'remove';
    }
    return 'add';
  });
  $(arr).parent().next("img").toggleClass("w3-hide");
}

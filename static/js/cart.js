/**
 * Created by hc on 2017/4/4.
 */
function check() {
  var cartBoxs = document.getElementsByClassName("check_box");
  for (var i = 0; i < cartBoxs.length; i++) {
    cartBoxs[i].onclick = function() {
      console.log(cartBoxs.length);
      var hasChecked = this.getAttribute("checked");
      if (hasChecked != null) {
        this.removeAttribute("checked");
      } else {
        this.setAttribute("checked", "")
      }
    };
  }
}

/*function allCheck() {
  var allCartBoxs = document.getElementsByClassName("shopping_all_check");
  var cartBoxs = document.getElementsByClassName("check_box");
  allCartBoxs[0].onclick = function() {
    for(var index=0;index<cartBoxs.length;index++){
      var hasChecked = this.getAttribute("checked");
      if (hasChecked != null) {
        this.removeAttribute("checked");
        cartBoxs[index].removeAttribute("checked");
      } else {
        this.setAttribute("checked", "");
        cartBoxs[index].setAttribute("checked", "");
      }
    }
  }
}*/

module.exports = {
  check,
  // allCheck
}



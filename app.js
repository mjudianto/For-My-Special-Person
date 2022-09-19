// var button = document.querySelector("button");
var tombol = document.getElementById("bouncing");

// button.style.backgroundColor = 'red';

tombol.addEventListener("click", function() {
  // console.log(window.innerHeight)
  var divcontainer = document.getElementById("btn-con");
  var changeTop = (Math.random() * (divcontainer.offsetHeight - tombol.offsetHeight));
  // var changeTop = (Math.random() * 500) + 100;
  // console.log(changeTop);
  var changeLeft = (Math.random() * (divcontainer.offsetWidth - tombol.offsetWidth));
  // var changeLeft = (Math.random() * 500) + 100;
  tombol.style.marginTop = changeTop + "px";
  tombol.style.marginLeft = changeLeft + "px";
  // $("button").css("margin-left", changeLeft + "px");
});
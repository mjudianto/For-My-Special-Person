var tombolClickMe = document.getElementById("click-me");
var layarMinTCM = window.innerHeight/2 - tombolClickMe.offsetHeight/2;
// console.log(layarMinTCM + "px");
tombolClickMe.style.marginTop = layarMinTCM + "px";   

var tombolClickMeP = document.getElementById("click-me-p");
var tombolMinTCMP = tombolClickMe.offsetHeight/2 - tombolClickMeP.offsetHeight/2 - 7;
tombolClickMeP.style.marginTop = tombolMinTCMP + "px";
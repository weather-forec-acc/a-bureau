// Shorthand for $( document ).ready()
$(function() {
  var space = document.getElementById("space");
  for (var i = 0; i < 250; i++) {
  	var star = document.createElement("div");
    space.appendChild(star);
    star.classList.add("star");
    var star_left = Math.floor(Math.random() * 1701);     // returns a number between 0 and 1500
    var star_top = Math.floor(Math.random() * 1701);     // returns a number between 0 and 1500
    star.style.left = star_left+"px";
    star.style.top = star_top+"px";
    var anim_delay = Math.floor(Math.random() * 16);     // returns a number between 0 and 15
    star.style.animationDelay = "-"+anim_delay+"s";
  }
});
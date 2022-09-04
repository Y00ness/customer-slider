let slider = document.getElementById("slider");
let left = 0;
function move_left() {
  if (left > 3) {
    left = 0;
    slider.style.left = "-" + left * 20 + "%";
    slider.style.transition = "all 1.5s ease";
  } else {
    left += 1;
    slider.style.left = "-" + left * 20 + "%";
    slider.style.transition = "all 0.8s ease";
  }
  // slider.style.transform = "translat"
}
function move_right() {
  left -= 1;
  if (left < 0) {
    left = 4;
    slider.style.left = "-" + left * 20 + "%";
    slider.style.transition = "all 1.5s ease";
  } else {
    slider.style.left = "-" + left * 20 + "%";
    slider.style.transition = "all 0.8s ease";
  }
}

// setInterval(function () {
//   left += 1;
//   slider.style.left = "-" + left * 20 + "%";
// }, 1000);

let $box = $("#box");
let $carouse = $("#carouse");
let $rightBtn = $("#rightBtn");
let $cirList = $("#cirList li");

let idx = 0;
let width = $carouse.children().width();
let time = 1000;
let imgCount = $carouse.children().length;
let maxImgWidth = width * imgCount;
let lock = true;

setInterval(function () {
  carouse();
}, 3000);

$rightBtn.click(function () {
  carouse();
});


$cirList.click(function () {
  if (!lock) {
    return;
  }
  lock = false;
  cirChange.call(this);
  idx = $(this).index();
  $carouse.animate({ left: -width * idx }, time, function () {
    lock = true;
  });
});

function cirChange() {
    $(this).addClass("change").siblings().removeClass("change");
  }

function carouse() {
  if (!lock) {
    return;
  }
  lock = false;
  idx++;
  $carouse.animate({ left: -width * idx }, time, function () {
    if (idx == 1) {
      $carouse.append(
        "<li><img width='955' height='640' src='./images/page-3-pic-1.png' alt='' draggable='false'></li>"
      );
    } else if (width * idx == maxImgWidth) {
      $("#carouse li").last().remove();
      $carouse.css("left", 0);
      idx = 0;
    }
    lock = true;
  });
  cirChange.call($cirList[idx >= imgCount ? 0 : idx])
}


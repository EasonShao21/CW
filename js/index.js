let $box = $("#box");
let $carouse = $("#carouse");
let $rightBtn = $("#rightBtn");
let $cirList = $("#cirList li");

let idx = 0;
let width = $carouse.children().width();
let time = 1000;
let imgCount = $carouse.children().length - 1;
let maxImgWidth = width * imgCount;
let lock = true;

let $page4linkInput = $("#page4linkInput");
let $inputWidth = $("#page4linkInput").width();
let $page4btnStart = $("#page4btnStart");
let $page4btnEnd = $("#page4btnEnd");
let $page4btnHover = $("#page4btnHover");

let $page5linkInput = $("#page5linkInput");

let $page5btnStart = $("#page5btnStart");
let $page5btnEnd = $("#page5btnEnd");
let $page5btnHover = $("#page5btnHover");

let $page5Content = $("#page5Content");


setInterval(function () {
    if (!lock) {
        return;
      }
      lock = false;
      idx++;
  carouse();
}, 3000);

$rightBtn.click(function () {
  if (!lock) {
    return;
  }
  lock = false;
  idx++;
  carouse();
});

$cirList.click(function () {
  if (!lock) {
    return;
  }
  lock = false;
  cirChange.call(this);
  idx = $(this).index();
  carouse();
});

$page4linkInput.mouseenter(function () {
  $page4btnEnd.hide();
  $page4btnStart.show();
  $page4btnStart.animate({ left: $inputWidth + 15 }, 500);
  setTimeout(function () {
    $page4btnHover.show();
    $page4btnStart.hide();
  }, 1500);
});

$page4linkInput.mouseleave(function () {
  $page4btnStart.css("left", 0);
  $page4btnEnd.css("right", 0);
  $page4btnEnd.show();
  $page4btnStart.hide();
  $page4btnHover.hide();
});

$page4btnHover.mouseleave(function () {
  $page4btnStart.css("left", 0);
  $page4btnEnd.css("right", 0);
  $page4btnEnd.show();
  $page4btnStart.hide();
  $page4btnHover.hide();
});

$page5linkInput.mouseenter(function () {
  $page5btnEnd.hide();
  $page5btnStart.show();
  $page5btnStart.animate({ left: $inputWidth + 15 }, 500);
  setTimeout(function () {
    $page5btnHover.show();
    $page5btnStart.hide();
  }, 1500);
});

$page5linkInput.mouseleave(function () {
  $page5btnStart.css("left", 0);
  $page5btnEnd.css("right", 0);
  $page5btnEnd.show();
  $page5btnStart.hide();
  $page5btnHover.hide();
});

$page5btnHover.mouseleave(function () {
  $page5btnStart.css("left", 0);
  $page5btnEnd.css("right", 0);
  $page5btnEnd.show();
  $page5btnStart.hide();
  $page5btnHover.hide();
});

$page5Content.click(function() {
   $("#page5Content img").hide();
   $("#page5Content #page5linkInput").hide();
   $("#page5Content iframe").show();
})

function cirChange() {
  $(this).addClass("change").siblings().removeClass("change");
}

function carouse() {
  $carouse.animate({ left: -width * idx }, time, function () {
    if (width * idx == maxImgWidth) {
      $carouse.css("left", 0);
      idx = 0;
      $("#carouseTitle h2").html(
        "面對照顧壓力大？張曼娟：</br>記得提醒自己，這一切都會過去的"
      );
      $("#carouseTitle p").html(
        "各位照顧者又要展開新的一年，每天闖關又常感到孤單的日子"
      );
    }
    lock = true;
  });
  cirChange.call($cirList[idx >= imgCount ? 0 : idx]);
  switch (idx) {
    case 1:
      $("#carouseTitle h2").html(
        "小六生可能已是照顧者</br>日本小學生與失智者共開店"
      );
      $("#carouseTitle p").html(
        "當我們擔心學童與失智者接觸的安危，日本小學已納入課程..."
      );
      break;
    case 2:
      $("#carouseTitle h2").html(
        "不想活得又老又窮</br>避開50歲最後悔的5個財務決定"
      );
      $("#carouseTitle p").html("「早知道會活那麼久，當初就……」");
      break;
  }
}

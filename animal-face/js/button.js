//성별에 따른 변수 저장
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const body1 = document.getElementById("body-1");
const body2 = document.getElementById("body-2");
const testpageTopText = document.getElementById("testpage-top-text");
const removeImage = document.querySelector(".remove-image");

const num = 0;
localStorage.setItem("number", num);

function colorChange(color1, color2) {
  body1.style.backgroundColor = color1;
  body2.style.backgroundColor = color2;
  testpageTopText.style.color = color1;
  testpageTopText.style.borderColor = color1;
  button1.style.boxShadow = "0px 8px 15px " + color1;
  button2.style.boxShadow = "0px 8px 15px " + color1;
}

function numClick(num, text) {
  localStorage.setItem("number", num);
  $(".testpage-top-gen").html(text);
  colorChangeNum();
}
function womanClick1() {
  numClick(1, "(여자)");
  $(".file-upload-input").attr("type", "file");
}

function manClick2() {
  numClick(2, "(남자)");
  $(".file-upload-input").attr("type", "file");
}

function colorChangeNum() {
  if (localStorage.getItem("number") == 1) {
    colorChange("pink", "#fff1f4");
  } else if (localStorage.getItem("number") == 2) {
    colorChange("var(--blue-color)", "#eff4ff");

    removeImage.style.backgroundColor = "#eff4ff";
    removeImage.style.borderBottomColor = "var(--blue-color)";
    $(".remove-image").hover(
      function () {
        $(this).css("background-color", "var(--border-color)");
      },
      function () {
        $(this).css("background-color", "#eff4ff");
      }
    );
  }
}

button1.addEventListener("click", womanClick1);
button2.addEventListener("click", manClick2);

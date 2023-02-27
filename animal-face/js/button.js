//성별에 따른 변수 저장
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const num = 0;
localStorage.setItem("number", num);

function womanClick1() {
  button1.classList.toggle("woman-click");
  if ($(".button1").hasClass("woman-click") === true) {
    const num = 1;
    localStorage.setItem("number", num);
    button2.classList.remove("man-click");
    $(".testpage-top-gen").html("(여자)");
  } else {
    const num = 0;
    localStorage.setItem("number", num);
    $(".testpage-top-gen").html("");
  }

  colorChange();
}

function manClick2() {
  button2.classList.toggle("man-click");
  if ($(".button2").hasClass("man-click") === true) {
    const num = 2;
    localStorage.setItem("number", num);
    button1.classList.remove("woman-click");
    $(".testpage-top-gen").html("(남자)");
  } else {
    const num = 0;
    localStorage.setItem("number", num);
    $(".testpage-top-gen").html("");
  }
  colorChange();
}

function colorChange() {
  if (localStorage.getItem("number") == 1) {
    document.getElementById("body-1").style.backgroundColor = "pink";
    document.getElementById("body-2").style.backgroundColor = "#fff1f4";
    document.getElementById("testpage-top-text").style.color = "pink";
    document.getElementById("testpage-top-text").style.borderColor = "pink";
    button1.style.boxShadow = "0px 8px 15px pink";
    button2.style.boxShadow = "0px 8px 15px pink";
    $(button1).hover(
      function () {
        $(this).css("background-color", "pink");
      },
      function () {
        $(this).css("background-color", "white");
      }
    );
    $(button1).hover(
      function () {
        $(this).css("box-shadow", "0px 15px 20px palevioletred");
      },
      function () {
        $(this).css("box-shadow", "0px 8px 15px pink");
      }
    );
    $(button2).hover(
      function () {
        $(this).css("background-color", "pink");
      },
      function () {
        $(this).css("background-color", "white");
      }
    );
  } else if (localStorage.getItem("number") == 2) {
    document.getElementById("body-1").style.backgroundColor =
      "var(--blue-color)";
    document.getElementById("body-2").style.backgroundColor = "#eff4ff";
    document.getElementById("testpage-top-text").style.color =
      "var(--blue-color)";
    document.getElementById("testpage-top-text").style.borderColor =
      "var(--blue-color)";
    button1.style.boxShadow = "0px 8px 15px var(--blue-color)";
    button2.style.boxShadow = "0px 8px 15px var(--blue-color)";

    $(button1).hover(
      function () {
        $(this).css("background-color", "var(--blue-color)");
      },
      function () {
        $(this).css("background-color", "white");
      }
    );
    $(button1).hover(
      function () {
        $(this).css("box-shadow", "0px 15px 20px var(--border-color)");
      },
      function () {
        $(this).css("box-shadow", "0px 8px 15px var(--blue-color)");
      }
    );
    $(button2).hover(
      function () {
        $(this).css("background-color", "var(--blue-color)");
      },
      function () {
        $(this).css("background-color", "white");
      }
    );
    document.querySelector(".remove-image").style.backgroundColor = "#eff4ff";
    document.querySelector(".remove-image").style.borderBottomColor =
      "var(--blue-color)";
    $(".remove-image").hover(
      function () {
        $(this).css("background-color", "var(--border-color)");
      },
      function () {
        $(this).css("background-color", "#eff4ff");
      }
    );
  } else {
    document.getElementById("body-1").style.backgroundColor =
      "var(--base-color)";
    document.getElementById("body-2").style.backgroundColor = "#f1f1f7";
    document.getElementById("testpage-top-text").style.color =
      "var(--base-color)";
    document.getElementById("testpage-top-text").style.borderColor =
      "var(--base-color)";
    button1.style.boxShadow = "0px 8px 15px var(--base-color)";
    button2.style.boxShadow = "0px 8px 15px var(--base-color)";
    $(button1).hover(
      function () {
        $(this).css("background-color", "var(--base-color)");
      },
      function () {
        $(this).css("background-color", "white");
      }
    );
    $(button1).hover(
      function () {
        $(this).css("box-shadow", "0px 15px 20px var(--border-color)");
      },
      function () {
        $(this).css("box-shadow", "0px 8px 15px var(--base-color)");
      }
    );
    $(button2).hover(
      function () {
        $(this).css("background-color", "var(--base-color)");
      },
      function () {
        $(this).css("background-color", "white");
      }
    );
  }
}

button1.addEventListener("click", womanClick1);
button2.addEventListener("click", manClick2);

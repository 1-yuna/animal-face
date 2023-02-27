//사진 업로드
const fileUploadInput = document.querySelector(".file-upload-input");

fileUploadInput.addEventListener("click", function (button0) {
  if (localStorage.getItem("number") == 0) {
    alert("성별을 선택해주세요!!");
  } else {
    $(".file-upload-input").attr("type", "file");
  }
});
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $(".image-upload-wrap").hide();
      $(".file-upload-image").attr("src", e.target.result);
      $(".file-upload-content").show();
      $(".image-title").html(input.files[0].name);
      $(".removw-p-button-box").hide();
    };
    reader.readAsDataURL(input.files[0]);
    if (localStorage.getItem("number") == 1) {
      todo1();
    } else {
      todo2();
    }
  } else {
    removeUpload();
  }
}

// 사진 재업로드
function removeUpload() {
  window.location.reload();

  // $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  // $(".file-upload-content").hide();
  // $(".image-upload-wrap").show();
}
$(".image-upload-wrap").bind("dragover", function () {
  $(".image-upload-wrap").addClass("image-dropping");
});
$(".image-upload-wrap").bind("dragleave", function () {
  $(".image-upload-wrap").removeClass("image-dropping");
});

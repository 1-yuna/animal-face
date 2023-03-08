//사진 업로드
const fileUploadInput = document.querySelector(".file-upload-input");

fileUploadInput.addEventListener("click", function () {
  if (localStorage.getItem("number") == 0) {
    alert("성별을 선택해주세요!!");
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
      todo("gbhu2b5G4");
    } else {
      todo("l7So9pdis");
    }
  } else {
    removeUpload();
  }
}

// 사진 재업로드
function removeUpload() {
  window.location.reload();
}

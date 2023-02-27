function kakaoShare() {
  //7번에서 붙여넣은 값.
  //단! 본인이 원하는 값으로 수정해야 함
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "동물상 테스트",
      description: "나와 닮은 동물상은 무엇일까?",
      imageUrl: "animal.jpg",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
    buttons: [
      {
        title: "웹으로 보기",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
    ],
    // 카카오톡 미설치 시 카카오톡 설치 경로이동
    installTalk: true,
  });
}

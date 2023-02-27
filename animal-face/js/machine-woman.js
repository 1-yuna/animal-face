//Teachable Machine
// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

function todo1() {
  const URL = "https://teachablemachine.withgoogle.com/models/gbhu2b5G4/";
  init1().then(() => {
    predict1();
  });

  // 모델 파일들 가져오기
  let model, webcam, labelContainer, maxPredictions;

  async function init1() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    labelContainer = document.getElementById("labelgraph-container-box");
  }

  // 모델 예측
  async function predict1() {
    var image = document.getElementById("face-image");
    const prediction = await model.predict(image, false);
    prediction.sort(
      (a, b) => parseFloat(b.probability) - parseFloat(a.probability)
    );

    var resultMessege;
    var resultMessegeColor;
    var resultComment;
    switch (prediction[0].className) {
      case "강아지상":
        resultMessege = "귀여운 순둥이 강아지상";
        resultMessegeColor = "#30839A";
        resultComment =
          "다정다감하고 귀여운 당신은 모든 사람들에게 즐거움을 주는 호감형이다! 상냥하고 활발한 성격으로 어디에서도 인기폭팔이지만, 애교와 웃음이 많아 연인에게 특히나 사랑스럽다. 야옹";
        break;
      case "고양이상":
        resultMessege = "츤데레 매력쟁이 고양이상";
        resultMessegeColor = "#F8B039";
        resultComment =
          "도도한 인상을 가진 당신은 첫인상은 차가워 보이지만 묘한 매력을 풍겨 언제나 인기가 넘친다. 시크한 츤데레로 연인에게 끊임없이 설렘을 주는 당신은 고양이와 닮았다! 멍멍 월월월";
        break;
      case "사슴상":
        resultMessege = "온순하고 우아한 사슴상";
        resultMessegeColor = "#71CF4F";
        resultComment =
          "맑고 영롱한 분위기의 당신은 사슴처럼 차분한 성격의 소유자다. 초롱초롱한 눈망울이 당신의 가장 큰 트레이드마크며 따스하고 온순한 눈빛을 가져 사랑스러움을 항상 머금고 있다. ";
        break;
      case "토끼상":
        resultMessege = "상큼발랄한 매력의 토끼상";
        resultMessegeColor = "#E3AAC0";
        resultComment =
          "발랄하고 귀여운 당신은 주변 사람들에게 기쁨을 주는 행복 바이러스다! 호기심이 많아 활발하며 귀엽고 순수한 외모로 연인의 보호본능을 자극한다. ";
        break;
      case "꼬부기상":
        resultMessege = "싱글벙글 귀여운 꼬부기상";
        resultMessegeColor = "#0DAEDF";
        resultComment =
          "항상 맑은 미소를 가지고 있는 당신은 주변 사람들에게 항상 웃음을 주는 행복 바이러스다! 보기보다 섬세하며 다른 사람들의 마을을 먼저 헤아릴 줄 아는 진정한 하 몰라.. 꼬부기 닮아서 부럽당 ";
        break;
    }
    $(".result-messege").html(resultMessege);
    $(".result-messege").css("color", resultMessegeColor);
    $(".result-comment").html(resultComment);

    for (let i = 0; i < maxPredictions; i++) {
      const labelgraphContainer = document.createElement("div");
      const label = document.createElement("span");
      const graphContainerBox = document.createElement("div");
      const graph = document.createElement("div");
      const percent = document.createElement("div");

      labelgraphContainer.className = "labelgraph-container";
      label.className = "label";
      graphContainerBox.className = "graph-container-box";
      graph.className = "graph";
      percent.className = "percent";

      graphContainerBox.appendChild(graph);
      labelgraphContainer.appendChild(label);
      labelgraphContainer.appendChild(graphContainerBox);
      labelgraphContainer.appendChild(percent);
      labelContainer.appendChild(labelgraphContainer);

      const classPrediction = prediction[i].className;
      label.innerText = classPrediction;

      const classPredictionGraph = Math.ceil(
        prediction[i].probability.toFixed(2) * 100
      );
      percent.innerText = classPredictionGraph + "%";
      graph.style.width = classPredictionGraph + "%";

      if (prediction[i].className == "강아지상") {
        graphContainerBox.style.backgroundColor = "#CEDFE6";
        graph.style.backgroundColor = "#30839A";
      } else if (prediction[i].className == "고양이상") {
        graphContainerBox.style.backgroundColor = "#F4EAD4";
        graph.style.backgroundColor = "#F8B039";
      } else if (prediction[i].className == "토끼상") {
        graphContainerBox.style.backgroundColor = "#F5E4EF";
        graph.style.backgroundColor = "#E3AAC0";
      } else if (prediction[i].className == "사슴상") {
        graphContainerBox.style.backgroundColor = "#DBEDDA";
        graph.style.backgroundColor = "#71CF4F";
      } else if (prediction[i].className == "꼬부기상") {
        graphContainerBox.style.backgroundColor = "#CEE7F7";
        graph.style.backgroundColor = "#0DAEDF";
      }
    }
    $(".roding").hide();
  }
}

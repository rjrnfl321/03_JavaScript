const checkBtn = document.querySelector("#checkBtn"); // 적용 버튼

checkBtn.addEventListener("click", () => {

  // 너비
  const boxWidth1 = document.querySelector("#boxWidth1");
  // 높이
  const boxHeight1 = document.querySelector("#boxHeight1");
  // 글자크기
  const fs1 = document.querySelector("#fs1");
  // 굵기
  const fw1 = document.querySelector("[name=fw1]:checked");
  // 글자색
  const FontColor1 = document.querySelector("#FontColor1");
  // 배경색
  const BgColor1 = document.querySelector("#BgColor1");
  // 가로정렬
  const alignRow1 = document.querySelector("[name=align-row1]:checked");
  // 세로정렬 
  const alignCol1 = document.querySelector("[name=align-col1]:checked");
  // 출력 문자열
  const Content1 = document.querySelector("#content1");





  const box1 = document.querySelector("#box1");

  // 너비
  if (boxWidth1.value.trim().length > 0) {
    box1.style.width = boxWidth1.value + 'px';
  }
  // 높이
  if (boxHeight1.value.trim().length > 0) {
    box1.style.height = boxHeight1.value + 'px';
  }
  // 글자크기
  if (fs1.value.trim().length > 0) {
    box1.style.fontSize = fs1.value + 'px';
  }
  // 글자색
  if (FontColor1.value.trim().length > 0) {
    box1.style.color = FontColor1.value;
  }
  // 배경색
  if (BgColor1.value.trim().length > 0) {
    box1.style.backgroundColor = BgColor1.value;
  }
  // 출력할 문자열
  if (content1.value.trim().length > 0) {
    box1.innerText = content1.value;
  }




  // 굵기가 체크된 경우
  if (fw1 !== null) {
    box1.style.fontWeight1 = fw1.value;

  }

  // 가로정렬하기
  if (alignRow1 !== null) {
    box1.style.justifyContent = alignRow1.value;

  }

  // 세로정렬하기
  if (alignCol1 !== null) {
    box1.style.alignItems = alignCol1.value;

  }














})
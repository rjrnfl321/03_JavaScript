const changeBtn = document.querySelector("#changeBtn");
const boxBorder = document.querySelector(".box-border");

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const input4 = document.querySelector("#input4");
const input5 = document.querySelector("#input5");


const chattingInput = document.querySelector("#chattingInput");



changeBtn.addEventListener("click", function () {

  // 너비 //
  boxBorder.style.width = input1.value + "px";
  // 높이 // 
  boxBorder.style.height = input2.value + "px";
  // 글자 크기 //
  boxBorder.style.fontSize = input3.value + "px";
  // 굵기 //
  const checkBtn = document.querySelector("[name = weight]:checked");
  let op;
  if (checkBtn === null) op = "normal"; // 체크가 안되어 있으면 normal
  else op = checkBtn.value; // 체크된 값(normal 또는 bold)
  boxBorder.style.fontWeight = op;

  
  // 글자색 // 
  boxBorder.style.color = input4.value;
  // 배경색 // 
  boxBorder.style.backgroundColor = input5.value;

  // 가로 정렬 //

  // 문서내에서 HTML 속성중
  // name 속성값이 width인 요소들중에서 check된
  // 요소만 얻어오기 
  const row = document.querySelectorAll("[name = width]:checked");
  let wid;
  if (row === null) wid = "right";
  else wid = row.value;
  boxBorder.style.justifyContent = wid;


  // 세로 정렬 //

  // name 속성값이 colum1인 요소들중에서 check된
  // 요소만 얻어오기 
  // const colum = document.querySelectorAll("[name = colum1]:checked");
  // let kr;
  // if (colum === null) kr = "flex-end";
  // else kr = colum.value;
  // boxBorder.style.justifyContent = kr;



  // 출력 문자열 //
  boxBorder.innerHTML = chattingInput.value;




});

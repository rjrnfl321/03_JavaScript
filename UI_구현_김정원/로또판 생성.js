const createBtn = document.querySelector("#createBtn");
const lottoBoard = document.querySelector("#lottoBoard");



createBtn.addEventListener("click", () => {


for(let i= 1; i<=46; i++){
  const number = document.createElement("div");
  number.classList.add("number");
  number.textContent = [i];
  number.addEventListener("click", e => {

    const count = document.querySelectorAll(".number").length;
  })
  

}

})




//   for (let i = 1; i < 46; i++) {
//     const number = document.createElement("div");
//     number.classList.add("number");
//     number.textContent = i;
//     number.addEventListener("click", e =>{
    
//      const count = document.querySelectorAll(".number").length;
//      if(count <= 5  || e.targer.classList.contains("number")){
//       e.target.classList.toggle("number");
//      } 
//      else{
//       alert("6개 까지 선택할 수 있음");
//      }
//     });


//     lottoBoard.innerHTML = "";
//     lottoBoard.append(number);
//   }
// })
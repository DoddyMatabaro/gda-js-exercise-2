//  console.log(i);
var btnsPlus = document.querySelectorAll(".btn-plus");

btnsPlus.forEach(btnPlus =>{
    btnPlus.addEventListener("click", () =>{
        btnPlus.classList.toggle("active");
    })
});

console.log(btnsPlus);

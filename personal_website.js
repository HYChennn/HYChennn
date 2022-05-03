function claer(){
    item[0].classList.remove("d");
    item[1].classList.remove("d");
    item[2].classList.remove("d");
    item[3].classList.remove("d");
    item[4].classList.remove("d");
}

b1 = document.querySelector("#btn_1");
b2 = document.querySelector("#btn_2");
b3 = document.querySelector("#btn_3");
b4 = document.querySelector("#btn_4");
b5 = document.querySelector("#btn_5");

item = Array.from(document.querySelectorAll(".item"))

b1.addEventListener("click",(e)=>{
    e.preventDefault();
    claer();
    item[0].classList.add("d");
})
b2.addEventListener("click",(e)=>{
    e.preventDefault();
    claer();
    item[1].classList.add("d");
})
b3.addEventListener("click",(e)=>{
    e.preventDefault();
    claer();
    item[2].classList.add("d");
})
b4.addEventListener("click",(e)=>{
    e.preventDefault();
    claer();
    item[3].classList.add("d");
})
b5.addEventListener("click",(e)=>{
    e.preventDefault();
    claer();
    item[4].classList.add("d");
})
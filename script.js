const open1 = document.querySelector("#toggle-btn");

open1.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("expand");
});
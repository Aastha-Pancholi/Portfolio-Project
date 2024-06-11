const open1 = document.querySelector("#toggle-btn");

open1.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("expand");
});

const sidebar = document.querySelector("#sidebar");

document.onclick=function(e){
    if(!sidebar.contains(e.target)){
        document.querySelector("#sidebar").classList.remove("expand");
    }
}
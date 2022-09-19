const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;
let idz = 0;

function carrossel(){
    idx++;
    
    if(idx > img.length-1){
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
}
function carrosselback(){
    if(idx < img.length){
        idx--;
        if(idx<0){
           idx = img.length-1;
        }
    }
    imgs.style.transform = `translateX(${-idx*500}px)`
}

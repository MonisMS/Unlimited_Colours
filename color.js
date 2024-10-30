function unlim_colurs(){
    let r=parseInt((Math.random()*255)+1);
    let g=parseInt((Math.random()*255)+1);
    let b=parseInt((Math.random()*255)+1)
    return `rgb(${r},${g},${b})`;
}
let Interval;
document.querySelector('#start').addEventListener('click',function(e){
function change() {
document.querySelector('body').style.backgroundColor=unlim_colurs();
}
Interval=setInterval(change,3000)


}
);
document.querySelector('#stop').addEventListener('click',function(e){
    clearInterval(Interval)
})
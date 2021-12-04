let mobilebox=document.getElementById('mobile_box');
let toggleButton =document.getElementById('togglebutton');


togglebutton.addEventListener('click', function(){
    mobilebox.classList.toggle('mob-active');
})
toggleLogo.addEventListener('click', function(){
    mobilebox.classList.remove('mob-active');
})
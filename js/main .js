let mobilebox=document.getElementById('mobile_box');
let toggleButton =document.getElementById('togglebutton');
// let mobHidden=document.getElementById('mobHeader');

togglebutton.addEventListener('click', function(){
    mobilebox.classList.toggle('mob-active');
})
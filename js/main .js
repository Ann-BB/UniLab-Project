let mobilebox=document.getElementById('mobile_box');
let toggleButton =document.getElementById('togglebutton');
let toggleLogo =document.getElementById('toggle-Logo');

// let mobHidden=document.getElementById('mobHeader');

togglebutton.addEventListener('click', function(){
    mobilebox.classList.toggle('mob-active');
})
toggleLogo.addEventListener('click', function(){
    mobilebox.classList.remove('mob-active');
})
// scrolling navbar menu

let nav = document.querySelector('.navbar');
let itemsNav = document.querySelectorAll('.navbar ul li a');


nav.addEventListener('click', function(event){
    itemsNav.forEach(function(el){
        el.classList.remove('activeNav');
    })
    event.target.classList.add('activeNav');
})


//phone monitor on-off

let phoneV = document.querySelector('.phone-vertical');
let imageInsidePhoneVert = document.querySelector('.image__inside-v');
let phoneH = document.querySelector('.phone-horizontal');
let imageInsidePhoneHor = document.querySelector('.image__inside-h');

phoneV.addEventListener('click', function(event){
    imageInsidePhoneVert.classList.toggle('display-none');
})

phoneH.addEventListener('click', function(event){
    imageInsidePhoneHor.classList.toggle('display-none');
})


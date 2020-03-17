// scrolling navbar menu

let nav = document.querySelector('.navbar');
let itemsNav = document.querySelectorAll('.navbar ul li a');


nav.addEventListener('click', function(event){
    itemsNav.forEach(function(el){
        el.classList.remove('activeNav');
    })
    event.target.classList.add('activeNav');
})
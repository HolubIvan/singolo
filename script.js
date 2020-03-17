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




//active tags and photo moving

let tagsMenu = document.querySelector('.tags');
let tags = document.querySelectorAll('.tags li a');
let photosPortfolio = document.querySelector('.photos');
let photoPortfolio = document.querySelectorAll('.photos img');


tagsMenu.addEventListener('click', function(event){
    event.preventDefault();

    tags.forEach(function(e){
        e.classList.remove('activeTag');
    })
    event.target.classList.add('activeTag');

    let imageArr = [];
    photoPortfolio.forEach(function(el){
         imageArr.push(el)
    });
    imageArr.sort(function(){
        return 0.5 - Math.random();
    })
    photosPortfolio.innerHTML = '';
    imageArr.forEach(function(e){
        photosPortfolio.appendChild(e);
    })

})


//photo bordered

// .activePhoto 

photosPortfolio.addEventListener('click', function(event){
    
    photoPortfolio.forEach(function(el){
        el.classList.remove('activePhoto');
    })
    event.target.classList.add('activePhoto');
    if(photosPortfolio.classList.contains('activePhoto')){
        photosPortfolio.classList.remove('activePhoto')
    }
})
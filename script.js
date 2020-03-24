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



function screenOnOff(){
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
    
}

screenOnOff();





//slider for phones

let arrows = document.querySelectorAll('.arr');
let slider = document.querySelector('.slider');
let phoneContainer = document.querySelector('.phone-container');

const slidesPhone = {
  0: [`<div class="phone-vertical">
        <img class="shadow-v" src="./assets/shadow-v.png" alt="shadow of the phone">
        <img class="phone-v" src="./assets/phone-v.png" alt="vertical phone">
         <div class="image__inside-v"></div>
        </div>`,
      `<div class="phone-horizontal">
         <img class="shadow-h" src="./assets/shadow-h.png" alt="shadow of the phone">
         <img class="phone-h" src="./assets/phone-h.png" alt="horizontal phone">
        <div class="image__inside-h"></div>
       </div>`
    ],
  1: [`
        <img class="second-slide" src="assets/Slider.png" alt="slider">`]
};

const slideColor = {
    0 : "bg-red",
    1 : "bg-blue",
    "default": "bg-red"
}

let currentSlide = 0;
arrows.forEach(function(el){
    el.addEventListener('click', function(e){

        if(e.target.classList.contains('arr-left')){
            currentSlide--;
            
        } else if(e.target.classList.contains('arr-right')){
            currentSlide++;
            
        }
        if(currentSlide == Object.keys(slidesPhone).length){
            currentSlide = 0;
        } else if(currentSlide < 0){
            currentSlide = Object.keys(slidesPhone).length-1;
        }
        
        slider.classList.value = "slider";

        if(slideColor.hasOwnProperty(currentSlide)) {
            slider.classList.add(slideColor[currentSlide]);
          } else {
            slider.classList.add( slideColor["default"] );
          }

        phoneContainer.innerHTML = '';
        slidesPhone[currentSlide].forEach(function(e){
            phoneContainer.innerHTML += `\n${e}`;
        })
        screenOnOff();
    })
    
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


//form popup window

let popupWindow = document.querySelector('.window');
let popupButton = document.querySelector('.popup-button');
let submitFormButton = document.querySelector('.submit-button');
let inputName = document.querySelector('#user-name');
let inputMail = document.querySelector('#user-email');
let inputSubject = document.querySelector('#user-subject');
let inputDescription = document.querySelector('#user-text');
let windowSubject = document.querySelector('.window-subject');
let windowDescr = document.querySelector('.window-descr');

let isValid = false;

submitFormButton.addEventListener('click', function(event){
    event.preventDefault();
    
    if(inputName.checkValidity() == true){
        popupWindow.classList.toggle('window-hidden');

        if(inputSubject.value == ''){
            windowSubject.textContent = 'Без темы'
        } else {
            windowSubject.textContent = `Тема: ${inputSubject.value}`;
        }
    
        if(inputDescription.value == ''){
            windowDescr.textContent = 'Без описания'
        } else {
            windowDescr.textContent = `Описание: ${inputDescription.value}`;
        }
    
    } else if(inputName.checkValidity() == false){
        return false;
    }
})


popupButton.addEventListener('click', function(e){
    popupWindow.classList.toggle('window-hidden');
    inputName.value = '';
    inputMail.value = '';
    inputSubject.value = '';
    inputDescription.value = '';
})







//burger-menu working with media-queries


let checkbox = document.querySelector('.navigation__checkbox');
let navigation = document.querySelector('.navigation');
let ul = document.querySelector('.navbar ul');
let backgroundNav = document.querySelector('.background');


navigation.addEventListener('click', function(el){
    var ww = document.documentElement.clientWidth; 
    if(ww < 767){  
        if(checkbox.checked == true){
            ul.style.display = 'block'
            backgroundNav.style.display = '';
        } else if (checkbox.checked == false){
            ul.style.display = 'none'
        }
    }
})

function navBar(){
    var w = document.documentElement.clientWidth;   
    
    if(w > 767){
        ul.style.display = 'block'
        if(checkbox.checked == true){
            checkbox.checked = false;
        }
    }

    if(w < 767){
        ul.style.display = 'none'
    }
}

window.addEventListener('resize', navBar)





function change(){
    if(document.documentElement.clientWidth < 767){
        ul.addEventListener('click', function(){
            ul.style.display = 'none';
            backgroundNav.style.display = 'none';
            checkbox.checked = false;
        })
    }
}

change();

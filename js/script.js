

const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const indicator=document.querySelector(".indicator");
let index=0;

next.addEventListener("click",function(){
    prevSlide();
    updateCircleIndicator();
    resetTimer();
});

prev.addEventListener("click",function(){
    nextSlide();
    updateCircleIndicator();
    resetTimer();
});

//circulos indicadores

function circleIndicator(){
    for(let i=0; i< slides.length; i++){
        const div=document.createElement("div");
        div.innerHTML=i+1;
        div.setAttribute("onclick", "indicateSlide(this)")
        div.id=i;
        if(i==0){
            div.className="active";
        }
        indicator.appendChild(div);
    }

}

circleIndicator();

function indicateSlide(element){
    index=element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}

function updateCircleIndicator(){
    for(let i=0; i<indicator.children.length; i++){
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}

function prevSlide(){ 
    if(index==0){
        index=slides.length-1;
    }
    else{
        index--;
    }
    changeSlide();
}

function nextSlide(){
    if(index==slides.length-1){
        index=0;
    }
    else{
        index++;
    }
    changeSlide();
}

function changeSlide(){
    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove("active");
    }

    slides[index].classList.add("active");
}

function resetTimer(){
    clearInterval(timer);
    timer=setInterval(autoplay,4000);
}

function autoplay(){
    nextSlide();
    updateCircleIndicator();
}

let timer=setInterval(autoplay,4000);

   /* Image Slider - Swiper */
   var imageSlider = new Swiper('.image-slider', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    breakpoints: {
        // when window is <= 580px
        580: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window is <= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window is <= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window is <= 1200px
        1200: {
            slidesPerView: 4,
            spaceBetween: 20
        },

    }
});

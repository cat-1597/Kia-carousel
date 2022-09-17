/*
    Grabbing all carousel items and attaching button event listeners
    
    1) Grab all 'carousel-item' - hint: elements...by...class name! Store this value in a const called 'slides'

    2) Set a slide position of 0 (as that's what the starting index position will be when we grab all the carousel items - 
    remember that arrays start from 0 and not 1) - we want the slide position to always start at 0. 
    
    When a user goes to the next or previous slide, we will update this--the reason it's 0 and not one is 
    that we want to match the position in the 'slides' const that we stored above! As this is going to be changing, 
    what seems more appropriate, a let statement or a const?

    3) Store a const value of 'totalSlides' that is equal to the length of the slides

    4) Add event listeners to both buttons 'carousel-button-next' and 'carousel-button-prev' - seeing 
    as though we expect the user to click to change slide position, make sure we set the eventListener to 'click' 
    and the second arguments will be functions!
    5) Create two functions: moveToNextSlide and moveToPrevSlide - use both of these in action 4 as the 
    second argument on your 'addEventListener' - don't worry about these functions being empty, we will add to them in the upcoming screencasts
    6) Use console.log to validate that you have 3 'carousel-item' in your 'slides' const
*/

/*const slides = document.getElementsByClassName('carousel-item'); //Adding event listener to retrieve photos by class name

let slidePosition = 0; ////The starting point of the slide index at 0 //want it to change

const totalSlides = slides.length; // length of the slides

document.getElementById('carousel-button-prev').addEventListener("click", moveToNextSlide); //button for event listener

document.getElementById('carousel-button-next').addEventListener("click", moveToPrevSlide); //button for event listener

// function moveToNextSlide() {
  
    // if (slidePosition === totalSlides - 1) { /*1) Check if (slidePosition === totalSlides -1) (yes minus 1 because we start from 0 on 'slidePosition' - 
    // so if the slide is the last one (after a user has clicked through all the 
        // slides and then hits next again) we/ must reset the 'slidePosition' to 0, 
        // in turn taking them back to the first slide! */ 
        // slidePosition = 0; /*if slide position equals total slide, go back to zero*/
    // } else {
        // slidePosition ++; /*if NOT, then increment by 1*/
    // }
    // slides[slidePosition].classList.add("carousel-item-visible"); /*with the array slides[slidesPosition] if 0, 1 or 2 if we r on that slide we want 
    // to make it visible*/

        // }


// function moveToPrevSlide() {
    //console.log("move to prev slide");

//}

//console.log(totalSlides)


const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    
}
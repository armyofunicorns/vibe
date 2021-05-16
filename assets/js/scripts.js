// Mood choice array
// Array that stores markers and content 
let moodChoices = [
    [
        'Upset', 1, './assets/images/mood-1-v4.svg','--quinary-color'
    ],
    [
        'Sad', 2, './assets/images/mood-2-v4.svg','--quaternary-color'
    ],
    [
        'Content', 3, './assets/images/mood-3-v4.svg','--tertiary-color'
    ],
    [
        'Good', 4, './assets/images/mood-4-v4.svg',' --secondary-color'
    ],
    [
        'Amazing', 5, './assets/images/mood-5-v4.svg','--primary-color'
    ], 
]; 

// Control the background color of the page
function changePageBackColor(color){
    document.body.style.background = 'var(' + color + ')';
}

// Functions for controlling the modal 
function on() {
    document.getElementById("modalUi").style.display = "block";
}

function off() {
    document.getElementById("modalUi").style.display = "none";
}



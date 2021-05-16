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

// Sample Mood Object
let moodPostTest = [
    [
        '12:15PM','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et tortor vitae lectus porta sodales eu vitae felis. Pellentesque sit amet nunc pharetra, molestie ex scelerisque, pellentesque arcu. Nam eget mollis ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla varius, nisi sed auctor accumsan, ligula ante euismod erat, sit amet laoreet ante odio nec urna. Curabitur gravida magna purus, id rhoncus enim imperdiet vitae. Nam fermentum nunc eu lacinia posuere. Phasellus ornare ut ante ac aliquam. Fusce volutpat, mauris et semper viverra, enim dolor bibendum mi, quis sagittis risus diam sed justo. Nulla sollicitudin nulla vitae tempor luctus. Fusce mattis venenatis tincidunt. Etiam ullamcorper ligula vitae accumsan finibus. Etiam fringilla rhoncus tempus. Nulla non mi sit amet nunc ultrices efficitur nec ut diam.', 'https://res.cloudinary.com/daginzisw/image/upload/v1621201121/vibe/Screen_Shot_2021-05-15_at_4.08.18_PM_c0givs.png'
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



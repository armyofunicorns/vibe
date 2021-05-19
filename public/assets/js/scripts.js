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

async function submitJournal() {
    const fileList = document.getElementById("journal_img").files;
    let imgId = undefined;
    if (fileList.length > 0) {
        formData = new FormData();
        formData.append('photo', fileList[0]);
        // upload image
        const upload_resp = await fetch("/api/photos", {
            method: "post",
            body: formData,
        })
        if (upload_resp.ok) {
            const resp_body = await upload_resp.json();
            imgId = resp_body.photoId;
        }
    }
    const selectedMood = document.getElementById("mood_selector").value;
    const journalText = document.getElementById("journal_text").value;

    const date = moment().format("YYYY-MM-DD");
    const req_body = {
        photoID: imgId,
        moodID: parseInt(selectedMood),
        journalNote: journalText,
        date: "2021-05-17",
    }

    const resp = await fetch("/api/journals", {
        method: "post",
        body: JSON.stringify(req_body),
        headers: {"Content-Type": "application/json"},
    });

    if (resp.ok) {
        console.log(await resp.json());
    }
    off();
}

document.getElementById("datetime").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');



var isBlack = 0;
function changeBackground() {
  if (isBlack == 0) {
    var backgr = document.getElementById('bg').style="background-color:#52b0d6; color:white;";
    document.getElementById('selectMood').innerHTML="Select Your Mood COLOR";
    document.getElementById('selectMood').style="background-color:#464141;";
    isBlack=true;
    isBlack= 1;
  }

  else{
    var dftBg = document.getElementById('bg').style="color:white;";
    document.getElementById('selectMood').innerHTML="RESTORE TO DEFAULT BACKGROUND COLOR";
    document.getElementById('selectMood').style="background-color:black;";
    document.getElementById('centered').style="background-color:#464141;";
    isBlack=true;
    isBlack= 0;
  }
}

function theInputColor(myColor) {
  var trickBackground = document.getElementById('centered').style.background= myColor;
  var trickBackground = document.getElementById('theColor').innerHTML= myColor;
}
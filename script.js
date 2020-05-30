var counter = 15;

var downvot = false

var upvot = false

function upvote() {
  if (downvot === true) {
    counter  = counter + 2;
    upvot = true;
    downvot = false;
    document.getElementById("votes").innerHTML = counter + " votes";
  } else {
    if (upvote===false) {
     counter  = counter + 1;
     upvot = true;
     document.getElementById("votes").innerHTML = counter + " votes";
   } else {
     ccounter  = counter - 1;
     upvot = false;
     document.getElementById("votes").innerHTML = counter + " votes";
   }
}

function downvote() {
  if (upvot === ) {

  }
  if (downvot === false) {
    counter  = counter - 1;
    downvot = true;
    document.getElementById("votes").innerHTML = counter + " votes";
  } else {
    counter  = counter + 1;
    downvot = false;
    document.getElementById("votes").innerHTML = counter + " votes";
  }
}

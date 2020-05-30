var counter = 15;

var downvote = false

var upvote = false

function upvote() {
  if (false) {
    counter  = counter + 1;
    upvote = true
    document.getElementById("votes").innerHTML = counter + " votes";
  } else {
    counter  = counter - 1;
    upvote = false
    document.getElementById("votes").innerHTML = counter + " votes";
  }

 document.getElementById("votes").innerHTML = counter + " votes";
}

function downvote() {
 counter  = counter - 1;

 document.getElementById("votes").innerHTML = counter + " votes";
}

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let errorModal = document.getElementById("modal");
const hearts = document.querySelectorAll(".like-glyph");
// Your JavaScript code goes here!

document.addEventListener("click", (event) => {
  console.log(event.target);
  if(event.target.innerText === FULL_HEART) {
    console.log("FULLHEAART");
    event.target.innerText = EMPTY_HEART;
  } else if(event.target.innerText === EMPTY_HEART) {
    console.log("EMPTYHEART");
    event.target.innerText = FULL_HEART;
  } 

})
mimicServerCall()
  .then(() => {   // successful server call
    fillHearts()
    makeHeartsRed()  

  })
  .catch((error) => { // bad server call
    errorModal.classList.remove("hidden"); // shows error message
    errorModal.innerText = error;
    setTimeout(() => {
      errorModal.classList.add("hidden"); // shows error message
    },5000)

  });

  function makeHeartsRed() {
    hearts.forEach(element => (element.classList.add("activated-heart")));
  }

  function fillHearts(){
    hearts.forEach(element => (element.innerText = FULL_HEART));
  }



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {        
        reject("Random server error. Try again.");
      }
      else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

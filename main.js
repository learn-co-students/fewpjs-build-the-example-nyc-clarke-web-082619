// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("click", (event)=> {
  if (event.target.className === "like-glyph"){
    mimicServerCall().then((response)=> response.json).catch(error => {
      let modal = document.getElementById("modal")
      modal.classList.remove("hidden")
      document.getElementById("modal-message").innerText = error
      setTimeout(function(){
        modal.classList.add("hidden")
      }, 5000)
    })
    if(event.target.innerText === EMPTY_HEART){
      event.target.classList.add("activated-heart")
      event.target.innerText = FULL_HEART
      
    }
    else
    event.target.innerText = EMPTY_HEART
    event.target.classList.remove("activated-heart")
  }
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  document.getElementsByTagName('body')[0].addEventListener("click", function(){
    let classes = event.target.classList;
    let target = event.target;
    if (classes.contains('like-glyph')){
      mimicServerCall()
      .then(response => {
        console.log(response);
        if(target.classList.contains('activated-heart')){
          target.textContent = EMPTY_HEART;
          target.classList.remove('activated-heart');
        }
        else{
          target.textContent = FULL_HEART;
          target.classList.add('activated-heart')
        }
      })
      .catch(error => {
        let modal = document.getElementById('modal')
        let h2 = modal.childNodes[0];
        h2.textContent = error;
        modal.classList.remove('hidden');
        setTimeout(() => {modal.classList.add('hidden')}, 5000);
      })

    }

  })
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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

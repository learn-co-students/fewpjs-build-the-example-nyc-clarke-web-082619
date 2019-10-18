// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

modal.classList.add('hidden')

const likeButtons = document.getElementsByClassName("like-glyph")



document.addEventListener('click', event => {
    if (event.target.className === "like" && event.target.innerText.includes(EMPTY_HEART)) {
      mimicServerCall("bogusUrl")
      .then(function(serverMessage) {
          event.target.innerText = ''
          event.target.innerText = `Like! ${FULL_HEART}`
      })
      .catch(function(error) {
        modal.classList.remove('hidden')
      })
    }
    else if (event.target.className === "like" && event.target.innerText.includes(FULL_HEART)) {
      mimicServerCall("bogusUrl")
      .then(function(serverMessage) {
      event.target.innerText = ''
      event.target.innerText = `Like! ${EMPTY_HEART}`
    })
    .catch(function(error) {
      modal.classList.remove('hidden')
    })
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

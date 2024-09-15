// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorMessage = document.querySelector('#modal');
// Your JavaScript code goes here!

errorMessage.classList.add('hidden');

document.addEventListener('click', function(event){
  if (event.target.classList[0] == 'like-glyph'){
    let heart = event.target;
    console.log(heart);
    mimicServerCall().then(() => {
    if (heart.innerText == EMPTY_HEART){
      fillHeart(heart)
    } else {
      emptyHeart(heart)
    }
  })
  .catch((err) => {
    document.querySelector('#modal-message').innerText = err;
    errorMessage.classList = [];
    setTimeout(function(){errorMessage.classList.add('hidden')}, 5000)
  })
  }
})

function fillHeart(span){
  span.innerText = FULL_HEART;
  span.classList.add('activated-heart')
}

function emptyHeart(span){
  span.innerText = EMPTY_HEART;
  span.classList.remove('activated-heart')
}


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

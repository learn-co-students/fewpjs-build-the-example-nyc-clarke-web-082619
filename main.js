// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById('modal').classList.add('hidden');

document.addEventListener('DOMContentLoaded', function(){
  let likeGlyph = document.querySelector('.like-glyph');

  document.addEventListener('click', function(event){
    mimicServerCall()
    .catch(() => {
      document.getElementById('modal').setAttribute('class','')
      setTimeout(function(){document.getElementById('modal').setAttribute('class','hidden')}, 5000);
    })
    .then(() => { 
      if(event.target.className === 'like-glyph'){
        event.target.innerHTML = FULL_HEART;
        event.target.setAttribute('class','activated-heart');
      }
      else if(event.target.className === 'activated-heart'){
        event.target.innerHTML = EMPTY_HEART;
        event.target.setAttribute('class','like-glyph');
      }
    })  
  })
})

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

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');

// Your JavaScript code goes here!

document.addEventListener('click', function(){
  if (event.target.classList.contains('like-glyph') ){
    let curEvent = event.target;  
      // console.log('you are in event listener now');
      mimicServerCall()
      .then(function(){
        // console.log('in then of mimicservercal');
        if(curEvent.innerText === EMPTY_HEART){
          curEvent.innerText = FULL_HEART;
          curEvent.classList.add('activated-heart');
          console.log('like');
        }else if (curEvent.innerText === FULL_HEART){
          curEvent.innerText = EMPTY_HEART;
          curEvent.classList.remove('activated-heart');
          console.log("dislike");
        }
      })
      .catch((error)=> {
        modal.classList.remove('hidden');
        modalMessage.innerText = error;
        console.log(error);
        setTimeout(function(){
          modal.classList.add('hidden');
        }, 3000);
      })
  }
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

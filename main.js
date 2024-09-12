// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let  toggle = false

// Your JavaScript code goes here!

// document.getElementById('modal').style.display = 'none'

document.addEventListener('click', (event) => {
  console.log(event.target);
  if( event.target.className.includes("like-glyph")){
    console.log(mimicServerCall());
    mimicServerCall()
    .then(()=> {
      toggle = !toggle
      if(toggle){
        event.target.innerText = FULL_HEART;
        event.target.className += " activated-heart";
      }else{
        event.target.innerText = EMPTY_HEART;
        event.target.className = "like-glyph";
      }
      console.log("success")
    })
    .catch(()=> {
      document.getElementById("modal").className = "";
      setTimeout(()=>(document.getElementById("modal").className = "hidden"), 5000);
      console.log("error");
    });
    // toggle = !toggle;
    // if(toggle){
    //   event.target.innerText = FULL_HEART;
    // }
    // else{
    //   event.target.innerText = EMPTY_HEART;
    // }
  }
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

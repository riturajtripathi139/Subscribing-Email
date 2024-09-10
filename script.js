const scriptURL = "https://script.google.com/macros/s/AKfycbzvuYgTkgI3dVEBQ1npCPqvXAWOBtLLx9j7ZJediL8HAbwa6iKSNAmxreqxAU0z_-oh/exec";
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors', // Prevents CORS issues but limits response handling
    body: new FormData(form)
  })
  .then(() => {
    msg.innerHTML = "Thankyou For Subscribing"
    setTimeout(function(){
      msg.innerHTML = ""
    },5000)
    form.reset()
  })
  .catch(error => console.error('Error!', error.message));
});

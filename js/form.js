var form = document.getElementById("my-form");
        
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Gracias por contactarse!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = "Mail no valido!"
        } else {
          status.innerHTML = "Oops! Error"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! Error"
  });
}
form.addEventListener("submit", handleSubmit)
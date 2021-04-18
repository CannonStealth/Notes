const xhr = new XMLHttpRequest() // we create it
const url = 'https://api-to-call.com/endpoint' // this is the url
const data = JSON.stringify({id: '200'}); // we take this id

xhr.responseType = 'json'; // set it to json

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response
  
  }
} // event

xhr.open('POST', url) // open it
xhr.send(data) // we finish sending data

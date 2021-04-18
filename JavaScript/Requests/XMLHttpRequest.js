const xhr = new XMLHttpRequest() // we create it
xhr.responseType = 'json' // use json
const url = 'https://api-to-call.com/endpoint' // this will be the url

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) { // checks to see if the request has finished
 return xhr.response // it is so it will return the response
}
}

xhr.open('GET', url) // let's open it
xhr.send() 
// finish
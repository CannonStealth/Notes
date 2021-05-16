// before reading this file, please read fetch.js

// to make a POST request - or any other method,
// just specify the method in the fetch options object.
const res = await fetch("https://some-api.com/endpoint", {
    method: "POST",
    // you can add custom headers here too:
    headers: {
        "Content-Type": "application/json",
    },
    // same with a request body (it must be a string however)
    body: JSON.stringify({
        body: "This is a JSON request body",
    }),
});

const json = await res.json();

// other methods, such as PUT and DELETE will work too
// just specify that as the method instead.
// if no method is present, GET is assumed.

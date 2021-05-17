// a Promise is a holder for a value that will be known later
// you can create promises from the Promise constructor
// you can use their results with async/await or .then/.catch

// promises can be very useful to return values from callbacks
// here is an example of how you can promisify the browser geolocation API

function getLocation() {
    return new Promise((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(
            (pos) => resolve(pos),
            (err) => reject(err)
        );
    });
}

// async/await (good) syntax
try {
    const position = await getLocation();
    console.log(position);
} catch (err) {
    console.error(err);
}

// then/catch (bad) syntax
getLocation().then(console.log).catch(console.error);

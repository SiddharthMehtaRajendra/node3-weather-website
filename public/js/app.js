console.log("Client Side JS is loaded!")
fetch('/weather?address=New York').then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})

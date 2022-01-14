

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
    }

document.getElementById("fortuneButton").onclick = function (){
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
            const data = response.data;
            alert(data);
            console.log(data)
        })
}


document.getElementById("clickMe").onclick = function () {
    axios.get("http://localhost:4000/api/inspire/")
    .then(function (response) {
        const data = response.data
        alert(data);
        console.log(data)
    }) 
}

document.getElementById("chooseColor").onsubmit = function (){
    axios.get("http://localhost:4000/api/pickOne/")
        .then(function (response) {
            const data = response.data;
            alert(data);
            console.log(data)
        })
}

document.getElementById("sendMessage").onsubmit = function (){
    axios.get("http://localhost:4000/api/sendMessage/")
        .then(function (response) {
            const data = response.data;
            alert(data);
            console.log(data)
        })
}

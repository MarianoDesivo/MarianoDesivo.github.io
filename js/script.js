window.onload = function () {
    console.log("page loaded");
    randomizar();
}

function randomizar(){
    fetch('https://randomuser.me/api/')
    .then( res => res.json())
    .then( json => {
        console.log(json.results[0]);
        document.getElementById("nombre").innerHTML = json.results[0].name.first + " " + json.results[0].name.last;
        document.getElementById("telefono").innerHTML = json.results[0].cell;
        document.getElementById("email").innerHTML = json.results[0].email;
        document.getElementById("nacimiento").innerHTML = json.results[0].dob.date.slice(0,10);
        document.getElementById("foto").src = json.results[0].picture.medium;
    })
    .catch(e => {
        console.log(e);
    })
}
    

tries = 3;

const tryAnswer = () => {
    input = document.getElementById("pregunta").value
    if (tries == 0) {
        alert("No te quedan mas intentos")
    }else if (input == 256) {
        alert("Respuesta correcta! Felicidades")
    }else {
        if(tries > 2) {
            if(input == "256"){
                alert("Respuesta correcta. Felicidades")
            }
        } else if (tries > 1){
            document.getElementById("clue").innerText = `Es mas que 128`
        } else if (tries == 0) {
            alert("Ya no te quedan mas intentos")
        }
        input = document.getElementById("pregunta").value = "";
        tries --
        document.getElementById("tryQuantity").innerText = `Te quedan ${tries} intentos`
    }
}
const message = document.querySelector("p");
function startMeme(){
    let userName = document.querySelector("input")
    userName = userName.value.toUpperCase();
    if (["VICTOR", "VITIN", "VT"].includes(userName)){
        message.textContent = "Vitinho viado do caralho"
    }if (["LC", "LUCAS", "SWIFT"].includes(userName)){
        message.textContent = "Vai sentar no ferrão grosso vai."
    }if (["GOZINHA", "GUIZINHO", "GUILHERME"].includes(userName)){
        message.textContent = "Viado vai pra puta que te pariu."
    }if (["TOM", "TOMÉ", "TOME", "CAUÃ TOMÉ"].includes(userName)){
        message.textContent = "Tu é viado de verdade mrm, sai fora"
    }if (["JÃO", "JAO", "JL"].includes(userName)){
        message.textContent = "GOSTOSO, QUE ISSO, ME COME, ME COME"
    }if (["KAUÃ", "KAUA", "RUAN"].includes(userName)){
        message.textContent = "O mais viado do 9° A"
    }if (["CL", "CELINO"].includes(userName)){
        message.textContent = "chegou a titanoboa, já vai quebrar a tela"
    }if (["CAUA", "CAUÃ", "VIADO"].includes(userName)){
        message.textContent = "É EU É EU É EUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU"
    }
}
addEventListener("keydown", (e) =>{
    if ((e.key) === "Enter"){
            startMeme();
    }
})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = 0;
            tela = document.querySelector('#inicial');
            tela.style.display = "none";            
        }
    }, 1000);
}

window.onload = function () {
    var duration = 60 * 0.1; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};

/*Programação do Botões*/

var numero = "";

function buttonB1(){
    numero = document.getElementById("tVoto").value;
    if(numero.length < 2){
        document.getElementById("tVoto").value += "1";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }
    }
}

function buttonB2(){
    numero = document.getElementById("tVoto").value;
    if(numero.length < 2){
        document.getElementById("tVoto").value += "2";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }        
    }
}

function buttonB3(){
    numero = document.getElementById("tVoto").value;
    if(numero.length < 2){
        document.getElementById("tVoto").value += "3";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }        
    }
}

function buttonB4(){
    numero = document.getElementById("tVoto").value;
    if(numero.length < 2){
        document.getElementById("tVoto").value += "4";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }        
    }
}

function buttonB5(){
    numero = document.getElementById("tVoto").value;
    if(numero.length < 2){
        document.getElementById("tVoto").value += "5";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }        
    }
}

function buttonB6(){
    numero = document.getElementById("tVoto").value;
    if(numero.length < 2){
        document.getElementById("tVoto").value += "6";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }        
    }
}


function buttonB7(){
    numero = document.getElementById("tVoto").value;
    if(numero.length < 2){
        document.getElementById("tVoto").value += "7";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }        
    }
}

function buttonB8(){
    numero = document.getElementById("tVoto").value;
    if(numero.length < 2){
        document.getElementById("tVoto").value += "8";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }        
    }
}

function buttonB9(){
    numero = document.getElementById("tVoto").value;
    if(numero.length < 2){
        document.getElementById("tVoto").value += "9";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }        
    }
}

function buttonB0(){
    numero = document.getElementById("tVoto").value;
    if(numero.length < 2){
        document.getElementById("tVoto").value += "0";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if(document.getElementById("tVoto").value.length == 2){
            numero = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(numero));
        }        
    }
}

function btnCorrigir(){
    document.getElementById("tVoto").value = "";
    numero = "";
    document.getElementById("imgCand").src = "#";
    document.getElementById("nomeCand").innerHTML = "Candidato:";
    document.getElementById("partido").innerHTML = "Partido:";
}

var voto = {
    cand1: 0,
    cand2: 0,
    cand3: 0,
    cand4: 0,
    cand5: 0,
    branco: 0,
    nulo: 0
}

function vBranco(){
    numero = document.getElementById("tVoto").value;
    if(numero.length == 0){
        numero = 0;
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        mostrarImagem(numero);
    }else{
        alert("Corrija o Seu Voto\nClicando no Botão Corrigir"+
              "Depois Clique no Branco Para Votar Em Branco");
    }
}

//colocar imagem

function mostrarImagem(vNumero){
    switch(vNumero){
        case 11:{
            document.getElementById("imgCand").src = 
                     "img/reginao.jpg";
            document.getElementById("nomeCand").innerHTML = 
                     "Candidato: Reginão Bocão";
            document.getElementById("partido").innerHTML = 
                     "Partido: Partido dos Perdidos";
            break;
        }
        case 26:{
            document.getElementById("imgCand").src = 
                     "img/japonesdaorta.jpg";
            document.getElementById("nomeCand").innerHTML = 
                     "Candidato: Japonês da Orta";
            document.getElementById("partido").innerHTML = 
                     "Partido: Partido dos Olhos Fechados";
            break;
        }        
        case 35:{
            document.getElementById("imgCand").src = 
                     "img/joaocaminhao.jpeg";
            document.getElementById("nomeCand").innerHTML = 
                     "Candidato: João do Caminhão";
            document.getElementById("partido").innerHTML = 
                     "Partido: Partido dos Pé na Estrada";
            break;
        }        
        case 41:{
            document.getElementById("imgCand").src = 
                     "img/paulaopaulada.jpg";
            document.getElementById("nomeCand").innerHTML = 
                     "Candidato: Paulão Paulada";
            document.getElementById("partido").innerHTML = 
                     "Partido: Partido dos Quebrados";
            break;
        }        
        case 61:{
            document.getElementById("imgCand").src = 
                     "img/zedacurva.jpeg";
            document.getElementById("nomeCand").innerHTML = 
                     "Candidato: Zé da Curva";
            document.getElementById("partido").innerHTML = 
                     "Partido: Partido dos Pra Lá e Pra Cá";
            break;
        }        
        case 0:{
            document.getElementById("imgCand").src = 
                     "img/branco.jpg";
            document.getElementById("nomeCand").innerHTML = 
                     "Candidato: Voto Branco";
            document.getElementById("partido").innerHTML = 
                     "Partido: Voto Branco";
            break;
        }        
        default:{
            document.getElementById("imgCand").src = 
                     "img/votonulo.jpg";
            document.getElementById("nomeCand").innerHTML = 
                     "Candidato: Voto Nulo";
            document.getElementById("partido").innerHTML = 
                     "Partido: Voto Nulo";
            break;
        }        
    }
}

//calvinho do core

function btnConfirmar(){

}
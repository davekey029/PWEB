var palavras = ['violet', 'totoro', 'arriety', 'howl', 'mononoke', 'ashitaka'];
var palavraSorteada;
var palavraSecretaTamanho;
var letraTentada = [];
var letraAcertada = [];
var lista = [];
var tentativas = 6;
var cont;
function jogar(){
    sortear();
    palavraNaTela();
    cont =1;
}

function verificar(){
    if (cont==1){
        verificarletra();
        atualizar();
    }else{
        alert("Inicie o jogo primeiro!")
    }
    
}

// ----------------------

function sortear(){
    palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
    console.log(palavraSorteada);
}

function palavraNaTela(){
    var palavraSecreta = '';

    palavraSecretaTamanho = palavraSorteada.length;
    //console.log(palavraSecretaTamanho)
    for (i = 0; i < palavraSorteada.length; i++) {
        palavraSecreta = palavraSecreta+"_";
    }
    var x = document.getElementById("palavra");
    x.innerText = palavraSecreta;
}

function verificarletra(){
    var letra = document.getElementById("letraTentada").value;
    letraTentada.push(letra);
    console.log(letraTentada);
}

function atualizar() {
    for (i = 0; i < letraTentada.length; i++) {  
        var y = document.getElementById("letrasUsadas")
        y.innerText = letraTentada[i];
    }
    
}
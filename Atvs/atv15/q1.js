var res, c1, c2;

function somar(){
    
    c1 = parseInt(document.getElementById("campo1").value);
    c2 = parseInt(document.getElementById("campo2").value);

    res = c1+c2;
    var x = document.getElementById("resultado"); 
    x.innerText = res;
}

function subtrair(){
    c1 = parseInt(document.getElementById("campo1").value);
    c2 = parseInt(document.getElementById("campo2").value);

    res = c1-c2;
    var x = document.getElementById("resultado"); 
    x.innerText = res;
}

function multiplicar(){
    c1 = parseInt(document.getElementById("campo1").value);
    c2 = parseInt(document.getElementById("campo2").value);

    res = c1*c2;
    var x = document.getElementById("resultado"); 
    x.innerText = res;
}

function dividir(){
    c1 = parseInt(document.getElementById("campo1").value);
    c2 = parseInt(document.getElementById("campo2").value);

    res = c1/c2;
    var x = document.getElementById("resultado"); 
    x.innerText = res;
}
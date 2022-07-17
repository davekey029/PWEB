var nome1 = prompt("primeiro nome: ");
var nome2 = prompt("segundo nome: ");
$(function(){
    var nome = nome1+" "+nome2;
    document.getElementsByClassName('p')[0].setAttribute("style","width:"+nome);
 });
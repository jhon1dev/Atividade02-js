function exibirInfos(){
  var nome = document.getElementById("nome").value;
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;
  var imc = calcularImc(peso, altura).toFixed(2);
  var outPutText = "Olá, " + nome +"\nSeu IMC é de: " + imc
  
  document.getElementById("output").value = outPutText;
}

function calcularImc(peso, altura){
return peso / (altura * altura);
}
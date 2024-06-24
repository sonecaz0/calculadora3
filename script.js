function soma(a, b) {
   return a + b;
}

// Função para ser chamada ao clicar no botão "Somar"
function somando() {
   // Obtém os valores dos campos de entrada
   let  num1 = parseFloat(document.getElementById('n1').value);
   let num2 = parseFloat(document.getElementById('n2').value);
   
   // Calcula a soma usando a função 'soma'
   let resultado = soma(num1, num2);

   // Exibe o resultado na página HTML
   document.getElementById('receptor').innerHTML = 'Resultado da soma: ' + resultado;
}

function sub(a, b) {
   return a - b;
}

// Função para ser chamada ao clicar no botão "Somar"
function subtraindo() {
   // Obtém os valores dos campos de entrada
   let  num1 = parseFloat(document.getElementById('n1').value);
   let num2 = parseFloat(document.getElementById('n2').value);
   
   // Calcula a soma usando a função 'soma'
   let resultado = sub(num1, num2);

   // Exibe o resultado na página HTML
   document.getElementById('receptor').innerHTML = 'Resultado da soma: ' + resultado;
}

function mult(a, b) {
   return a * b;
}

// Função para ser chamada ao clicar no botão "Somar"
function multiplicando() {
   // Obtém os valores dos campos de entrada
   let  num1 = parseFloat(document.getElementById('n1').value);
   let num2 = parseFloat(document.getElementById('n2').value);
   
   // Calcula a soma usando a função 'soma'
   let resultado = mult(num1, num2);

   // Exibe o resultado na página HTML
   document.getElementById('receptor').innerHTML = 'Resultado da soma: ' + resultado;
}

function div(a, b) {
   return a / b;
}

// Função para ser chamada ao clicar no botão "Somar"
function dividindo() {
   // Obtém os valores dos campos de entrada
   let  num1 = parseFloat(document.getElementById('n1').value);
   let num2 = parseFloat(document.getElementById('n2').value);
   
   // Calcula a soma usando a função 'soma'
   let resultado = div(num1, num2);

   // Exibe o resultado na página HTML
   document.getElementById('receptor').innerHTML = 'Resultado da soma: ' + resultado;
}




 
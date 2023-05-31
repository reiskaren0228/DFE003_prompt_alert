function resultado(){

const numero = document.getElementById("input__num__digitado").value;

if(numero%2==0) {
    const texto =`O número ${numero} é par. O ${numero} x 2 é: ${numero*2}`;
    document.getElementById("resultado_par_impar").innerHTML = texto;
       
}else {
    const texto =`O número ${numero} é impar. O ${numero} x 3 é: ${numero*3}`;
    document.getElementById("resultado_par_impar").innerHTML = texto;
    
}

const formulario = document.getElementById("section__formulario__par_impar");
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        })

}

function valor__evento(){
const valorJantar = document.getElementById("input__valor_jantar");
const taxaGarcon = document.getElementById("input__num__taxa");

const valorTotal = parseInt(valorJantar.value) + (parseInt((parseInt(taxaGarcon.value) / 100)* parseInt(valorJantar.value)));

const texto = `O valor do jantar é R$ ${valorJantar.value} reais, e o valor total da conta a ser pago com os 10% da taxa de atendimento do garçom é R$ ${valorTotal} reais.`; 

document.getElementById("resultado__jantar").innerHTML= texto;

const formulario = document.getElementById("section__formulario__jantar");
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        })

}


function valor__pizzaria() {

    const valorConta = document.getElementById("input__valor_consumo");
    const qtdPessoa = document.getElementById("qtd__num__pessoas");
    const valorTotalPessoa = parseInt(valorConta.value)/parseInt(qtdPessoa.value);
    
    const texto = `O valor a ser pago por pessoa será de R$ ${valorTotalPessoa} reais.`;
  
    document.getElementById("valorTotal").innerHTML= texto;
 
    const formulario = document.getElementById("section__formulario__evento");
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        })

}



   


/*- Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.


~~~javascript

  Entrada de dados: ler um número.
  Processamento: calcular o dobro.
  Saída: informar o resultado.

~~~*/
let num = prompt("Digite um número: ");

const numero = num * 2;

alert("O dobro do número " + num + " é " + numero)

/*- Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom. 

~~~javascript

  Entrada de dados: ler o valor da conta.
  Processamento: calcular junto com o valor do custo do garçom.
  Saída: informar o resultado.

~~~*/

let valorJantar = parseFloat(prompt("Informe o valor do jantar: R$ "));
let taxaGarcon = parseFloat(prompt("Digite qual a taxa de serviço do garçon em %: "));
let valorTotal = valorJantar + ((taxaGarcon / 100)*valorJantar);


alert("O valor do jantar é R$ " + valorJantar + " reais, e o valor total da conta a ser pago com os 10% da taxa de atendimento do garçom é R$ " + valorTotal + " reais.")


/*- Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente. 

~~~javascript

  Entrada de dados: ler o valor da conta e a quantidade de clientes.
  Processamento: calcular o valor a ser pago por cliente.
  Saída: informar o resultado.

~~~*/

let valorConta = parseFloat(prompt("Informe o valor total da conta do consumo na pizzaria: R$ "));
let qtdPessoa = parseInt(prompt("Informe a quantidade de pessoa que irão dividir a conta: "));
const valorTotalPessoa = valorConta / qtdPessoa;

alert(" O valor a ser pago por pessoa será de R$ " + valorTotalPessoa + " reais.")

/* Desafios para fortalecer alguns conceitos, entre eles:

Variáveis;
Condicionais;
Operadores.
Cálculo de IMC

Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
Fórmula imc = peso / (altura * altura);
Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa */

//Resposta:

const nome = 'Diorge';
const peso = 94;
const altura = 1.82;
const sexo = 'Masculino';

const imc = peso / (altura*altura);

console.log(imc)
if (imc >= 30){
    console.log(`${nome}, você está acima do peso`)
} else {(imc < 29.9)
    console.log(`${nome}, você não está acima do peso`)
}

/* 
Cálculo de aposentadoria
Crie um programa para calcular a aposentadoria de uma pessoa.

Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta
 */

/* Baseado nos valores inseridos utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar
e no fim imprima uma mensagem em tela.

O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;



Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos
enquanto a mulher precisa ter no mínimo 85 anos na soma;

Com base nas regras acima imprima na tela as mensagens:

SE a pessoa estiver aposentada: Nome, você pode se aposentar!;
SE a pessoa NÃO estiver aposentada: Nome, você ainda não pode se aposentar!; */

//Resposta:

    const nome = 'Diorge'
    const sexo = 'M'
    const idade = 28
    const contribuicao = 7

    const soma = idade + contribuicao

    const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && soma >= 95
    const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && soma >= 85

    if ( homemPodeAposentar || mulherPodeAposentar) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você não pode se aposentar!`)
    }
    
    //Desafios finalizados.


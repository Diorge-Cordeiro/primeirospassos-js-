/*

Criar um programa que armazena dados da empresa Rockeseat dentro de um objeto chamado empresa.
Utilizando o formato de template strings, imprimir em tela o nome da empresa e seu endereço.

*/


const usuario = {
    empresa: {
        nome: 'Rocketseat',
        cor: 'Roxo',
        Foco: 'Programação',
        endereco: {
            rua: 'Rua Guilherme Gembala',
            numero: 260
        }
    }
}

console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`)



/* 

Criar um programa para armazenar dados de um programdor como nome, idade, e tecnologias que trabalha.
Armazenar essas tecnologias nome e especialidade em um Array.
Imprimir em tela o nome e especialidade da terceira tecnologia que o usuário utiliza.
 
*/

const programador = {
    nome: 'Diorge',
    idade: 28,
    tecnologias:  [
     {
         nome: 'C++',
         especialidade: 'Desktop'
     },
     {
         nome: 'Python',
         especialidade: 'Data Science'
     },
     {
         nome: 'Javascript',
         especialidade: 'Web/Mobile'
     }
 ]
}

console.log(`O programador ${programador.nome} tem ${programador.idade} anos e utiliza a tecnologia ${programador.tecnologias[2].nome} com especialidade em ${programador.tecnologias[2].especialidade}`)
 

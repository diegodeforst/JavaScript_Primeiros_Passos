//Conhecendo como declara variavél em JavaScript

let nome = 'Diego';
let idade = 34;
let altura = 1.80;
let endereco = 'Rua Agenor Gomes';

console.log(nome); // De todas as strings, estou executando somente a nome //

//Array
let familia = ['Diego',34,1.80,'Rua Agenor Gomes'];
console.log(familia[3]); //De toda a array, estou executando a de posição 3, como começa a contar o 0, o executavél está sendo 'Rua Agenor Gomes' //

let animal = "exemplo 1 cão";
function resetAnimal(quantidade, pet) //declarei que a quantidade e pet são variaveis distintas //
{

    animal = quantidade + ' ' + pet;

};
console.log (animal); // Irá trazer a variavél da let animal "1 cão" //
resetAnimal(2,"gatos"); // reatribui o valor co ma função resetAnimal //
console.log (animal); // Irá trazer a nova declaração "2, 'gatos'" //

// Podemos fazer uma função que faz calculos //
function MultiplicarPorDois(valor)
{
    return valor*2;
};
let resultado = MultiplicarPorDois(5); //determinei que o valor é 5 e a função multiplicou por 2 // 
console.log(resultado);
 let diadasemana = prompt("Qual o dia da semana?");
 if (diadasemana == "Sabado"){
    alert("Bom final de semana!");
 } else if (diadasemana == "Domingo"){
    alert("Bom final de semana!");
 } else{
    alert("Boa semana!");
 }

 //Exercício 2
 let Numero = prompt("Digite um número: ");
 if (Numero > 0) {
    alert(`O número ${Número} é positivo`);
    } else if (Número < 0){
        alert(`O número ${Número} é negativo`);
    } else {
        alert(`O número ${Número} é zero`);
    }


 //Exercício 3 
let Pontuacao = prompt("Digite a pontuação do jogador: ");
if (Pontuacao >= 100){
    alert("Parabens, você venceu!");
} else {
    alert("Tente outra vez.");
}
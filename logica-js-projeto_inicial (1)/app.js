alert('Bem vindo ao jogo do numero secreto')
let numeroMaximo = 5000; 
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 0;


while (chute!= numeroSecreto){
    chute = prompt("Digite um numero de 1 a ${numeroMaximo} " );

            if (chute == numeroSecreto){
                break;
            alert(`Voce acertou! O numero secreto é ${numeroSecreto}`);
            } else {
                if (chute > numeroSecreto){
                alert(`O número secreto é menor que ${chute}`);
            } else {
                alert(`O número secreto é maior que ${chute}`);     
            }
        }
    tentativas++;    
}

 let PalavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
  alert (´Você acertou! o número secreto é ${numeroSecreto} com total de ${PalavraTentativa}´);

//if (tentativas > 1){
    //alert(`Voce acertou! O numero secreto é ${numeroSecreto} com total de ${tentativas} tentativas`);
//} else {
   //alert(`Voce acertou! O numero secreto é ${numeroSecreto} com total de ${tentativas} tentativa`);
//}


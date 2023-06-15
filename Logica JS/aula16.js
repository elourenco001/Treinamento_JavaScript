
var n1 = parseFloat(prompt('Digite um valor: '));
var n2 = parseFloat(prompt('Digite um outro valor: '));

if (n1 == n2){
    alert('Empate');
    
}else{
    var n3 = parseInt(Math.random() * 2);

    if (n3 === 0){
        if(n1 < n2){
            alert('Ganhour o jogador 1');
        }else{
            alert('Ganhou o jogador 2');
        }

    }else{
        if(n1 > n2){
            alert('Ganhou o jogador 1');
        }else{
            alert('Ganhou o jogador 2');
        }
    }
}


var n1 = parseFloat(prompt('Digite sua primeira nota: '));
var n2 = parseFloat(prompt('Digite sua segunda nota: '));
var media = (n1 + n2)/2;

if(media > 5){
    alert('Parabéns. Voce foi aprovado com media '+media);

}else{
    alert('Infelizmente voce nao alcancou a Media 5. Sua media foi: '+media);
}

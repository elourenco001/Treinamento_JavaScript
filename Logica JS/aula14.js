
var n1 = prompt('Digite um valor: ');
n1 = parseFloat(n1);
var n2 = prompt('Digite outro valor: ');
n2 = parseFloat(n2)

var media = (n1 + n2)/2;

if (media > 5){
   alert('Media '+media+' é maior que 5');

}else{
    alert('Media '+media+ ' é menor que 5');
}

//alert(media > 5)
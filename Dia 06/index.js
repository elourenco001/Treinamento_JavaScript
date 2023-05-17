

const colors = ['green', 'yellow', 'purple', 'blue', 'red']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')


btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor] // Inserir a cor no fundo da tela
    color.textContent = colors[randomColor]

})
//Gerar numeros Randomicos
function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}
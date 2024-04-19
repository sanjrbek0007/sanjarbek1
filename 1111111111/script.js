let red = document.getElementById('red')
let orange = document.getElementById('orange')
let black = document.getElementById('black')

let btn = document.querySelector('button')

red.addEventListener('click',() => {
    btn.style.backgroundColor='red'
}) 
orange.addEventListener('click',() => {
    btn.style.backgroundColor='orange'
}) 
black.addEventListener('click',() => {
    btn.style.backgroundColor='black'
}) 
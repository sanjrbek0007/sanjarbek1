let red = document.getElementById('red')
let orange = document.getElementById('orange')
let black = document.getElementById('black')
let img = document.getElementsByTagName('img')[0]

let btn = document.querySelector('button')
let btnHover =document.getElementsByTagName('button:hover') 

red.addEventListener('click',() => {
    btn.style.backgroundColor='red'
    img.setAttribute('src', "/image2 (2).png")
}) 
orange.addEventListener('click',() => {
    btn.style.backgroundColor='orange'
    img.setAttribute('src', "/image3 (2).png")

}) 
black.addEventListener('click',() => {
    btn.style.backgroundColor='black'
    img.setAttribute('src', "/pngwing (2).png")

}) 

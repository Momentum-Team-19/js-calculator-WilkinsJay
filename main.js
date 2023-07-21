console.log('connected')

let boxes = document.querySelectorAll('.boxes')
console.log(boxes)



// a variable is like a nickname, a shorter way to refer to a CSSMathValue
let shaq = "Shaquille O'Neal"
let mamba = 'Kobe Bryant'

console.log(mamba)
// this would show 'Kobe Bryant' in the console

let display = document.querySelector('#display')
// get the part of the html that has the id 'display'

console.log(display)

let equals = document.querySelector('#equals')
equals.addEventListener('click', () => {
    let answer = eval(display.innerText)
    console.log(answer)
    display.innerText = answer
}) 

for (let box of boxes) {
    box.addEventListener('click', () => {
        console.log(box.innerText)
        let text = document.createTextNode(box.innerText)
        display.appendChild(text)
    })
}

let clear = document.querySelector('#clear')
clear.addEventListener('click', () => {
    display.innerText = ''
})
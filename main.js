console.log('connected')

let boxes = document.querySelectorAll('.boxes')
console.log(boxes)

let display = document.querySelector('#display')
console.log(display)

for (let box of boxes) {
    box.addEventListener('click', () => {
        console.log(box.innerText)
        let text = document.createTextNode(box.innerText)
        display.appendChild(text)
    })
}

const leftBtn = document.querySelector('#leftArrow')
const rightBtn = document.querySelector('#rightArrow')
const items = document.querySelector('#item-switcher')

let currentRight = 0
let currentLeft = 0
rightBtn.addEventListener("click", e => {
    e.preventDefault()
    currentRight += 915;
    items.style.right = '${currentRight}px';
})

leftBtn.addEventListener("click", e => {
    e.preventDefault()
    currentLeft -= 915
    
    items.style.left = '${currentLeft}px';
})
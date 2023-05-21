const leftBtn = document.querySelector("#leftArrow");
const rightBtn = document.querySelector("#rightArrow");
const items = document.querySelector("#item-switcher");

let currentRight = 0

rightBtn.addEventListener("click", e => {
    e.preventDefault()
    currentRight += 864;
    items.style.right = `${currentRight}px`;
})

leftBtn.addEventListener("click", e => {
    e.preventDefault()
    currentRight -= 864
    
    items.style.right = `-${currentRight}px`;
})
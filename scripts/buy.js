/* Reponsive Menu */

const hamb = document.querySelector('.hamburger')
const menu = document.querySelector('.responsive-menu-none')

hamb.addEventListener(
    'click',
    function () {
        menu.classList.toggle('responsive-menu-none')
        menu.classList.toggle('responsive-menu-open')
    }
)



//buy button

const $appleCare = document.querySelector('.infos-care')
const $price = document.querySelector('.infos-price-full')
let isAdded = true

$appleCare.addEventListener('click', () => {
    $appleCare.classList.toggle('enabled')
    if (isAdded) {
        $price.innerHTML = '394,00 €'
        isAdded = false
    } else {
        $price.innerHTML = '349,00 €'
        isAdded = true
    }
})


//slider

const pictures = document.querySelectorAll(".sliderContainer img")
const sliderContainer = document.querySelector(".sliderContainer")
const dots = document.querySelectorAll("ul.dots li")

let time = 3000,
    step = -420,
    currentPicture = 0,
    slide

function slideInterval() {
    slide = setInterval(() => {
        currentPicture = (currentPicture + 1) % pictures.length
        display(currentPicture)
    }, time)
}

slideInterval()

sliderContainer.addEventListener("mouseover", () => {
    clearInterval(slide)
})
sliderContainer.addEventListener("mouseleave", () => {
    slideInterval()
})

function display(currentPos) {
    sliderContainer.style.left = currentPos * step + "px"
    document.querySelector('a.current').classList.remove('current')
    dots[currentPos].querySelector('a').classList.add('current')
}
for (let i = 0; i < dots.length; i++) {
    dots[i].querySelector("a").addEventListener("click", (e) => {
        e.preventDefault()
        currentPicture = i
        display(currentPicture)
    })

}

//color change button

const colorButtons = [...document.querySelectorAll('button.color-item')]
const sliderImages = [...document.querySelectorAll('.sliderContainer img')]
let color
for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', () => {
        if (i == 0) {
            //white
            color = 'white'
        } else {
            //black
            color = 'black'
        }
        for (let j = 0; j < sliderImages.length; j++) {
            sliderImages[j].src = `../images/homepod-${color}-${j}.png`
        }
    })
}

const colorItem = [...document.querySelectorAll('.color-item')]
const selectorChoice = document.querySelector('.selector-choice')
let isAdd = true

for (let k = 0; k <= colorItem.length; k++) {
    colorItem[k].addEventListener('click', () => {
        let selected = document.querySelector('.selector-choice')
        if (selected != null) {
            selected.classList.remove('selector-choice')
        }
        colorItem[k].classList.add('selector-choice')
    })
}
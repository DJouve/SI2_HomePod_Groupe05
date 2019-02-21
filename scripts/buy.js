//buy button

const $appleCare = document.querySelector('.infos-care')
const $price = document.querySelector('.infos-price-full')
let isAdded = true

$appleCare.addEventListener('click', () => {
    $appleCare.classList.toggle('enabled')
    if(isAdded) {
        $price.innerHTML = '394,00 €'
        isAdded = false
    }
    else {
        $price.innerHTML = '349,00 €'
        isAdded = true
    }
})

//slider

const pictures 		  = document.querySelectorAll(".sliderContainer img")
const sliderContainer = document.querySelector(".sliderContainer")
const dots			  = document.querySelectorAll("ul.dots li")

let time = 3000,
	step = -420,
	currentPicture = 0,
	slide

function slideInterval(){
	slide = setInterval(() =>{
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

function display (currentPos){
	sliderContainer.style.left = currentPos * step + "px"
  document.querySelector('a.current').classList.remove('current')
	dots[currentPos].querySelector('a').classList.add('current')
}
for(let i = 0; i < dots.length; i++){
	dots[i].querySelector("a").addEventListener("click", (e) => {
		e.preventDefault()
		currentPicture = i
		display(currentPicture)
	})

}

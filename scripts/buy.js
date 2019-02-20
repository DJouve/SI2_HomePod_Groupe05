console.log('hey')
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
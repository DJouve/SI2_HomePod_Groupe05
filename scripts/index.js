/* Reponsive Menu */

const hamb = document.querySelector('.hamburger')
const menu = document.querySelector('.responsive-menu-none')

hamb.addEventListener(
  'click',
  function(){
      menu.classList.toggle('responsive-menu-none')
      menu.classList.toggle('responsive-menu-open')
  }
)

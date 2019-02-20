const divOffset = [...document.querySelectorAll('.div')]
const buttonOffset = [...document.querySelectorAll('.button')]




/*
function masquer-div(id)
{
  if (.style.display == 'none') {
       .style.display = 'block';
  }
  else {
       .style.display = 'none';
  }
}*/

//Boucle for -> placer un event listener sur chaque element
//Tu compare l'el a la variable i de la boucle
//Tu affiche la div associée et tu masque les autres
for(let i = 0; i<6; i++){
    buttonOffset[i].addEventListener('click', ()=>{
        if (buttonOffset[i].classList.contains('blue')){
            buttonOffset.classList.remove('blue')
        }
        buttonOffset[i].classList.add('blue')
        for(let j=0; j<6; j++){
            // Baisser l'opacité du bloc actuellement affiché
            // une fois que cest fait
            // Changer le display de l'ancien et du nouveau bloc
            if (divOffset[j].style.display =='block'){
                divOffset[j].style.display = 'none'
            }
            // AUgmenter l'opacité du nouveau bloc
        }
        divOffset[i].style.display = 'block'
    })
    
}
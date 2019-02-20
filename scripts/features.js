const divOffset = [...document.querySelectorAll('.div')]
const buttonOffset = [...document.querySelectorAll('.button')]





for(let i = 0; i<buttonOffset.length; i++){
    buttonOffset[i].addEventListener('click', ()=>{
        for (let k=0; k<buttonOffset.length ; k++){
            if (buttonOffset[k].classList.contains("blue")){
                buttonOffset[k].classList.remove("blue")
            }
        }
        buttonOffset[i].classList.add('blue')
        for(let j=0; j<6; j++){
            
            if (divOffset[j].style.display =='block'){
                divOffset[j].style.display = 'none'
            }
            
        }
        divOffset[i].style.display = 'block'
    })
    
}
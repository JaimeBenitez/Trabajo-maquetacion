// Este archivo le da funcionalidad a la lista guardada por el usuario, permitiendo que aparezcan o desaparezca los contenedores unidos a sus
// correspondientes botones
const greymon = document.querySelector('.myList__digimon--greymon')
const agumon = document.querySelector('.myList__digimon--agumon')
const gabumon = document.querySelector('.myList__digimon--gabumon')
const patamon = document.querySelector('.myList__digimon--patamon')
const tuskmon = document.querySelector('.myList__digimon--tuskmon')
const tyrannomon = document.querySelector('.myList__digimon--tyrannomon')
const greymonContainer = document.querySelector('#myList__output--Greymon')
const agumonContainer = document.querySelector('#myList__output--Agumon')
const gabumonContainer = document.querySelector('#myList__output--Gabumon')
const patamonContainer = document.querySelector('#myList__output--Patamon')
const tuskmonContainer = document.querySelector('#myList__output--Tuskmon')
const tyrannomonContainer = document.querySelector('#myList__output--Tyrannomon')
const greymonBack = document.querySelector('#greymon__back')
const agumonBack = document.querySelector('#agumon__back')
const gabumonBack = document.querySelector('#gabumon__back')
const patamonBack = document.querySelector('#patamon__back')
const tuskmonBack = document.querySelector('#tuskmon__back')
const tyrannomonBack = document.querySelector('#tyrannomon__back')
const image = document.querySelector('.myList__img')


greymon.addEventListener('click', function(){
   
    greymonContainer.classList.toggle('output__show')
    // image.classList.toggle('img__hide')
    agumonContainer.classList.remove('output__show')    
    gabumonContainer.classList.remove('output__show')
    patamonContainer.classList.remove('output__show')
    tuskmonContainer.classList.remove('output__show')
    tyrannomonContainer.classList.remove('output__show')
    
})

agumon.addEventListener('click', function(){
   
    agumonContainer.classList.toggle('output__show')
    // image.classList.toggle('img__hide')
    greymonContainer.classList.remove('output__show')    
    gabumonContainer.classList.remove('output__show')
    patamonContainer.classList.remove('output__show')
    tuskmonContainer.classList.remove('output__show')
    tyrannomonContainer.classList.remove('output__show')
    
})

gabumon.addEventListener('click', function(){
   
    gabumonContainer.classList.toggle('output__show')
    // image.classList.toggle('img__hide')
    greymonContainer.classList.remove('output__show')    
    agumonContainer.classList.remove('output__show')
    patamonContainer.classList.remove('output__show')
    tuskmonContainer.classList.remove('output__show')
    tyrannomonContainer.classList.remove('output__show')
    
})
patamon.addEventListener('click', function(){
   
    patamonContainer.classList.toggle('output__show')
    // image.classList.toggle('img__hide')
    greymonContainer.classList.remove('output__show')    
    agumonContainer.classList.remove('output__show')
    gabumonContainer.classList.remove('output__show')
    tuskmonContainer.classList.remove('output__show')
    tyrannomonContainer.classList.remove('output__show')
    
})

tuskmon.addEventListener('click', function(){
   
    tuskmonContainer.classList.toggle('output__show')
    // image.classList.toggle('img__hide')
    greymonContainer.classList.remove('output__show')    
    agumonContainer.classList.remove('output__show')
    patamonContainer.classList.remove('output__show')
    gabumonContainer.classList.remove('output__show')
    tyrannomonContainer.classList.remove('output__show')
    
})

tyrannomon.addEventListener('click', function(){
   
    tyrannomonContainer.classList.toggle('output__show')
    // image.classList.toggle('img__hide')
    greymonContainer.classList.remove('output__show')    
    agumonContainer.classList.remove('output__show')
    patamonContainer.classList.remove('output__show')
    tuskmonContainer.classList.remove('output__show')
    gabumonContainer.classList.remove('output__show')
    
})

greymonBack.addEventListener('click', function(){
   
    greymonContainer.classList.remove('output__show')
    
})
agumonBack.addEventListener('click', function(){
   
    agumonContainer.classList.remove('output__show')
    
})
gabumonBack.addEventListener('click', function(){
   
    gabumonContainer.classList.remove('output__show')
    
})
patamonBack.addEventListener('click', function(){
   
    patamonContainer.classList.remove('output__show')
    
})
tuskmonBack.addEventListener('click', function(){
   
    tuskmonContainer.classList.remove('output__show')
    
})
tyrannomonBack.addEventListener('click', function(){
   
    tyrannomonContainer.classList.remove('output__show')
    
})


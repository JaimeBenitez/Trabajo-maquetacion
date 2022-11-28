const greymon = document.querySelector('.myList__digimon--greymon')
const agumon = document.querySelector('.myList__digimon--agumon')
const gabumon = document.querySelector('.myList__digimon--gabumon')
const patamon = document.querySelector('.myList__digimon--patamon')
const tuskmon = document.querySelector('.myList__digimon--tuskmon')
const tyrannomon = document.querySelector('.myList__digimon--tyrannomon')
const greymonContainer = document.querySelector('#list__output--Greymon')
const agumonContainer = document.querySelector('#list__output--Agumon')
const gabumonContainer = document.querySelector('#list__output--Gabumon')
const patamonContainer = document.querySelector('#list__output--Patamon')
const tuskmonContainer = document.querySelector('#list__output--Tuskmon')
const tyrannomonContainer = document.querySelector('#list__output--Tyrannomon')
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
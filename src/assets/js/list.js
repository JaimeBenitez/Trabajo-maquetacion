//Este archivo le da funcionalidad a los round button de la lista del usuario, mostrando la lista ordenada de una manera u otra 
const levelButton = document.querySelector('#myList__level')
const typeButton = document.querySelector('#myList__type')
const levelList = document.querySelector('.myList__byLevel')
const typeList = document.querySelector('.myList__byType')

levelButton.addEventListener('click', function(){
    console.log('works')
    levelList.classList.add('show')
    typeList.classList.remove('show')
})
typeButton.addEventListener('click', function(){
    typeList.classList.add('show')
    levelList.classList.remove('show')
})

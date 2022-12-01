const collaboratorsButton = document.querySelector('#contact__collaborators');
const collaboratorsSection = document.querySelector('.collaborators');
const collaboratorsBack = document.querySelector('#collaborators__back');

collaboratorsButton.addEventListener('click',function(e){
    
    collaboratorsSection.classList.toggle('show')   
    e.preventDefault();
})

collaboratorsBack.addEventListener('click',function(){
    
    collaboratorsSection.classList.remove('show')     
})
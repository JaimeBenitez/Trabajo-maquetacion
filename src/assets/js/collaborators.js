const collaboratorsButton = document.querySelector('#contact__collaborators');
const collaboratorsSection = document.querySelector('.collaborators');

collaboratorsButton.addEventListener('click',function(e){
    
    collaboratorsSection.classList.toggle('show')   
    e.preventDefault();
})
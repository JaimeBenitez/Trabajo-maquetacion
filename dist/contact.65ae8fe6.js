//Este archivo permite que al darle al botón "collaborators" en la seccion de contacto aparezca o desaparezca el contenedor del mismo nombre
const collaboratorsButton = document.querySelector("#contact__collaborators");
const collaboratorsSection = document.querySelector(".collaborators");
const collaboratorsBack = document.querySelector("#collaborators__back");
collaboratorsButton.addEventListener("click", function(e) {
    collaboratorsSection.classList.toggle("show");
    e.preventDefault();
});
collaboratorsBack.addEventListener("click", function() {
    collaboratorsSection.classList.remove("show");
});

//# sourceMappingURL=contact.65ae8fe6.js.map

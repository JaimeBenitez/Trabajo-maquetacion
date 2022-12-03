//Funcionalidad del boton de cambio a tema oscuro
const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
function cambiaTema(ev) {
    if (ev.target.checked) document.documentElement.setAttribute("tema", "light");
    else document.documentElement.setAttribute("tema", "dark");
}
colorSwitch.addEventListener("change", cambiaTema);

//# sourceMappingURL=user.159a463a.js.map

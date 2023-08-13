const proyectosContainer = document.getElementById("tarjetasContainer");
const aside = document.getElementsByTagName("aside")[0];

const getTecnologias = (tecnologias) => {
    let res = "";
    tecnologias.forEach(tecnologia => {
        res += `<span class="tecnologia">${tecnologia}</span>`
    })
    return res;
}

// Creación proyectos
proyectos.forEach(proyecto => {
    const nuevoProyecto = document.createElement("div");
    nuevoProyecto.classList= "tarjeta proyecto"; 
    proyectosContainer.appendChild(nuevoProyecto);
    nuevoProyecto.innerHTML = `
    <img src="img/proyectos/${proyecto.imagen}">
    <div>
      <h3>${proyecto.titulo}</h3>
      <p>${proyecto.descripción}</p>
      <p>Tecnologías: ${getTecnologias(proyecto.tecnologías)} </p>
    </div>
    <a href="${proyecto.link}" target="_blank">Ver proyecto</a>
    `
})

// Creación Info personal
const nuevaPresentacion = document.createElement("div");
nuevaPresentacion.classList = "presentacion";
nuevaPresentacion.innerHTML = `
    <img src="img/${informacionPersonal.imagen}" id="foto-personal" alt="foto">
`;
informacionPersonal.otros.forEach(dato => {
    nuevaPresentacion.innerHTML += `
      <div>
        <span>${dato[0]}:</span>
        <span>${dato[1]}</span>
      </div>
    `
})
aside.appendChild(nuevaPresentacion);
// Idiomas
const nuevoIdioma = document.createElement("div");
nuevoIdioma.classList = "idioma";
informacionPersonal.idiomas.forEach(dato => {
    nuevoIdioma.innerHTML += `
      <div>
        <span>${dato[0]}:</span>
        <span>${dato[1]}</span>
      </div>
    `
})
aside.appendChild(nuevoIdioma);
// Lenguajes de programación
const nuevoLenguajesProgramacion = document.createElement("div");
nuevoLenguajesProgramacion.classList = "tecnologías";
informacionPersonal.tecnologías.forEach(dato => {
    nuevoLenguajesProgramacion.innerHTML += `
      <div>
      <span>${dato[0]}</span>
        <span>${dato[1]}</span>
        </div>
      <progress max="10" value=${dato[1]}>
    `
})
aside.appendChild(nuevoLenguajesProgramacion);

//Links
function getIconoRed(red){
    switch(red){
        case "linkedin":
            return "linkedin.svg";
            break;
        case "github":
            return "github.svg";
            break;
        default:
            return "globe-solid.svg";
    }
}

const nuevoRedes = document.createElement("div");
nuevoRedes.classList = "redes";
informacionPersonal.redes.forEach(dato => {
    if(dato[1] === "") return; 
    nuevoRedes.innerHTML += `
      <a href="${dato[1]}" target="_blank">
        <img src="img/iconos/${getIconoRed(dato[0])}" alt="foto">
      </a>
    `
})
aside.appendChild(nuevoRedes);


const material = [
    { id: 1, nombre: "En una", artista: "Cami Buch & Mora Navarro", img: "../imagenesClips/1camibuch.jpg",/*video:"../videos/CamiBuchYMoaNavarroEnUna.mp4"*/video: "../videos/SillonFreyFinal.mp4" },
    { id: 2, nombre: "No se soltar", artista: "Niño Etc", img: "../imagenesClips/2-ninoetc.jpg",/*video:"../videos/NinioEtcNoSeSoltar.mp4"*/ video: "../videos/SillonFreyFinal.mp4" },
    { id: 4, nombre: "617", artista: "Mujer Cebra", img: "../imagenesClips/4-mujercebra.jpg",/*video:"../videos/MujerCebra617.mp4"*/ video: "../videos/SillonFreyFinal.mp4" },
    { id: 5, nombre: "Sillon Frey", artista: "Estudio Te", img: "../imagenesClips/5-estudiote.jpg", /*video:"../videos/SillonFreyFinal.mp4"*/ video: "../videos/SillonFreyFinal.mp4" },
    { id: 6, nombre: "Certezas", artista: "Mora Navarro", img: "../imagenesClips/6-certezas.jpg",/*video:"../videos/MoraNvarroCertezas.mp4"*/ video: "../videos/SillonFreyFinal.mp4" },
    { id: 7, nombre: "Agujas", artista: "Paco x Weren", img: "../imagenesClips/7- agujas.jpg",/*video:"../videos/PacoWerenAgujas.mp4"*/ video: "../videos/SillonFreyFinal.mp4" },
    { id: 8, nombre: "Pedro Raul", artista: "Jero Jones", img: "../imagenesClips/8-jerojones.jpg",/*video:"../videos/JeroJonesPedroRaul.mp4"*/ video: "../videos/SillonFreyFinal.mp4" },
    { id: 9, nombre: "La Brisa", artista: "Pradkin", img: "../imagenesClips/9-brisa.jpg",/*video:"../videos/PradkinLaBrisa.mp4"*/ video: "../videos/SillonFreyFinal.mp4" },
    { id: 10, nombre: "Van al Cielo", artista: "Marina Wil", img: "../imagenesClips/10-marinawill.jpg",/*video:"../videos/MarinaWilVanAlCielo.mp4"*/ video: "../videos/SillonFreyFinal.mp4" },
    { id: 11, nombre: "Albedrio", artista: "Paco", img: "../imagenesClips/11-albedrio.jpg",/*video:"../videos/PacoAlbedrio.mp4"*/ video: "../videos/SillonFreyFinal.mp4" },
];


const imagenesContainer = document.getElementById("imagenes__container"),
    cuerpo = document.querySelector(".cuerpo"),
    navBar = document.querySelector(".navBar"),
    worksContainer = document.querySelector(".works__container"),
    nombresDeArtistasContainer = document.querySelector(".works__nombresDeArtistas__container");

let div = document.createElement("div");

function cerrarVideo() {
    div.innerHTML = "";
    navBar.classList.remove("desaparecer");
    nombresDeArtistasContainer.classList.remove("desaparecer");
    worksContainer.classList.remove("noMargin");
    mostrarMaterial();
    cuerpo.classList.add("cuerpo");
}

function abrirVideo(id) {
    imagenesContainer.innerHTML = "";

    navBar.classList.add("desaparecer");
    worksContainer.classList.add("desaparecer");
    worksContainer.classList.add("noMargin");
    nombresDeArtistasContainer.classList.add("desaparecer");
    const video = material.find(r => r.id == id);
    div.innerHTML = `<div class="video__container">
                        <video src="${video.video} " controls autoplay></video>
                        <button type="button" id="btnCerrar" onclick="cerrarVideo()" class="btnCerrar" value="Cerrar">x</button>
                    </div>
                    `
    document.body.appendChild(div)

}




function mostrarMaterial() {
    for (const imagen of material) {
        const { id, nombre, img, artista } = imagen
        const imagenesHtml = `
        <div class="card__container"  onclick="abrirVideo(${id})">
        <div class="imagen__container">
            <img src="${img}">
        </div>
        <div class="card__info">
            <h3>${nombre}-${artista}</h3>
        </div>
    </div>`

        imagenesContainer.innerHTML += imagenesHtml
    }
}

mostrarMaterial();
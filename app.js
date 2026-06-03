const radios = [

{
nombre:"M2O Radio",
logo:"logos/m2o.png",
stream:"https://streamcdnb3-4c4b867c89244861ac216426883d1ad0.msvdn.net/radiom2o/radiom2o/play1.m3u8"
},

{
nombre:"Radio Deejay",
logo:"logos/deejay.png",
stream:"https://streamcdnc1-4c4b867c89244861ac216426883d1ad0.msvdn.net/radiodeejay/radiodeejay/master_ma.m3u8"
},

{
nombre:"One World Radio",
logo:"logos/oneworld.jpg",
stream:"https://playerservices.streamtheworld.com/api/livestream-redirect/OWR_INTERNATIONAL_ADP.m3u8"
},

{
nombre:"Ibiza Global Radio",
logo:"logos/Ibiza.png",
stream:"https://cdn-peer022.streaming-pro.com:8024/ibizaglobalradio.mp3"
}

];

const radiosGrid =
document.getElementById("radios");

const logoGrande =
document.getElementById("logoGrande");

const radioNombre =
document.getElementById("radioNombre");

const player =
document.getElementById("player");

function cargarRadio(radio){

    logoGrande.src = radio.logo;

    radioNombre.textContent =
    radio.nombre;

    if(Hls.isSupported() &&
       radio.stream.includes(".m3u8")){

        if(window.hls){
            window.hls.destroy();
        }

        window.hls = new Hls();

        window.hls.loadSource(
            radio.stream
        );

        window.hls.attachMedia(
            player
        );

        window.hls.on(
            Hls.Events.MANIFEST_PARSED,
            function(){

                player.play();

            }
        );

    }else{

        player.src =
        radio.stream;

        player.play();

    }

    localStorage.setItem(
        "ultimaRadio",
        radio.nombre
    );

}

radios.forEach(radio => {

    const card =
    document.createElement("div");

    card.className = "radio";

    card.innerHTML = `
        <img src="${radio.logo}">
        <p>${radio.nombre}</p>
    `;

    card.addEventListener("click",()=>{

        document
        .querySelectorAll(".radio")
        .forEach(el =>
            el.classList.remove("activa")
        );

        card.classList.add("activa");

        cargarRadio(radio);

    });

    radiosGrid.appendChild(card);

});

const ultimaRadio =
localStorage.getItem("ultimaRadio");

if(ultimaRadio){

    const radioGuardada =
    radios.find(r =>
        r.nombre === ultimaRadio
    );

    if(radioGuardada){

        logoGrande.src =
        radioGuardada.logo;

        radioNombre.textContent =
        radioGuardada.nombre;

    }
}
/* Animación del logo */

player.addEventListener("play", () => {

    logoGrande.classList.add(
        "reproduciendo"
    );

});

player.addEventListener("pause", () => {

    logoGrande.classList.remove(
        "reproduciendo"
    );

});

player.addEventListener("ended", () => {

    logoGrande.classList.remove(
        "reproduciendo"
    );

});

/* Pantalla completa */

logoGrande.addEventListener("click", () => {

    document.body.classList.toggle(
        "fullscreen"
    );

});

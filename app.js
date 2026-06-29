const radios = [

{
    nombre:"M2O Radio",
    descripcion:"Italy's Dance Station",
    logo:"logos/m2o.png",
    stream:"https://streamcdnb3-4c4b867c89244861ac216426883d1ad0.msvdn.net/radiom2o/radiom2o/play1.m3u8"
},

{
    nombre:"Radio Deejay",
    descripcion:"One Nation, One Station",
    logo:"logos/deejay.png",
    stream:"https://streamcdnc1-4c4b867c89244861ac216426883d1ad0.msvdn.net/radiodeejay/radiodeejay/master_ma.m3u8"
},

{
    nombre:"One World Radio",
    descripcion:"The Sound of Tomorrowland",
    logo:"logos/oneworld.jpg",
    stream:"https://playerservices.streamtheworld.com/api/livestream-redirect/OWR_INTERNATIONAL_ADP.m3u8"
},

{
    nombre:"Ibiza Global Radio",
    descripcion:"The Sound of Ibiza",
    logo:"logos/ibiza.png",
    stream:"https://cdn-peer022.streaming-pro.com:8024/ibizaglobalradio.mp3"
}

];

const tvs = [

{
    nombre:"m2o TV",
    logo:"logos/m2o.png",
    stream:"https://streamcdnc2-4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S62628868/uhdWBlkC1AoO/playlist.m3u8"
},

{
    nombre:"Deejay TV",
    logo:"logos/deejay.png",
    stream:"https://streamcdnc1-4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S85984808/sMO0tz9Sr2Rk/playlist.m3u8"
},

    {
    nombre:"Power Dance TV",
    logo:"logos/powerdance.png",
    stream:"https://livetv.powerapp.com.tr/dance/dance.smil/playlist.m3u8"
},

{
    nombre:"Number 1 Dance",
    logo:"logos/number1dance.png",
    stream:"https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e2aa8acf44_1/playlist.m3u8"
}

];

const shows = [

{
nombre:"A State of Trance",
logo:"logos/asot.png",
horario:"Jueves • 12:00 PM",
youtube:"https://www.youtube.com/@astateoftrance"
},

{
nombre:"Group Therapy",
logo:"logos/grouptherapy.png",
horario:"Viernes • 1:00 PM",
youtube:"https://www.youtube.com/@anjunabeats"
},

{
nombre:"Future Sound of Egypt",
logo:"logos/fsoe.png",
horario:"Miércoles • 1:00 PM",
youtube:"https://www.youtube.com/@FutureSoundOfEgypt"
},

{
nombre:"Corsten's Countdown",
logo:"logos/corsten.png",
horario:"Miércoles • 12:00 PM",
youtube:"https://www.youtube.com/@ferrycorsten"
}

];

const radiosGrid =
document.getElementById("radios");

const tvsGrid =
document.getElementById("tvs");

const showsGrid =
document.getElementById("shows");

console.log("TVS GRID:", tvsGrid);
console.log("TVS:", tvs);

const tvPlayer =
document.getElementById("tvPlayer");

const logoGrande =
document.getElementById("logoGrande");

const radioNombre =
document.getElementById("radioNombre");

const radioDescripcion =
document.getElementById("radioDescripcion");

const player =
document.getElementById("player");

const volumeSlider =
document.getElementById("volumeSlider");

const playToggle =
document.getElementById("playToggle");

const playStatus =
document.getElementById("playStatus");

function cargarRadio(radio){

    logoGrande.src = radio.logo;

    radioNombre.textContent =
    radio.nombre;

    radioDescripcion.textContent =
    radio.descripcion;
    
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

function cargarTV(tv){

    logoGrande.classList.remove("reproduciendo");

    logoGrande.src = tv.logo;

    radioNombre.textContent =
    tv.nombre;

    player.pause();

    tvPlayer.style.display =
    "block";

    if(Hls.isSupported()){

        if(window.tvHls){
            window.tvHls.destroy();
        }

        window.tvHls =
        new Hls();

        window.tvHls.loadSource(
            tv.stream
        );

        window.tvHls.attachMedia(
            tvPlayer
        );

    }else{

        tvPlayer.src =
        tv.stream;

    }

    tvPlayer.play();

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

tvs.forEach(tv => {

    const card =
    document.createElement("div");

    card.className = "radio";

    card.innerHTML = `
        <img src="${tv.logo}">
        <p>${tv.nombre}</p>
    `;

    card.addEventListener("click",()=>{

        cargarTV(tv);

    });

    tvsGrid.appendChild(card);

});

shows.forEach(show => {

    const card =
    document.createElement("div");

    card.className = "radio";

    card.innerHTML = `
    <img src="${show.logo}">
    <p>${show.nombre}</p>

    <div class="youtube-badge">

        <img src="logos/youtube.png">

        <span>YouTube</span>

    </div>

    <small class="show-time">

        ${show.horario}

    </small>
`;

    card.addEventListener("click",()=>{

        window.open(
            show.youtube,
            "_blank"
        );

    });

    showsGrid.appendChild(card);

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

        radioDescripcion.textContent =
        radioGuardada.descripcion;

    }
}
/* Animación del logo */

player.addEventListener("play",()=>{

    logoGrande.classList.add("reproduciendo");

    playToggle.textContent="⏸";

    playStatus.textContent="LIVE";

});

player.addEventListener("pause",()=>{

    logoGrande.classList.remove("reproduciendo");

    playToggle.textContent="▶";

    playStatus.textContent="PAUSED";

});

player.addEventListener("ended",()=>{

    logoGrande.classList.remove("reproduciendo");

    playToggle.textContent="▶";

    playStatus.textContent="PAUSED";

});

/* Pantalla completa */

logoGrande.addEventListener("click", () => {

    document.body.classList.toggle(
        "fullscreen"
    );

});

/*=============================
  CONTROL DE VOLUMEN
==============================*/

const volumenGuardado =
localStorage.getItem("volumen");

if(volumenGuardado){

    player.volume = volumenGuardado / 100;

    volumeSlider.value = volumenGuardado;

}else{

    player.volume = 0.7;

}

volumeSlider.addEventListener("input",()=>{

    const volumen =
    volumeSlider.value;

    player.volume =
    volumen / 100;

    tvPlayer.volume =
    volumen / 100;

    localStorage.setItem(
        "volumen",
        volumen
    );

});

/*=============================
  PLAY / PAUSE
==============================*/

playToggle.addEventListener("click",()=>{

    if(player.paused){

        player.play();

    }else{

        player.pause();

    }

});

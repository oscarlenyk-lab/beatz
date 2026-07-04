/****************************************************************
 *
 *  BEATZ v1.0
 *  Electronic Music Worldwide
 *
 ****************************************************************/


/*=========================================================
  CONFIGURACIÓN
=========================================================*/

const CONFIG = {

    volumenInicial: 0.70,

    estadoInicial: "STOPPED",

    fadeLogo: 200,

    colores: {

        live: "#22C55E",

        paused: "#F59E0B",

        stopped: "#9CA3AF"

    }

};


/*=========================================================
  ESTADO DE LA APLICACIÓN
=========================================================*/

const App = {

    radioActual: null,

    hls: null,

    tvHls: null,

    estado: CONFIG.estadoInicial

};


/*=========================================================
  DATOS
=========================================================*/

const radios = [

    {
        nombre:"m2o Radio",
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


/*=========================================================
  ELEMENTOS DEL DOM
=========================================================*/

const UI = {

    player: document.getElementById("player"),

    tvPlayer: document.getElementById("tvPlayer"),

    logo: document.getElementById("logoGrande"),

    nombre: document.getElementById("radioNombre"),

    descripcion: document.getElementById("radioDescripcion"),

    playButton: document.getElementById("playToggle"),

    playIcon: document.getElementById("playIcon"),

    playStatus: document.getElementById("playStatus"),

    liveDot: document.querySelector(".live-dot"),

    equalizer: document.querySelector(".equalizer"),

    volume: document.getElementById("volumeSlider"),

    radios: document.getElementById("radios"),

    tvs: document.getElementById("tvs"),

    shows: document.getElementById("shows"),

    miniLogo: document.getElementById("miniLogo"),

    miniNombre: document.getElementById("miniNombre"),

    miniDescripcion: document.getElementById("miniDescripcion"),

    miniPlay: document.getElementById("miniPlay")

};




/*=========================================================
  UTILIDADES
=========================================================*/

function cambiarLogo(src){

    UI.logo.style.opacity = "0";

    setTimeout(()=>{

        UI.logo.src = src;

        UI.miniLogo.src = src;   // <-- Agrega esta línea

        UI.logo.onload = ()=>{

            UI.logo.style.opacity = "1";

        };

    }, CONFIG.fadeLogo);

}


function cambiarInformacion(nombre, descripcion){

    UI.nombre.textContent = nombre;

    UI.descripcion.textContent = descripcion;

    UI.miniNombre.textContent = nombre;

    UI.miniDescripcion.textContent = descripcion;

}


function guardarUltimaRadio(nombre){

    localStorage.setItem(
        "ultimaRadio",
        nombre
    );

}


/*=========================================================
  ESTADO DEL REPRODUCTOR
=========================================================*/

function actualizarEstado(estado){

    App.estado = estado;

    switch(estado){

        case "LIVE":

            UI.playStatus.textContent = "LIVE";

            UI.playStatus.style.color =
            CONFIG.colores.live;

            UI.liveDot.style.background =
            CONFIG.colores.live;

            UI.liveDot.style.boxShadow =
            "0 0 8px rgba(34,197,94,.55)";

            UI.liveDot.style.animation =
            "livePulse 1.8s infinite";

            UI.equalizer.classList.remove("paused");

            UI.logo.classList.add("reproduciendo");

            UI.playIcon.innerHTML = `
                <rect x="6" y="5" width="4" height="14" rx="1"></rect>
                <rect x="14" y="5" width="4" height="14" rx="1"></rect>
            `;

        break;



        case "PAUSED":

            UI.playStatus.textContent = "PAUSED";

            UI.playStatus.style.color =
            CONFIG.colores.paused;

            UI.liveDot.style.background =
            CONFIG.colores.paused;

            UI.liveDot.style.boxShadow =
            "0 0 8px rgba(245,158,11,.55)";

            UI.liveDot.style.animation =
            "none";

            UI.equalizer.classList.add("paused");

            UI.logo.classList.remove("reproduciendo");

            UI.playIcon.innerHTML = `
                <path d="M8 5v14l11-7z"></path>
            `;

        break;



        case "STOPPED":

            UI.playStatus.textContent = "STOPPED";

            UI.playStatus.style.color =
            CONFIG.colores.stopped;

            UI.liveDot.style.background =
            CONFIG.colores.stopped;

            UI.liveDot.style.boxShadow =
            "0 0 8px rgba(156,163,175,.45)";

            UI.liveDot.style.animation =
            "none";

            UI.equalizer.classList.add("paused");

            UI.logo.classList.remove("reproduciendo");

            UI.playIcon.innerHTML = `
                <path d="M8 5v14l11-7z"></path>
            `;

        break;

    }

}




/*=========================================================
  REPRODUCTOR
=========================================================*/

function detenerHLS(){

    if(App.hls){

        App.hls.destroy();

        App.hls = null;

    }

}

function detenerTV(){

    if(App.tvHls){

        App.tvHls.destroy();

        App.tvHls = null;

    }

    UI.tvPlayer.pause();
}

function cargarRadio(radio){

    App.radioActual = radio;

    detenerTV();

    UI.tvPlayer.style.display = "none";

    cambiarLogo(radio.logo);

    cambiarInformacion(

        radio.nombre,

        radio.descripcion

    );

    if(radio.stream.includes(".m3u8") &&
       Hls.isSupported()){

        detenerHLS();

        App.hls = new Hls();

        App.hls.loadSource(
            radio.stream
        );

        App.hls.attachMedia(
            UI.player
        );

        App.hls.on(

            Hls.Events.MANIFEST_PARSED,

            ()=>{

                UI.player.play();

            }

        );

    }else{

        detenerHLS();

        UI.player.src =
        radio.stream;

        UI.player.play();

    }

    guardarUltimaRadio(
        radio.nombre
    );

}

function cargarTV(tv){

    detenerTV();

    detenerHLS();

    UI.player.pause();

    cambiarLogo(tv.logo);

    cambiarInformacion(

        tv.nombre,

        "Live Music Television"

    );

    UI.tvPlayer.style.display = "block";

    if(Hls.isSupported()){

        App.tvHls = new Hls();

        App.tvHls.loadSource(
            tv.stream
        );

        App.tvHls.attachMedia(
            UI.tvPlayer
        );

    }else{

        UI.tvPlayer.src =
        tv.stream;

    }

    UI.tvPlayer.play();

}




/*=========================================================
  CONSTRUCCIÓN DE LA INTERFAZ
=========================================================*/

function crearTarjetaRadio(radio){

    const card = document.createElement("div");

    card.className = "radio";

    card.innerHTML = `
        <img src="${radio.logo}" alt="${radio.nombre}">
        <p>${radio.nombre}</p>
    `;

    card.addEventListener("click",()=>{

        document
            .querySelectorAll(".radio")
            .forEach(item=>item.classList.remove("activa"));

        card.classList.add("activa");

        cargarRadio(radio);

    });

    UI.radios.appendChild(card);

}


function crearTarjetaTV(tv){

    const card = document.createElement("div");

    card.className = "radio";

    card.innerHTML = `
        <img src="${tv.logo}" alt="${tv.nombre}">
        <p>${tv.nombre}</p>
    `;

    card.addEventListener("click",()=>{

        cargarTV(tv);

    });

    UI.tvs.appendChild(card);

}


function crearTarjetaShow(show){

    const card = document.createElement("div");

    card.className = "show-card";

    card.innerHTML = `

        <img src="${show.logo}" alt="${show.nombre}">

        <div class="show-right">

            <div class="youtube-badge">

                <img src="logos/youtube.png">

                <span>YouTube</span>

            </div>

            <div class="show-time">

                ${show.horario}

            </div>

        </div>

    `;

    card.addEventListener("click",()=>{

        window.open(show.youtube,"_blank");

    });

    UI.shows.appendChild(card);

}


/*=========================================================
  EVENTOS DEL PLAYER
=========================================================*/

UI.player.addEventListener("play",()=>{

    actualizarEstado("LIVE");

});

UI.player.addEventListener("pause",()=>{

    actualizarEstado("PAUSED");

});

UI.player.addEventListener("ended",()=>{

    actualizarEstado("STOPPED");

});


/*=========================================================
  CONTROL DE VOLUMEN
=========================================================*/

const volumenGuardado =
localStorage.getItem("volumen");

if(volumenGuardado){

    UI.volume.value = volumenGuardado;

    UI.player.volume =
    volumenGuardado/100;

    UI.tvPlayer.volume =
    volumenGuardado/100;

}else{

    UI.volume.value =
    CONFIG.volumenInicial*100;

    UI.player.volume =
    CONFIG.volumenInicial;

    UI.tvPlayer.volume =
    CONFIG.volumenInicial;

}

UI.volume.addEventListener("input",()=>{

    const volumen =
    UI.volume.value;

    UI.player.volume =
    volumen/100;

    UI.tvPlayer.volume =
    volumen/100;

    localStorage.setItem(

        "volumen",

        volumen

    );

});


/*=========================================================
  PLAY / PAUSE
=========================================================*/

UI.playButton.addEventListener("click",()=>{

    if(UI.player.paused){

        if(App.radioActual){

            UI.player.play();

        }

    }else{

        UI.player.pause();

    }

});

UI.miniPlay.addEventListener("click",()=>{

    UI.playButton.click();

});


/*=========================================================
  PANTALLA COMPLETA
=========================================================*/

UI.logo.addEventListener("click",()=>{

    document.body.classList.toggle(

        "fullscreen"

    );

});


/*=========================================================
  INICIALIZACIÓN
=========================================================*/

radios.forEach(crearTarjetaRadio);

tvs.forEach(crearTarjetaTV);

shows.forEach(crearTarjetaShow);


const ultimaRadio =
localStorage.getItem("ultimaRadio");

if(ultimaRadio){

    const radio = radios.find(

        r=>r.nombre===ultimaRadio

    );

    if(radio){

        App.radioActual = radio;

        cambiarLogo(radio.logo);

        cambiarInformacion(

            radio.nombre,

            radio.descripcion

        );

    }

}

actualizarEstado(

    CONFIG.estadoInicial

);

UI.miniPlay.addEventListener("click",()=>{

    UI.playToggle.click();

});

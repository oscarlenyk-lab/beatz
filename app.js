
/****************************************************************
 *
 *  beatz v2.1
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
  ICONOS
=========================================================*/

const ICON_PLAY = `
<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
    <polygon
        points="8,6.2 18.5,12 8,17.8"
        fill="white">
    </polygon>
</svg>
`;

const ICON_PAUSE = `
<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="7.4" y="5.4" width="2.6" height="13.2" rx="1.3" fill="white"></rect>
    <rect x="14" y="5.4" width="2.6" height="13.2" rx="1.3" fill="white"></rect>
</svg>
`;


/*=========================================================
  ESTADO DE LA APLICACIÓN
=========================================================*/

const App = {

    radioActual: null,

    medioActual: null,

    hls: null,

    tvHls: null,

    estado: CONFIG.estadoInicial,

    tipoReproduccion: null,
  
    signalX: 20,

    signalAnimation: null

};


/*=========================================================
  DATOS DE RADIOS
=========================================================*/

const radios = [

    {
        nombre: "m2o Radio",
        descripcion: "Musica Allo Stato Puro",
        logo: "logos/m2o.png",
        stream: "https://streamcdnb3-4c4b867c89244861ac216426883d1ad0.msvdn.net/radiom2o/radiom2o/play1.m3u8"
    },

    {
        nombre: "Radio Deejay",
        descripcion: "One Nation, One Station",
        logo: "logos/deejay.png",
        stream: "https://streamcdnc1-4c4b867c89244861ac216426883d1ad0.msvdn.net/radiodeejay/radiodeejay/master_ma.m3u8"
    },

    {
        nombre: "One World Radio",
        descripcion: "The Sound of Tomorrowland",
        logo: "logos/oneworld.png",
        stream: "https://playerservices.streamtheworld.com/api/livestream-redirect/OWR_INTERNATIONAL_ADP.m3u8"
    },

    {
        nombre: "Ibiza Global Radio",
        descripcion: "The Sound of Ibiza",
        logo: "logos/ibiza.png",
        stream: "https://cdn-peer022.streaming-pro.com:8024/ibizaglobalradio.mp3"
    },

    {
        nombre: "Aura FM",
        descripcion: "La energía que suena!",
        logo: "logos/aura.png",
        stream: "https://stream.miradio.in/proxy/aura/stream"
    },

    {
        nombre: "ABC",
        descripcion: "¡La excelencia hecha radio!",
        logo: "logos/abc.png",
        stream: "https://streaming.rcs.com.sv/proxy/abc/stream"
    }

];


/*=========================================================
  DATOS DE TELEVISIÓN
=========================================================*/

const tvs = [

    {
        nombre: "m2o TV",
        logo: "logos/m2o.png",
        stream: "https://streamcdnc2-4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S62628868/uhdWBlkC1AoO/playlist.m3u8"
    },

    {
        nombre: "Deejay TV",
        logo: "logos/deejay.png",
        stream: "https://streamcdnc1-4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S85984808/sMO0tz9Sr2Rk/playlist.m3u8"
    },

    {
        nombre: "TotalMusic 00s",
        logo: "logos/totalmusic-00s.png",
        stream: "https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_00s/SA_LIVE_hls_enc/master.m3u8"
    },

    {
        nombre: "TotalMusic Dance",
        logo: "logos/totalmusicdance.png",
        stream: "https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_Dance/SA_LIVE_hls_enc/master.m3u8"
    },

    {
        nombre: "Music Box Classic",
        logo: "logos/musicboxclassic.png",
        stream: "https://beatz-musicbox-proxy.oscarlenyk.workers.dev/mbclassic"
    },

    {
        nombre: "Music Box Dance",
        logo: "logos/musicboxdance.png",
        stream: "https://beatz-musicbox-proxy.oscarlenyk.workers.dev/mbdance"
    },

    {
        nombre: "Music Box Hits",
        logo: "logos/musicboxhits.png",
        stream: "https://beatz-musicbox-proxy.oscarlenyk.workers.dev/mbhits"
    },

    {
        nombre: "Music Box Sexy",
        logo: "logos/musicboxsexy.png",
        stream: "https://beatz-musicbox-proxy.oscarlenyk.workers.dev/mbsexy"
    },

    {
        nombre: "Music Box Polska Ukraine",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Music_Box_UA_%282018%29.svg/960px-Music_Box_UA_%282018%29.svg.png",
        stream: "https://beatz-musicbox-proxy.oscarlenyk.workers.dev/mbpolskaukraine"
    },

    {
        nombre: "M2 Ukraine",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Music_Box_UA_%282018%29.svg/960px-Music_Box_UA_%282018%29.svg.png",
        stream: "https://beatz-musicbox-proxy.oscarlenyk.workers.dev/m2ukraine"
    },
  
    {
        nombre: "That's 90s 00s",
        logo: "logos/thats-90s00s.png",
        stream: "https://amg01076-amg01076c19-rakuten-gb-8653.playouts.now.amagi.tv/playlist/amg01076-lightning-now90s00s-rakutengb/playlist.m3u8"
    },

    {
        nombre: "Dance TV",
        logo: "logos/dancetv.png",
        stream: "https://m1b2.worldcast.tv/dancetelevisionone/2/dancetelevisionone.m3u8"
    }

];


/*=========================================================
  PROGRAMAS DESTACADOS
=========================================================*/

const shows = [

    {
        nombre: "A State of Trance",
        logo: "logos/asot.png",
        horario: "Jue • 12:00 PM",
        youtube: "https://www.youtube.com/@astateoftrance"
    },

    {
        nombre: "Group Therapy",
        logo: "logos/grouptherapy.png",
        horario: "Vie • 1:00 PM",
        youtube: "https://www.youtube.com/@aboveandbeyond"
    },

    {
        nombre: "Future Sound of Egypt",
        logo: "logos/fsoe.png",
        horario: "Mie • 1:00 PM",
        youtube: "https://www.youtube.com/@FutureSoundOfEgypt"
    },

    {
        nombre: "Corsten's Countdown",
        logo: "logos/corsten.png",
        horario: "Mie • 12:00 PM",
        youtube: "https://www.youtube.com/@ferrycorsten"
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

    playStatus: document.getElementById("playStatus"),

    liveDot: document.querySelector(".live-dot"),

    equalizer: document.querySelector(".equalizer"),

    radios: document.getElementById("radios"),

    tvs: document.getElementById("tvs"),

    shows: document.getElementById("shows"),

    miniLogo: document.getElementById("miniLogo"),

    miniNombre: document.getElementById("miniNombre"),

    miniDescripcion: document.getElementById("miniDescripcion"),

    miniPlay: document.getElementById("miniPlay"),

    themeToggle: document.getElementById("themeToggle"),

    signalPulse: document.querySelector(".signal-pulse")

};


/*=========================================================
  UTILIDADES
=========================================================*/

function cambiarLogo(src) {

    UI.logo.style.opacity = "0";

    setTimeout(() => {

        UI.logo.src = src;

        UI.miniLogo.src = src;

        UI.logo.onload = () => {

            UI.logo.style.opacity = "1";

        };

        UI.logo.onerror = () => {

            UI.logo.style.opacity = "1";

        };

    }, CONFIG.fadeLogo);

}


function cambiarInformacion(nombre, descripcion) {

    UI.nombre.textContent = nombre;

    UI.descripcion.textContent = descripcion;

    UI.miniNombre.textContent = nombre;

    UI.miniDescripcion.textContent = descripcion;

}


function guardarUltimaRadio(nombre) {

    localStorage.setItem(
        "ultimaRadio",
        nombre
    );

}

/* =========================================
   BEATZ - CONTROL DE ICONOS DE NAVEGACIÓN
========================================= */

function actualizarIconoNav(tipo){

    const botones = document.querySelectorAll(".nav-item");

    botones.forEach(boton => {

        boton.classList.remove(
            "reproduciendo-radio",
            "reproduciendo-tv",
            "reproduciendo-youtube"
        );

    });

    if(tipo === "radio"){

        document
            .querySelector('[data-target="radios-section"]')
            .classList.add("reproduciendo-radio");

    }

    if(tipo === "tv"){

        document
            .querySelector('[data-target="tv-section"]')
            .classList.add("reproduciendo-tv");

    }

    if(tipo === "youtube"){

        document
            .querySelector('[data-target="biblioteca-section"]')
            .classList.add("reproduciendo-youtube");

    }

}


/*=========================================================
  TEMA LIGHT / DARK
=========================================================*/

function aplicarTema(tema) {

    document.body.classList.toggle(
        "dark",
        tema === "dark"
    );

    localStorage.setItem(
        "tema",
        tema
    );

}


function cambiarTema() {

    const oscuro =
        document.body.classList.contains("dark");

    aplicarTema(
        oscuro ? "light" : "dark"
    );

}


/*=========================================================
  ESTADO DEL REPRODUCTOR
=========================================================*/

function actualizarEstado(estado) {

    App.estado = estado;

    switch (estado) {

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

            UI.signalPulse.style.display = "block";

            UI.signalPulse.style.animation = "none";

            UI.signalPulse.offsetHeight;

            UI.signalPulse.style.animation =
                "signalFlow 4.5s linear infinite";

            break;


        case "PAUSED":

            UI.playStatus.textContent = "PAUSED";

            UI.playStatus.style.color =
                CONFIG.colores.paused;

            UI.liveDot.style.background =
                CONFIG.colores.paused;

            UI.liveDot.style.boxShadow =
                "0 0 8px rgba(245,158,11,.55)";

            UI.liveDot.style.animation = "none";

            UI.equalizer.classList.add("paused");

            UI.logo.classList.remove("reproduciendo");

            UI.signalPulse.style.animationPlayState =
                "paused";

            break;


        case "STOPPED":

            UI.playStatus.textContent = "STOPPED";

            UI.playStatus.style.color =
                CONFIG.colores.stopped;

            UI.liveDot.style.background =
                CONFIG.colores.stopped;

            UI.liveDot.style.boxShadow =
                "0 0 8px rgba(156,163,175,.45)";

            UI.liveDot.style.animation = "none";

            UI.equalizer.classList.add("paused");

            UI.logo.classList.remove("reproduciendo");

            UI.signalPulse.style.animation = "none";

            UI.signalPulse.style.display = "none";

            break;

    }

}


/*=========================================================
  CONTROL DE REPRODUCTORES HLS
=========================================================*/

function detenerHLS() {

    if (App.hls) {

        App.hls.destroy();

        App.hls = null;

    }

}


function detenerTV() {

    if (App.tvHls) {

        App.tvHls.destroy();

        App.tvHls = null;

    }

    UI.tvPlayer.pause();

}


/*=========================================================
  CARGAR RADIO
=========================================================*/

function cargarRadio(radio) {

    App.radioActual = radio;
    App.medioActual = "radio";

    detenerTV();
    detenerHLS();

    UI.tvPlayer.style.display = "none";

    UI.player.pause();
    UI.player.removeAttribute("src");
    UI.player.load();

    cambiarLogo(radio.logo);

    cambiarInformacion(
        radio.nombre,
        radio.descripcion
    );

    if (radio.stream.includes(".m3u8") && Hls.isSupported()) {

        App.hls = new Hls();

        App.hls.loadSource(radio.stream);

        App.hls.attachMedia(UI.player);

        App.hls.on(
            Hls.Events.MANIFEST_PARSED,
            () => {
                UI.player.play().catch(error => {
                    console.log("Error al reproducir radio:", error);
                });
            }
        );

        App.hls.on(
            Hls.Events.ERROR,
            (event, data) => {
                console.log("ERROR RADIO:", data);
            }
        );

    } else {

        UI.player.src = radio.stream;

        UI.player.play().catch(error => {
            console.log("Error al reproducir radio:", error);
        });

    }

    guardarUltimaRadio(radio.nombre);

}


/*=========================================================
  CARGAR TELEVISIÓN
=========================================================*/

function cargarTV(tv) {

    App.medioActual = "tv";

    detenerTV();
    detenerHLS();

    UI.player.pause();
    UI.player.removeAttribute("src");
    UI.player.load();

    cambiarLogo(tv.logo);

    cambiarInformacion(
        tv.nombre,
        "Live Music Television"
    );

    UI.tvPlayer.style.display = "block";

    if (Hls.isSupported()) {

        App.tvHls = new Hls();

        App.tvHls.attachMedia(UI.tvPlayer);

        App.tvHls.on(
            Hls.Events.MEDIA_ATTACHED,
            () => {

                App.tvHls.loadSource(tv.stream);

            }
        );

        App.tvHls.on(
            Hls.Events.MANIFEST_PARSED,
            () => {

                UI.tvPlayer.play().catch(error => {
                    console.log("Error al reproducir TV:", error);
                });

            }
        );

        App.tvHls.on(
            Hls.Events.ERROR,
            (event, data) => {

                console.log("ERROR TV:", data);

            }
        );

    } else {

        UI.tvPlayer.src = tv.stream;

        UI.tvPlayer.play().catch(error => {
            console.log("Error al reproducir TV:", error);
        });

    }

}


/*=========================================================
  CONTROL DEL MINI REPRODUCTOR
=========================================================*/

function alternarReproduccion() {

    if (App.medioActual === "tv") {

        if (UI.tvPlayer.paused) {

            UI.tvPlayer.play().catch(error => {
                console.log("Error al reanudar TV:", error);
            });

        } else {

            UI.tvPlayer.pause();

        }

        return;

    }

    if (App.medioActual === "radio") {

        if (UI.player.paused) {

            UI.player.play().catch(error => {
                console.log("Error al reanudar radio:", error);
            });

        } else {

            UI.player.pause();

        }

        return;

    }

    if (App.radioActual) {

        cargarRadio(App.radioActual);

    }

}


/*=========================================================
  CONSTRUCCIÓN DE TARJETAS
=========================================================*/

function crearTarjetaRadio(radio) {

    const card = document.createElement("div");

    card.className = "radio";

    card.innerHTML = `
        <img src="${radio.logo}" alt="${radio.nombre}">
        <p>${radio.nombre}</p>
    `;

    card.addEventListener("click", () => {

        document
            .querySelectorAll("#radios .radio")
            .forEach(item => item.classList.remove("activa"));

        card.classList.add("activa");

        cargarRadio(radio);

    });

    UI.radios.appendChild(card);

}


function crearTarjetaTV(tv) {

    const card = document.createElement("div");

    card.className = "radio";

    card.innerHTML = `
        <img src="${tv.logo}" alt="${tv.nombre}">
        <p>${tv.nombre}</p>
    `;

    card.addEventListener("click", () => {

        document
            .querySelectorAll("#tvs .radio")
            .forEach(item => item.classList.remove("activa"));

        card.classList.add("activa");

        cargarTV(tv);

    });

    UI.tvs.appendChild(card);

}


function crearTarjetaShow(show) {

    const card = document.createElement("div");

    card.className = "show-card";

    card.innerHTML = `

        <img src="${show.logo}" alt="${show.nombre}">

        <div class="show-right">

            <div class="show-label">
                Live Show
            </div>

            <div class="show-time">
                ${show.horario}
            </div>

        </div>

    `;

    card.addEventListener("click", () => {

        window.open(show.youtube, "_blank");

    });

    UI.shows.appendChild(card);

}


/*=========================================================
  EVENTOS DE REPRODUCCIÓN
=========================================================*/


/*=========================================================
  EVENTOS DE REPRODUCCIÓN
=========================================================*/

// RADIO: comienza a reproducirse
UI.player.addEventListener("play", () => {

    if (App.medioActual !== "radio") return;

    actualizarEstado("LIVE");
    actualizarIconoNav("radio");

    UI.miniPlay.innerHTML = ICON_PAUSE;

});

// RADIO: pausa
UI.player.addEventListener("pause", () => {

    if (App.medioActual !== "radio") return;

    actualizarEstado("PAUSED");
    actualizarIconoNav(null);

    UI.miniPlay.innerHTML = ICON_PLAY;

});

// RADIO: termina
UI.player.addEventListener("ended", () => {

    if (App.medioActual !== "radio") return;

    actualizarEstado("STOPPED");
    actualizarIconoNav(null);

    UI.miniPlay.innerHTML = ICON_PLAY;

});

// TV: comienza a reproducirse
UI.tvPlayer.addEventListener("play", () => {

    if (App.medioActual !== "tv") return;

    actualizarEstado("LIVE");
    actualizarIconoNav("tv");

    UI.miniPlay.innerHTML = ICON_PAUSE;

});

// TV: pausa
UI.tvPlayer.addEventListener("pause", () => {

    if (App.medioActual !== "tv") return;

    actualizarEstado("PAUSED");
    actualizarIconoNav(null);

    UI.miniPlay.innerHTML = ICON_PLAY;

});

// TV: termina
UI.tvPlayer.addEventListener("ended", () => {

    if (App.medioActual !== "tv") return;

    actualizarEstado("STOPPED");
    actualizarIconoNav(null);

    UI.miniPlay.innerHTML = ICON_PLAY;

});



/*=========================================================
  PANTALLA COMPLETA
=========================================================*/

UI.logo.addEventListener("click", () => {

    document.body.classList.toggle("fullscreen");

});


/*=========================================================
  NAVEGACIÓN INFERIOR ESTILO SPOTIFY
=========================================================*/

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        const targetId = item.dataset.target;

        const target = document.getElementById(targetId);

        if (!target) return;

        navItems.forEach(button => {
            button.classList.remove("activa");
        });

        item.classList.add("activa");

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/*=========================================================
  INICIALIZACIÓN DE BEATZ
=========================================================*/

// Crear tarjetas de radios
radios.forEach(radio => {
    crearTarjetaRadio(radio);
});

// Crear tarjetas de televisión
tvs.forEach(tv => {
    crearTarjetaTV(tv);
});

// Crear programas destacados
shows.forEach(show => {
    crearTarjetaShow(show);
});


/*=========================================================
  CONFIGURACIÓN DEL TEMA
=========================================================*/

const temaGuardado = localStorage.getItem("tema") || "light";

aplicarTema(temaGuardado);


/*=========================================================
  RECUPERAR ÚLTIMA RADIO
=========================================================*/

const ultimaRadio = localStorage.getItem("ultimaRadio");

if (ultimaRadio) {

    const radioGuardada = radios.find(
        radio => radio.nombre === ultimaRadio
    );

    if (radioGuardada) {

        App.radioActual = radioGuardada;

        cambiarLogo(radioGuardada.logo);

        cambiarInformacion(
            radioGuardada.nombre,
            radioGuardada.descripcion
        );

    }

}


/*=========================================================
  CONFIGURACIÓN DE VOLUMEN
=========================================================*/

UI.player.volume = CONFIG.volumenInicial;

UI.tvPlayer.volume = CONFIG.volumenInicial;


/*=========================================================
  BOTÓN PLAY / PAUSE DEL MINI-REPRODUCTOR
=========================================================*/

UI.miniPlay.innerHTML = ICON_PLAY;

UI.miniPlay.addEventListener("click", alternarReproduccion);


/*=========================================================
  BOTÓN PARA CAMBIAR EL TEMA
=========================================================*/

UI.themeToggle.addEventListener("click", cambiarTema);


/*=========================================================
  ESTADO INICIAL
=========================================================*/

actualizarEstado(CONFIG.estadoInicial);



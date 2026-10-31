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

    <rect
        x="7.4"
        y="5.4"
        width="2.6"
        height="13.2"
        rx="1.3"
        fill="white">
    </rect>

    <rect
        x="14"
        y="5.4"
        width="2.6"
        height="13.2"
        rx="1.3"
        fill="white">
    </rect>

</svg>
`;


/*=========================================================
  ESTADO DE LA APLICACIÓN
=========================================================*/

const App = {

    radioActual:null,

    hls:null,

    tvHls:null,

    estado:CONFIG.estadoInicial,

    signalX:20,

    signalAnimation:null

};


/*=========================================================
  DATOS
=========================================================*/

const radios = [

    {
        nombre:"m2o Radio",
        descripcion:"Musica Allo Stato Puro",
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
        logo:"logos/oneworld.png",
        stream:"https://playerservices.streamtheworld.com/api/livestream-redirect/OWR_INTERNATIONAL_ADP.m3u8"
    },

    {
        nombre:"Ibiza Global Radio",
        descripcion:"The Sound of Ibiza",
        logo:"logos/ibiza.png",
        stream:"https://cdn-peer022.streaming-pro.com:8024/ibizaglobalradio.mp3"
    },
	
	{
    	nombre:"Aura FM",
    	descripcion:"La energía que suena!",
    	logo:"logos/aura.png",
    	stream:"https://stream.miradio.in/proxy/aura/stream"
	},

	{
    	nombre:"ABC",
    	descripcion:"¡La excelencia hecha radio!",
    	logo:"logos/abc.png",
    	stream:"https://streaming.rcs.com.sv/proxy/abc/stream"
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
        nombre:"TotalMusic 00s",
        logo:"logos/totalmusic-00s.png",
        stream:"https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_00s/SA_LIVE_hls_enc/master.m3u8"
    },

	{
        nombre:"TotalMusic Dance",
        logo:"logos/totalmusicdance.png",
        stream:"https://cdn.global.elektamedia.com/live/c7eds/Totalmusic_Dance/SA_LIVE_hls_enc/master.m3u8"
    },

	{
    	nombre:"Music Box Classic",
    	logo:"logos/musicboxclassic.png",
    	stream:"https://beatz-musicbox-proxy.oscarlenyk.workers.dev/mbclassic"
	},

    {
    	nombre:"Music Box Dance",
    	logo:"logos/musicboxdance.png",
    	stream:"https://beatz-musicbox-proxy.oscarlenyk.workers.dev/mbdance"
	},

	{
    	nombre:"Music Box Hits",
    	logo:"logos/musicboxhits.png",
    	stream:"https://beatz-musicbox-proxy.oscarlenyk.workers.dev/mbhits"
	},

	{
    	nombre:"Music Box Sexy",
    	logo:"logos/musicboxsexy.png",
    	stream:"https://beatz-musicbox-proxy.oscarlenyk.workers.dev/mbsexy"
	},

	{
    	nombre:"Music Box Polska Ukraine",
    	logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Music_Box_UA_%282018%29.svg/960px-Music_Box_UA_%282018%29.svg.png",
    	stream:"https://beatz-musicbox-proxy.oscarlenyk.workers.dev/mbpolskaukraine"
	},

	{
        nombre:"That's 90s 00s",
    	logo:"logos/thats-90s00s.png",
    	stream:"https://amg01076-amg01076c19-rakuten-gb-8653.playouts.now.amagi.tv/playlist/amg01076-lightning-now90s00s-rakutengb/playlist.m3u8"
    },

	{
		nombre:"Dance TV",
		logo:"logos/dancetv.png",
    	stream:"https://m1b2.worldcast.tv/dancetelevisionone/2/dancetelevisionone.m3u8"
	}
];

const shows = [

    {
        nombre:"A State of Trance",
        logo:"logos/asot.png",
        horario:"Jue • 12:00 PM",
        youtube:"https://www.youtube.com/@astateoftrance"
    },

    {
        nombre:"Group Therapy",
        logo:"logos/grouptherapy.png",
        horario:"Vie • 1:00 PM",
        youtube:"https://www.youtube.com/@aboveandbeyond"
    },

    {
        nombre:"Future Sound of Egypt",
        logo:"logos/fsoe.png",
        horario:"Mie • 1:00 PM",
        youtube:"https://www.youtube.com/@FutureSoundOfEgypt"
    },

    {
        nombre:"Corsten's Countdown",
        logo:"logos/corsten.png",
        horario:"Mie • 12:00 PM",
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

    signalPulse: document.querySelector(".signal-pulse"),

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
  TEMA (LIGHT / DARK)
=========================================================*/

function aplicarTema(tema){

    document.body.classList.toggle(
        "dark",
        tema==="dark"
    );

    localStorage.setItem(
        "tema",
        tema
    );

}

function cambiarTema(){

    const oscuro =
        document.body.classList.contains(
            "dark"
        );

    aplicarTema(

        oscuro
            ? "light"
            : "dark"

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

            /* ---------- Signal Flow ---------- */

            UI.signalPulse.style.display = "block";

            // Reinicia la animación desde el inicio
            UI.signalPulse.style.animation = "none";
            UI.signalPulse.offsetHeight; // fuerza reflow
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

            /* ---------- Signal Flow ---------- */

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

            /* ---------- Signal Flow ---------- */

            UI.signalPulse.style.animation = "none";

            UI.signalPulse.style.display = "none";

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

    App.tvHls.on(
        Hls.Events.FRAG_PARSING_DATA,
        (event, data) => {
            console.log(
                "VIDEO:",
                data.type,
                "TRACKS:",
                data.tracks
            );
        }
    );

    App.tvHls.attachMedia(
        UI.tvPlayer
    );

        App.tvHls.on(
            Hls.Events.MEDIA_ATTACHED,
            ()=>{

                App.tvHls.loadSource(
                    tv.stream
                );

            }
        );

        App.tvHls.on(
    Hls.Events.MANIFEST_PARSED,
    ()=>{
        setTimeout(()=>{
            UI.tvPlayer.play().catch(
                error => {
                    console.log(
                        "Play MTV2:",
                        error
                    );
                }
            );
        }, 1000);
    }
);

		App.tvHls.on(
    Hls.Events.ERROR,
    (event, data) => {
        console.log(
            "HLS ERROR:",
            data
        );
    }
);

    }else{

        UI.tvPlayer.src =
            tv.stream;

        UI.tvPlayer.play().catch(
            error => {
                console.log(
                    "Autoplay bloqueado:",
                    error
                );
            }
        );

    }

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

        <div class="show-label">

        Live Show

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

    UI.miniPlay.innerHTML = ICON_PAUSE;

});

UI.player.addEventListener("pause",()=>{

    actualizarEstado("PAUSED");

    UI.miniPlay.innerHTML = ICON_PLAY;

});

UI.player.addEventListener("ended",()=>{

    actualizarEstado("STOPPED");

    UI.miniPlay.innerHTML = ICON_PLAY;

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



const temaGuardado =

    localStorage.getItem("tema")

    || "light";

aplicarTema(
    temaGuardado
);



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

    actualizarEstado(CONFIG.estadoInicial);

UI.miniPlay.innerHTML = ICON_PLAY;

UI.miniPlay.addEventListener("click",()=>{

    if(UI.player.paused){

        if(App.radioActual){

            cargarRadio(App.radioActual);

        }

    }else{

        UI.player.pause();

    }

});

UI.themeToggle.addEventListener("click",()=>{

    cambiarTema();

});

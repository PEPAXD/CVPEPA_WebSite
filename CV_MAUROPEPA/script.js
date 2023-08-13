let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("PostProduccion");
        habilidades[1].classList.add("Generalidad3D");
        habilidades[2].classList.add("DiseñoDigital");
        habilidades[3].classList.add("UXUI");
        habilidades[4].classList.add("herramientasDigitales");
        habilidades[5].classList.add("Animacion");
        habilidades[6].classList.add("hardware");
        habilidades[7].classList.add("redes");
        habilidades[8].classList.add("programacion");
        habilidades[9].classList.add("web");
        habilidades[10].classList.add("mobil");
        habilidades[11].classList.add("game");
    
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//Detectar teclas <-- --> 
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        showNextSlide();
    } else if (event.key === "ArrowLeft") {
        showPreviousSlide();
    }
});

// Define funciones para mostrar el siguiente y el anterior slide
function showNextSlide() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber++;
    if (slideNumber > numberOfSlides - 1) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
}

function showPreviousSlide() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber--;
    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
}

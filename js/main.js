let currentLang = localStorage.getItem('lang') || 'es';
const btnSwitch = document.querySelector('#switch');
const switchLang = document.querySelector('#language_switch')

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light');
    btnSwitch.classList.toggle('active');
});

function initTooltip(){
    $('[data-toggle="tooltip"]').tooltip();
}

function translateStaticText(){
    const elements = document.querySelectorAll('[data-translate]')
    elements.forEach(element => {
        const key = element.getAttribute('data-translate')
        element.textContent = translations[currentLang].static[key]
    })
}

function renderExperience(expData){
    const container = document.getElementById("exp-container");
    container.innerHTML = ''
    expData.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'item row';

        item.innerHTML = `
            <a class="col-md-4 col-sm-4 col-xs-12" >
            <img class="img-responsive project-image" src="${exp.imagen}" />
            </a>

            <div class="desc col-md-8 col-sm-8 col-xs-12">
                <h3 class="title">${exp.empresa}</h3>
                <p class="summary">${exp.contrato}<p>

                <p class="summary">${exp.descripcion}</p>
                <div class="desc text-left">
                    <ul>${exp.actividades.map(act => `<li>${act}</li>`).join('')}</ul>
                </div>
            </div>   
        `
    container.appendChild(item);
});
}

function renderStack(technologies){
    const stack = document.getElementById("technologic-stack");
    stack.innerHTML = ''
    technologies.forEach(dat => {
        const item = document.createElement('div');
        item.className= 'item';

        item.innerHTML = `
            <div class="item">
            <h3 class="level-title">${dat.lenguage}<span class="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to add more info..."></span></h3>
            ${dat.logos.map(logo => 
                `<img class="logos" src="${logo}" alt="${dat.lenguage}">`
            ).join('')}
        `
    stack.appendChild(item);
    })
}


function renderProjects(projects){
    const carousel = document.getElementById("carousel_elements");
    const indicators = document.querySelector('#carrusel .carousel-indicators');

    carousel.innerHTML= '';
    indicators.innerHTML = '';

    projects.forEach((dat,index) => {

    const item = document.createElement('div')
    item.className = 'item featured text-center';

    if(index == 0){
        item.classList.add('active');
    }

    item.innerHTML = `

            <h3 class="title">
                <a href="${dat.hypervincule}" data-toggle="tooltip" title="Ir al repositorio" target="_blank">
                    ${dat.name}
                </a>
            </h3>

            <p class="summary"> ${dat.description}
            </p>
            <div class="featured-image">
                <img class="img-responsive project-image"  src="${dat.image}">
            </div>

            <div class="desc text-justify">
                <p>
                    ${dat.text}
                </p>
            </div>
    `
    carousel.appendChild(item)

    const li = document.createElement('li');
    
    li.setAttribute('data-target', '#carrusel');
    li.setAttribute('data-slide-to', index);

    if(index == 0){
        li.classList.add('active');
    }

    indicators.appendChild(li);
    });
    $('#carrusel').carousel();
}

function renderPage(){
    const data = translations[currentLang]
    translateStaticText()
    renderExperience(data.exp)
    renderStack(data.lenguages)
    renderProjects(data.projects)
    initTooltip()
}

function changeLanguage(lang){
    currentLang = lang;
    localStorage.setItem('lang', lang);
    renderPage();
}

document.addEventListener("DOMContentLoaded", () => {
    renderPage()
})



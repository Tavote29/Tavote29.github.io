const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light');
    
    btnSwitch.classList.toggle('active');
});

function initTooltip(){
    $('[data-toggle="tooltip"]').tooltip();
}

$(document).ready(function(){
    initTooltip();
})

const container = document.getElementById("exp-container");

exp.forEach(exp => {
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
        <ul>
          ${exp.actividades.map(act => `<li>${act}</li>`).join('')}
        </ul>
      </div>
    </div>   
    `
    container.appendChild(item);
});

const stack = document.getElementById("technologic-stack");
lenguages.forEach(dat => {
    const item = document.createElement('div');
    item.className= 'item';

    item.innerHTML = `
        <div class="item">
            <h3 class="level-title">${dat.lenguage}<span class="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to add more info..."></span></h3>
             ${dat.logos.map(logo => 
            `<img class="logos" src="${logo}" alt="${exp.lenguage}">`
        ).join('')}
    `

    stack.appendChild(item);
})

document.addEventListener("DOMContentLoaded", () => {

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


})

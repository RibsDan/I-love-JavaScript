




function funcHora(segundos) {
    let hora = new Date(segundos * 1000);
    return hora.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' });
}
//console.log(funcHora(10));

let relogio = document.querySelector('.relogio')
let comecou = document.querySelector('.iniciar')
let parou = document.querySelector('.parar');
let zerou = document.querySelector('.zerar');
let segundos = 0;
let timer;

function funcionaRelogio() {
    timer = setInterval(function () {
        segundos++
        relogio.innerHTML = funcHora(segundos)
    }, 1000);
};



comecou.addEventListener('click', function () {
    clearInterval(timer);
    funcionaRelogio();
})
parou.addEventListener('click', function () {
    clearInterval(timer);
})
zerou.addEventListener('click', function () {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
})





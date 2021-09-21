function mostraHora() {
    let hora = new Date();

    return hora.toLocaleString('pt-BR', {
      hour12: false
    });
}

function funcaoDoInterval() {
    console.log(mostraHora());
};
let timer = setInterval(function() {
  console.log (mostraHora());
} , 1000)

setTimeout(function(){
  clearInterval(timer);
}, 10000);
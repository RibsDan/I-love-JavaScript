const pegaContainer = document.querySelector('.paragrafos');
const ps = pegaContainer.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const corDoBody = estilosBody.backgroundColor;
console.log(corDoBody);

for (let p of ps){
    p.style.backgroundColor = corDoBody;
    p.style.color = '#ffffff';
}
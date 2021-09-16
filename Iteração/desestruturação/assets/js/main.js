const elementos = [
    {tag:'p', texto:'texto 1'},
    {tag:'div', texto:'texto 2'},
    {tag:'section', texto:'texto 3'},
    {tag:'footer', texto:'texto 4'}
];
const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto; //Outraforma=>let textoCriado=document.createTextNode(texto); 
                                 //tagCriada.appendChild(textoCriado);  
    div.appendChild(tagCriada);
};
container.appendChild(div);


  

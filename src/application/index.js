let home = document.getElementById('home');
let portfolio = document.getElementById('portfolio');
let conteudo = document.getElementById('conteudo');
let sobre = document.getElementById('sobre');

function toggleOption(id) {
    let option = document.getElementById(id);
    option.classList.toggle("active");
    console.log(id)
}

function referencia(id){
    let referencia = '';
    for(let i = 0; id[i] !='-'; i++){

        id[i]!='-'?referencia += id[i]:null;  

    }
    console.log(referencia)
    let option = document.getElementById(referencia);
    option.classList.toggle("active");
    let page = document.getElementById(id);
    page.classList.toggle('active');
}


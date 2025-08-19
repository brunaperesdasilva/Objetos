const secoes = document.querySelectorAll('.secao');
function mostrarSecao(id){
    secoes.forEach(secao => secao.classList.remove('ativo'));
    document.getElementById(id).classList.add('ativo');
}

const inputPasso = document.getElementById('passo');
const spanValor = document.getElementById('valorContador');
const incremento = document.getElementById('incremento');
const decremento = document.getElementById('decremento');
let resultado = 0;

function getPasso(){ return inputPasso.value ? Number(inputPasso.value) : 1; }
function atualizarValor(){ spanValor.textContent = resultado; }

incremento.addEventListener('click', () => { resultado += getPasso(); atualizarValor(); });
decremento.addEventListener('click', () => { resultado -= getPasso(); atualizarValor(); });

const btnSalvar = document.getElementById('btnSalvar');
const imagens = [];

btnSalvar.addEventListener('click', salvar);

function salvar(){
    const nome = document.getElementById('nome');
    const url = document.getElementById('img');

    if(nome.value !== "" && url.value !== ""){

        const existe = imagens.some(img => img.url === url.value);
        if(existe){
            alert("Essa imagem já está cadastrada!");
            return;
        }

        const imagem = { nome: nome.value, url: url.value };
        imagens.push(imagem);

        nome.value = "";
        url.value = "";

        apresentar(); 
        mostrarSecao('galeria'); 
    } else {
        alert("Preencha todos os campos!");
    }
}

const cardsContainer = document.getElementById('cardsContainer');

function card(imagem){
    const div = document.createElement('div');
    div.classList.add('card');

    const h2 = document.createElement('h2');
    h2.textContent = imagem.nome;

    const img = document.createElement('img');
    img.src = imagem.url;
    img.alt = imagem.nome;

    div.appendChild(img); 
    div.appendChild(h2);  

    return div;
}

function apresentar(){
    cardsContainer.innerHTML = "";

    imagens.forEach(img => cardsContainer.appendChild(card(img)));
}

const frameworks = [
    {nome: "Angular", url: "https://angular.io/assets/images/logos/angular/angular.png"},
    {nome: "Django", url: "https://static.djangoproject.com/img/logos/django-logo-positive.png"},
    {nome: "Laravel", url: "https://laravel.com/img/logotype.min.svg"},
    {nome: "NodeJS", url: "https://nodejs.org/static/images/logo.svg"},
    {nome: "React", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
    {nome: "Svelte", url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"},
    {nome: "Vue", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"}
];

frameworks.forEach(fw => imagens.push(fw));
apresentar();

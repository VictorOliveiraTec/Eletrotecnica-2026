/* MAIN */
const cards = {
  materias: document.querySelector('#Materias'),
  normas: document.querySelector('#Normas-Tecnicas'),
  senai: document.querySelector('#Senai')
};

const botoes = {
  materias: document.querySelector('.btn-card1'),
  normas: document.querySelector('.btn-card2'),
  senai: document.querySelector('.btn-card3')
};

// MATERIA
const materiaisconteudo = document.querySelector('#Materias-Conteudo');

// Estado do painel
let cardactivematerias = false;
let cardactivenormastecnicas = false;
let cardactivesenai = false;

// Evento de clique

botoes.materias.addEventListener('click', () => {
    cardactivenormastecnicas = !cardactivenormastecnicas;
    cardactivesenai = !cardactivesenai;

    if (cardactivenormastecnicas  && cardactivesenai) {
        cards.normas.classList.add('hidden');
        cards.senai.classList.add('hidden');
        console.log('Painel aberto');
    } else {
        cards.normas.classList.remove('hidden');
        cards.senai.classList.remove('hidden');
        console.log('Painel fechado');
    }
});

botoes.normas.addEventListener('click', () => {
    cardactivematerias = !cardactivematerias;
    cardactivesenai = !cardactivesenai;

    if (cardactivematerias && cardactivesenai){
        cards.materias.classList.add('hidden');
        cards.senai.classList.add('hidden');
        console.log('Painel aberto');
    } else {
        cards.materias.classList.remove('hidden');
        cards.senai.classList.remove('hidden');
        console.log('Painel fechado');
    }
});

botoes.senai.addEventListener('click', () => {
    cardactivenormastecnicas = !cardactivenormastecnicas;
    cardactivematerias = !cardactivematerias;

    if (cardactivenormastecnicas && cardactivematerias) {
        cards.materias.classList.add('hidden');
        cards.normas.classList.add('hidden');
        console.log('Painel aberto');
    } else {
        cards.materias.classList.remove('hidden');
        cards.normas.classList.remove('hidden');
        console.log('Painel fechado');
    }
});
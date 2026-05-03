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

const config = {
  materias: ['normas', 'senai'],
  normas: ['materias', 'senai'],
  senai: ['materias', 'normas']
};

let cardactive = {
    materias: false,
    normastecnicas: false,
    senai: false
};
/*
// função central
const togglePainel = (alvos) => {
  alvos.forEach(k => cardactive[k] = !cardactive[k]);
  const aberto = alvos.every(k => cardactive[k]);
    alvos.forEach(k => {
        cards[k].classList.toggle('hidden', aberto);
        console.log(cards[k]);
    });

  console.log(aberto ? 'Painel aberto' : 'Painel fechado');
};

// binding automático
Object.keys(config).forEach(key => {
  botoes[key].addEventListener('click', () => {
    togglePainel(config[key]);
  });
});*/

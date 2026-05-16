const main = document.querySelector('#conteudo');

const paginas = {
  home: {
    titulo: 'Bem-vindo ao nosso site da Eletrotécnica 2026!',
    center: true,
    cards: [
      {
        titulo: 'Matérias',
        descricao: 'Acesso a algumas matérias já concluídas.',
        imagem: 'assets/imgs/logo senai.png',
        pagina: 'materias'
      },
      {
        titulo: 'Normas Técnicas',
        descricao: 'Acesso às normas técnicas.',
        imagem: 'assets/imgs/logo senai.png',
        pagina: 'normas'
      },
      {
        titulo: 'Senai',
        descricao: 'Links relacionados ao Senai em geral.',
        imagem: 'assets/imgs/logo senai.png',
        pagina: 'senai'
      }
    ]
  },

  materias: {
    titulo: 'Matérias',
    cards: [
      {
        titulo: 'CIRCUITOS ELÉTRICOS I',
        descricao: 'CIRCUITOS ELÉTRICOS I',
        link: 'https://drive.google.com/drive/folders/1QYVJJ2oUnPy-72r7n6krxdBaefBOMSDr?usp=sharing'
      },
      {
        titulo: 'SAÚDE, SEGURANÇA DO TRABALHO E MEIO AMBIENTE',
        descricao: 'SAÚDE, SEGURANÇA DO TRABALHO E MEIO AMBIENTE',
        link: 'https://drive.google.com/drive/folders/15_ybpuk88k_FoBRCAppBtg8xlxNSmk_m?usp=sharing'
      },
      {
        titulo: 'CIRCUITOS ELÉTRICOS II',
        descricao: 'CIRCUITOS ELÉTRICOS II',
        link: 'https://drive.google.com/drive/folders/1liihAWNyUccafC5A9UGfqIIIvUF7jEri?usp=sharing'
      },
      {
        titulo: 'INSTALAÇÕES DE SISTEMAS ELÉTRICOS DE POTÊNCIA - SEP',
        descricao: 'INSTALAÇÕES DE SISTEMAS ELÉTRICOS DE POTÊNCIA - SEP',
        link: 'https://drive.google.com/drive/folders/1_WoBht6ZS1TljuGRZpjCXDZc8pxnq-MY?usp=sharing'
      },
      {
        titulo: 'GESTÃO DA MANUTENÇÃO',
        descricao: 'GESTÃO DA MANUTENÇÃO',
        link: 'https://drive.google.com/drive/folders/1fKkCcEbFu-ZHr1NWxFolF0fEJlyFeLZy?usp=sharing'
      },
      {
        titulo: 'MANUTENÇÕES DE SISTEMAS ELÉTRICOS DE POTÊNCIA - SEP',
        descricao: 'MANUTENÇÕES DE SISTEMAS ELÉTRICOS DE POTÊNCIA - SEP',
        link: 'https://drive.google.com/drive/folders/12bIk-fA5nfgvFH3JV6Dz7miGF8tBRtJ6?usp=sharing'
      }
    ]
  },

  normas: {
    titulo: 'Normas Técnicas',
    cards: [
      {
        titulo: 'TinkerCad',
        descricao: 'Base do Senai, informações básicas.',
        link: 'https://www.tinkercad.com/'
      },
      {
        titulo: 'Site Norma ABNT',
        descricao: 'Portal da ABNT.',
        link: 'https://www.abntcolecao.com.br/'
      },
      {
        titulo: 'Woka Instalações Eletricas',
        descricao: 'Informações sobre instalações elétricas.',
        link: 'https://www.woka.com.br/instalacoes-eletricas'
      }
    ]
  },

  senai: {
    titulo: 'Senai',
    cards: [
      {
        titulo: 'Portal Senai',
        descricao: 'Informações básicas do Senai.',
        link: 'https://meusenai.senai.br/'
      },
      {
        titulo: 'Portal Fiemg',
        descricao: 'Portal do aluno.',
        link: 'https://portaldoaluno.fiemg.com.br/'
      },
      {
        titulo: 'Biblioteca Senai',
        descricao: 'Acesso à biblioteca.',
        link: 'https://bibliotecasesisenai.fiemg.com.br/'
      }
    ]
  }
};

function renderizarPagina(nomePagina) {

  const pagina = paginas[nomePagina];

  const cardsHTML = pagina.cards.map(card => {

    // CARD DA HOME
    if (card.pagina) {
      return `
        <div class="card">
          <img src="${card.imagem}" alt="${card.titulo}" class="img-cards">

          <h2>${card.titulo}</h2>

          <p>${card.descricao}</p>

          <button data-page="${card.pagina}">
            Acessar
          </button>
        </div>
      `;
    }

    // CARD NORMAL
    return `
      <div class="card-conteudo">

        <h3>${card.titulo}</h3>

        <p>${card.descricao}</p>

        <a href="${card.link}" target="_blank">
          <button>Acessar</button>
        </a>

      </div>
    `;
  }).join('');

  main.innerHTML = `
  
    <h2>${pagina.titulo}</h2>

    <div 
      id="${pagina.center ? 'base-conteudo-center' : 'base-conteudo'}"
    >
      ${cardsHTML}
    </div>

  `;

  adicionarEventos();
}

function adicionarEventos() {

  const botoes = document.querySelectorAll('[data-page]');

  botoes.forEach(botao => {

    botao.addEventListener('click', () => {

      const pagina = botao.dataset.page;

      renderizarPagina(pagina);

    });

  });

}
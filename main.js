const main = document.querySelector('#conteudo');
const Title = document.title;

const paginas = {
  home: {
    title: 'Eletrotécnica 2026',
    titulo: 'Eletrotécnica 2026',
    imagem: '',
    center: true,
    cards: [
      {
        titulo: 'Normas Técnicas',
        descricao: 'Acesso às normas técnicas.',
        image: 'assets/imgs/icone-normas-tecnica.png',
        pagina: 'normas'
      },
      {
        titulo: 'Matérias',
        descricao: 'Acesso a algumas matérias já concluídas.',
        image: 'assets/imgs/icone-pasta.png',
        pagina: 'materias'
      },
      {
        titulo: 'Sites',
        descricao: 'Links para sites úteis.',
        image: 'assets/imgs/icone-Sites.png',
        pagina: 'sites'
      },
      {
        titulo: 'SENAI',
        descricao: 'Links relacionados ao SENAI em geral.',
        image: 'assets/imgs/icone-senai.png',
        pagina: 'senai'
      }
    ]
  },

  materias: {
    title: 'Eletrotécnica 2026 - Matérias',
    titulo: 'Matérias',
    imagem: 'assets/imgs/icone-pasta.svg',
    cards: [
      {
        titulo: 'CIRCUITOS ELÉTRICOS I',
        descricao: 'CIRCUITOS ELÉTRICOS I',
        link1: '',
        link2: 'https://drive.google.com/drive/folders/1QYVJJ2oUnPy-72r7n6krxdBaefBOMSDr?usp=sharing'
      },
      {
        titulo: 'SAÚDE, SEGURANÇA DO TRABALHO E MEIO AMBIENTE',
        descricao: 'SAÚDE, SEGURANÇA DO TRABALHO E MEIO AMBIENTE',
        link1: '',
        link2: 'https://drive.google.com/drive/folders/15_ybpuk88k_FoBRCAppBtg8xlxNSmk_m?usp=sharing'
      },
      {
        titulo: 'CIRCUITOS ELÉTRICOS II',
        descricao: 'CIRCUITOS ELÉTRICOS II',
        link1: '',
        link2: 'https://drive.google.com/drive/folders/1liihAWNyUccafC5A9UGfqIIIvUF7jEri?usp=sharing'
      },
      {
        titulo: 'INSTALAÇÕES DE SISTEMAS ELÉTRICOS DE POTÊNCIA - SEP',
        descricao: 'INSTALAÇÕES DE SISTEMAS ELÉTRICOS DE POTÊNCIA - SEP',
        link1: '',
        link2: 'https://drive.google.com/drive/folders/1_WoBht6ZS1TljuGRZpjCXDZc8pxnq-MY?usp=sharing'
      },
      {
        titulo: 'GESTÃO DA MANUTENÇÃO',
        descricao: 'GESTÃO DA MANUTENÇÃO',
        link1: '',
        link2: 'https://drive.google.com/drive/folders/1fKkCcEbFu-ZHr1NWxFolF0fEJlyFeLZy?usp=sharing'
      },
      {
        titulo: 'MANUTENÇÕES DE SISTEMAS ELÉTRICOS DE POTÊNCIA - SEP',
        descricao: 'MANUTENÇÕES DE SISTEMAS ELÉTRICOS DE POTÊNCIA - SEP',
        link1: '',
        link2: 'https://drive.google.com/drive/folders/12bIk-fA5nfgvFH3JV6Dz7miGF8tBRtJ6?usp=sharing'
      },
      {
        titulo: 'INSTALAÇÕES ELÉTRICAS INDÚSTRIAS',
        descricao: 'INSTALAÇÕES ELÉTRICAS INDÚSTRIAS',
        link1: '',
        link2: 'https://drive.google.com/drive/folders/1vtcx5wxK6kR5bPDRm_DL5EGtkh53Neem?usp=sharing'
      },
      {
        titulo: 'INTRODUÇÃO À INDÚSTRIA 4.0 ',
        descricao: 'INTRODUÇÃO À INDÚSTRIA 4.0 ',
        link1: '',
        link2: 'https://drive.google.com/drive/folders/1nQy-qKLS5-x6gMQJdGHDhtvvcO5S51ju?usp=sharing'
      }
    ]
  },

  normas: {
    title: 'Eletrotécnica 2026 - Normas Técnicas',
    titulo: 'Normas Técnicas',
    cards: [
      {
        titulo: 'Site Norma ABNT',
        descricao: 'Portal da ABNT.',
        link: 'https://www.abntcolecao.com.br/'
      },
      {
        titulo: 'Normas Tecnicas Cemig',
        descricao: 'Normas Tecnicas Cemig',
        link: 'https://www.cemig.com.br/normas-tecnicas/'
      }
    ]
  },

  senai: {
    title: 'Eletrotécnica 2026 - Senai',
    titulo: 'Senai',
    imagem: 'assets/imgs/icone-senai.svg',
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
  },

  sites: {
    title: 'Eletrotécnica 2026 - Sites',
    titulo: 'Sites',
    imagem: 'assets/imgs/icone-sites.svg',
    cards: [
      {
        titulo: 'Woka Instalações Eletricas',
        descricao: 'Informações sobre instalações elétricas.',
        link: 'https://www.woka.com.br/instalacoes-eletricas'
      },

      {
        titulo: 'WOKWI',
        descricao: 'Simulador Arduinos, Esp32...',
        link: 'https://wokwi.com/pricing?ref=header'
      },
      {
        titulo: 'Medium',
        descricao: 'Artigos Gerais',
        link: 'https://medium.com/'
      },
      {
        titulo: 'EPE',
        descricao: 'Empresa de Pesquisa Energética',
        link: 'https://www.epe.gov.br/pt'
      },
      {
        titulo: 'ONS',
        descricao: 'Operador Nacional Do Sistema Eletrico',
        link: 'https://www.ons.org.br/'
      },
      {
        titulo: 'TinkerCad',
        descricao: 'Base do Senai, informações básicas.',
        link: 'https://www.tinkercad.com/'
      },
      {
        titulo: 'Portal Da Industria',
        descricao: 'Portal Da Industria',
        link: 'https://www.sistemaindustria.portaldaindustria.com.br/home'
      }
    ]
  }
};

function renderizarPagina(nomePagina) {

  const pagina = paginas[nomePagina];

  document.title = pagina.title;

  const cardsHTML = pagina.cards.map(card => {

    // CARD DA HOME
    if (card.pagina) {
      return `
      <div id="base-conteudo-center" class="base-conteudo-principal">
        <div class="card">
          <img src="${card.image}" alt="${card.titulo}" class="img-cards-central">
          <h2>${card.titulo}</h2>

          <p>${card.descricao}</p>

          <button data-page="${card.pagina}">
            Acessar
          </button>
        </div>
      </div>
      `;
    }
    if (nomePagina === 'materias'){
      return `
      <div id="base-conteudo-materia" class="base-conteudo-principal">
        <div class="card-materia">
            <p class="titulo-materia">${card.titulo}</p>
            <p class="descricao-materia">${card.descricao}</p>
            <button class="button-materia-text" onclick="window.open('${card.link1}', '_blank')">
              <img src="assets/imgs/envelope-texto-aberto.svg" alt="Text" class="img-cards">
              <p>Acessar</p>
            </button>
            <button class="button-materia-drive" onclick="window.open('${card.link2}', '_blank')">
              <img src="assets/imgs/disco.svg" alt="Text" class="img-cards">
              <p>Acessar</p>
            </button>
          </div>
      </div>
      `;
    }
    // CARD NORMAL
    return `
      <div class="card-conteudo">      
        <h3>${card.titulo}</h3>

        <p>${card.descricao}</p>

        <button onclick="window.open('${card.link}', '_blank')">Acessar</button>

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
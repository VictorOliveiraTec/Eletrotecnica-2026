
const main = document.querySelector('#conteudo')

function trocarConteudo() {

  main.innerHTML = `
  
  <h1>Bem-vindo ao nosso site da Eletrotécnica 2026!</h1>

  <div id="base-conteudo-center">
    <div class="card" id="Materias">
      <img src="assets/imgs/logo materias.png" alt="Materias" class="img-cards">
      <h2>Matérias</h2>
      <p>Acesso a algumas matérias já concluidas.</p>
      <button onclick="trocarConteudo1()">Acessar</button>
    </div>
    <div class="card" id="Normas-Tecnicas">
      <img src="assets/imgs/normas tecnicas.png" alt="Normas Tecnicas" class="img-cards">
      <h2>Normas Técnicas</h2>
      <p>Acesso às normas técnicas.</p>
      <button onclick="trocarConteudo2()">Acessar</button>     
    </div>
    <div class="card" id="Senai">
      <img src="assets/imgs/logo senai.png" alt="Senai" class="img-cards">
      <h2>Senai</h2>
      <p>Links relacionados ao Senai em geral.</p>
      <button onclick="trocarConteudo3()">Acessar</button>
    </div>
  </div>

  `;
}

function trocarConteudo1() {

  main.innerHTML = `
  
    <h1>Materias</h1>

    <div id="base-conteudo" class="">
        <div class="card-conteudo">
          <h3>CIRCUITOS ELÉTRICOS I</h3>
          <p>CIRCUITOS ELÉTRICOS I</p>
          <button><a href="https://drive.google.com/drive/folders/1QYVJJ2oUnPy-72r7n6krxdBaefBOMSDr?usp=sharing" target="_blank">Acessar</a></button>
       </div>
        <div class="card-conteudo">
          <h3>CIRCUITOS ELÉTRICOS II</h3>
          <p>CIRCUITOS ELÉTRICOS II</p>
          <button><a href="https://drive.google.com/drive/folders/1liihAWNyUccafC5A9UGfqIIIvUF7jEri?usp=sharing" target="_blank">Acessar</a></button>
       </div>
        <div class="card-conteudo">
          <h3>SAÚDE, SEGURANÇA DO TRABALHO E MEIO AMBIENTE</h3>
          <p>SAÚDE, SEGURANÇA DO TRABALHO E MEIO AMBIENTE</p>
          <button><a href="https://drive.google.com/drive/folders/15_ybpuk88k_FoBRCAppBtg8xlxNSmk_m?usp=sharing" target="_blank">Acessar</a></button>
       </div>
       <div class="card-conteudo">
          <h3>INSTALAÇÕES DE SISTEMAS ELÉTRICOS DE POTÊNCIA - SEP</h3>
          <p>INSTALAÇÕES DE SISTEMAS ELÉTRICOS DE POTÊNCIA - SEP</p>
          <button><a href="https://drive.google.com/drive/folders/1_WoBht6ZS1TljuGRZpjCXDZc8pxnq-MY?usp=sharing" target="_blank">Acessar</a></button>
       </div>
       <div class="card-conteudo">
          <h3>GESTÃO DA MANUTENÇÃO</h3>
          <p>GESTÃO DA MANUTENÇÃO</p>
          <button><a href="https://drive.google.com/drive/folders/1fKkCcEbFu-ZHr1NWxFolF0fEJlyFeLZy?usp=sharing" target="_blank">Acessar</a></button>
       </div>
       <div class="card-conteudo">
          <h3>MANUTENÇÕES DE SISTEMAS ELÉTRICOS DE POTÊNCIA - SEP</h3>
          <p>MANUTENÇÕES DE SISTEMAS ELÉTRICOS DE POTÊNCIA - SEP</p>
          <button><a href="" target="_blank">Acessar</a></button>
        </div>
    </div>

  `;
}

function trocarConteudo2() {

  main.innerHTML = `
  
    <h1>Normas Técnicas</h1>
    
    <div id="base-conteudo" class="hidden">
        <div class="card-conteudo">
          <h3>TinkerCad</h3>
          <p>Base do Senai, informações basicas.</p>
          <button><a href="https://www.tinkercad.com/" target="_blank">Acessar</a></button>
        </div>
        <div class="card-conteudo">
          <h3>Site Norma ABNT</h3>
          <p>Portal Do Aluno | Boletim e demais informações.</p>
          <button><a href="https://www.abntcolecao.com.br/" target="_blank">Acessar</a></button>
        </div>
        <div class="card-conteudo">
          <h3>Woka Instalações Eletricas</h3>
          <p>Woka Instalações Eletricas</p>
          <button><a href="https://woca.ocalev.com.br/projetos" target="_blank">Acessar</a></button>
        </div>
      </div>

  `;
}

function trocarConteudo3() {

  main.innerHTML = `
  
  <h1>Senai</h1>
    
    <div id="base-conteudo" class="hidden">
          <div class="card-conteudo">
            <h3>Portal Senai</h3>
            <p>Base do Senai, informações basicas.</p>
            <button><a href="https://meusenai.senai.br/" target="_blank">Acessar</a></button>
          </div>
          <div class="card-conteudo">
            <h3>Portal Fiemg</h3>
            <p>Portal Do Aluno | Boletim e demais informações.</p>
            <button><a href="https://portaldoaluno.fiemg.com.br/" target="_blank">Acessar</a></button>
          </div>
          <div class="card-conteudo">
            <h3>Biblioteca Senai</h3>
            <p>Acesso a Biblioteca Senai.</p>
            <button><a href="https://bibliotecasesisenai.fiemg.com.br/" target="_blank">Acessar</a></button>
          </div>
      </div>

  `;
}

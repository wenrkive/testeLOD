const conteudo = {
    apresentacao: `
    <style>
    .card {
    padding: 20px;
    max-width: 600px;
    width: 100%;
    height: auto; /* Ensure it can expand based on content */
}

.card h1 {
    text-align: center;
    color: rgb(192, 7, 115);
}

.card .section-title {
    font-weight: bold;
    margin-top: 20px;
    color: rgb(192, 7, 115);
}
  
    </style>
            <div class="pessoas-container">
        <div class="pessoa-card">
          <img src="/imagens/pets/mascote3.png" alt="Ana Souza" />
        </div>

        <div class="card">
        
    <h1>✨ A História da League of Divas ✨</h1>
    <p>Tudo começou de forma despretensiosa... No início, éramos apenas um pequeno grupo de amigas que jogavam LoL PC e Wild Rift juntas, compartilhando momentos, risadas e, claro, muita diversão!</p>
    <p>🌟 Não tínhamos grandes pretensões, apenas um espaço aconchegante onde podíamos nos conectar, jogar e nos apoiar.</p>
    <p>Mas algo especial estava acontecendo! <span>🌞</span> Com o tempo, mais meninas começaram a chegar, e nossa comunidade cresceu de um simples grupo para algo muito maior. Nos primeiros meses, ainda nos chamávamos "Grupo de Meninas LoL", um nome direto e simples. Mas à medida que o grupo se expandia, sentíamos que precisávamos de um nome forte, marcante e que representasse nossa essência.</p>
    <p>Foi então que começamos a debater possibilidades, buscando algo que transmitisse união, atitude e empoderamento. <span>💪💎</span> A palavra "Divas" estava em alta e ressoava perfeitamente com nossa energia! Queríamos um espaço para meninas que jogavam com confiança, presença e muita personalidade – e assim nasceu a League of Divas! <span>👑✨</span></p>
    
    <div class="section-title">🌸 Crescimento & Organização 🌸</div>
    <p>Com o crescimento da comunidade, veio o desafio de organizar tudo! <span>📝🤓</span> No início, poucas de nós ajudavam a manter o grupo, mas conforme mais meninas se juntavam, percebemos que precisávamos estruturar melhor nossa equipe. Foi assim que nasceu nossa administração, garantindo que tudo funcionasse sem perder a essência: um espaço leve, divertido e seguro para todas.</p>
    
    <div class="section-title">🏆 A Guilda no Wild Rift 🏆</div>
    <p>Um dos maiores marcos da nossa história foi a criação da nossa guilda oficial no Wild Rift! <span>🎮🔥</span> Muitas de nós já jogavam, então fazia todo sentido reunir uma guilda oficial para jogar juntas. A guilda representou melhor nossa ideia de Divas, leve, divertida e segura para todas.</p>
</div>
    `,
    eventos: `
    <style>
        .EVENT {
    padding: 20px;
    max-width: 100px;
    width: 100%;
    height: auto; /* Ensure it can expand based on content */
}
    .event H1 {
    text-align: center;
    color: rgb(192, 7, 115);
}
    </style>
         <div class="event">

    <h1>✨ EVENTO ARTISTICO ✨</h1>

    <div class="event-container">

        <div class="event-card">
            <img src="/imagens/eventos/img1.jpeg" alt="Imagem 1" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img2.jpeg" alt="Imagem 2" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img3.jpeg" alt="Imagem 3" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img4.jpeg" alt="Imagem 4" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img5.jpeg" alt="Imagem 5" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img6.jpeg" alt="Imagem 6" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img7.jpeg" alt="Imagem 7" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img8.jpeg" alt="Imagem 8" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img9.jpeg" alt="Imagem 9" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img10.jpeg" alt="Imagem 10" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img11.jpeg" alt="Imagem 11" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img12.jpeg" alt="Imagem 12" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img13.jpeg" alt="Imagem 13" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img14.jpeg" alt="Imagem 14" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img15.jpeg" alt="Imagem 15" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img16.jpeg" alt="Imagem 16" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img17.jpeg" alt="Imagem 17" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img18.jpeg" alt="Imagem 18" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img19.jpeg" alt="Imagem 19" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img20.jpeg" alt="Imagem 20" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img21.jpeg" alt="Imagem 21" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img22.jpeg" alt="Imagem 22" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img23.jpeg" alt="Imagem 23" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img24.jpeg" alt="Imagem 24" />
        </div>
        <div class="event-card">
            <img src="/imagens/eventos/img26.jpeg" alt="Imagem 26" />
        </div>
    </div>
    
        <style>

      .event p, .event .section-title {
        text-align: center; /* deixa o título e outros textos específicos centralizados */
}
        .EVENT {    
    padding: 20px;
    max-width: 100px;
    width: 100%;
    height: auto; /* Ensure it can expand based on content */
}
    .event H1 {
    text-align: center;
    color: rgb(192, 7, 115);
}
       .event H2 {
    text-align: center;
    color: rgb(248, 108, 53);
}
    </style>
         <div class="pessoas-container">
        <div class="pessoa-card">
          <img src="/imagens/pets/mascote1.png" alt="Ana Souza" />
        </div>

        <div class="event">

    <h1>✨ COMP MALUCA ✨</h1>

    <h2> como funciona? </h2>

    <div class="section-title"> Formem grupo de 5 pessoas, e sigam a comp indicada! </div>
    <p>Apoós vencer a partida, mande um print no PV da ADM (AZUL)</p>
    <p>A equipe que vencer primeiro ganha o desafio!</p>
    <p>Todas que participarem ganharam pontos.</p>

    <div class="event-container">
            <div class="event-card">
            <img src="/imagens/comp/comp2.jpg" alt="Imagem 2" />
        </div>

        <div class="event-card">
            <img src="/imagens/comp/resultado2.jpg" alt="Imagem 26" />
        </div>

          <div class="event-card">
            <img src="/imagens/comp/comp4.jpeg" alt="Imagem 2" />
        </div>

        <div class="event-card">
            <img src="/imagens/comp/resultado4.jpg" alt="Imagem 26" />
        </div>

                    <div class="event-card">
            <img src="/imagens/comp/comp5.jpg" alt="Imagem 2" />
        </div>

        <div class="event-card">
            <img src="/imagens/comp/resultado5.jpg" alt="Imagem 26" />
        </div>
`,
    quemsomos: `
            <p>Bem-vinda à League of Divas! Aqui celebramos a beleza, força e união feminina em um espaço seguro e inspirador.</p>
  
      <div class="pessoas-container">

        <div class="pessoa-card">
          <img src="/imagens/grupos/grupos da guilda.webp" alt="Ana Souza" />
        </div>

        <div class="pessoa-card">
          <img src="/imagens/grupos/arcade divas.webp" alt="Ana Souza" />
        </div>
  
        <div class="pessoa-card">
          <img src="/imagens/grupos/chat principal.webp" alt="Luiza Martins" />
        </div>

        <div class="pessoa-card">
          <img src="/imagens/grupos/desabafos.webp" alt="Luiza Martins" />
        </div>
  `,
    lojaoficial: `
      <h2>Loja Oficial</h2>
      <p>Confira nossos produtos personalizados com o selo da League of Divas. Estilo e atitude em um só lugar!</p>
    `
  };
  

// Modal handler
function openModal(imageSrc) {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  modalImage.src = imageSrc;
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Aplica o modal a todas imagens do conteúdo dinâmico
function ativarImagensModal() {
  document.querySelectorAll('#conteudo-dinamico img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => openModal(img.src));
  });
}

// Troca de conteúdo ao clicar no card
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const target = card.getAttribute('data-target');
    const container = document.getElementById('conteudo-dinamico');
    container.innerHTML = conteudo[target] || '<p>Conteúdo não encontrado.</p>';
    ativarImagensModal(); // ativa os cliques nas imagens
    container.scrollIntoView({ behavior: 'smooth' });
  });
});

// Fecha modal clicando fora da imagem
document.getElementById('modal').addEventListener('click', closeModal);
// Escuta quando o DOM estiver totalmente carregado antes de manipular elementos
document.addEventListener("DOMContentLoaded", function () {
  // Carrega o fragmento do menu a partir de `html/menu.html` e insere em #menu.
  // Se o fetch falhar (por exemplo ao abrir via file://), usa um fallback embutido.
  const menuContainer = document.getElementById("menu");

  // Se não existir o elemento com id "menu", não faz nada (evita erros em páginas sem menu)
  if (!menuContainer) return;

  // Versão usada para invalidar cache quando o menu é atualizado
  const VERSION = "2025-10-14";
  // Caminho relativo para o arquivo do menu; o `?v=` ajuda a forçar recarregamento quando houver mudanças
  const menuPath = `../html/menu.html?v=${VERSION}`;

  // Função que melhora a interação do dropdown em dispositivos com suporte a hover (desktop)
  function enhanceDropdownHover(root){
    // Abre o <details> ao passar o mouse (hover) apenas em dispositivos que realmente suportam hover
    try{
      // Verifica via matchMedia se o ambiente suporta hover
      const mq = window.matchMedia && window.matchMedia('(hover: hover)');
      // Se não houver matchMedia ou não suportar hover, sai sem alterar comportamento
      if (!mq || !mq.matches) return;

      // Procura o elemento <details> com classe `menu-dropdown` dentro do root fornecido
      const details = root.querySelector('details.menu-dropdown');
      // Se não encontrar, nada a fazer
      if (!details) return;

      // Timer auxiliar para atrasar o fechamento — evita flicker quando o mouse passa rápido
      let closeTimer = null;

      // Abre o details imediatamente (limpa timer de fechamento se existir)
      const openNow = () => {
        if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
        details.setAttribute('open','');
      };

      // Fecha o details com um pequeno atraso para permitir transições suaves do mouse
      const closeWithDelay = () => {
        if (closeTimer) clearTimeout(closeTimer);
        closeTimer = setTimeout(() => details.removeAttribute('open'), 120);
      };

      // Associa eventos de mouse para abrir/fechar no hover
      details.addEventListener('mouseenter', openNow);
      details.addEventListener('mouseleave', closeWithDelay);
    }catch(e){
      // Falha silenciosa: se algo der errado, mantém o comportamento padrão (abrir por clique)
    }
  }

  // Tenta carregar o menu por fetch; se funcionar insere o HTML remoto no container
  fetch(menuPath)
    .then(response => {
      // Se a resposta HTTP não for OK, lança erro para ser tratado no catch
      if (!response.ok) throw new Error(`Falha ao carregar ${menuPath}: ${response.status}`);
      // Lê o corpo como texto (HTML do menu)
      return response.text();
    })
    .then(html => {
      // Insere o HTML carregado dentro do container do menu
      menuContainer.innerHTML = html;
      // Aplica a melhoria de hover após inserir o conteúdo
      enhanceDropdownHover(menuContainer);
    })
    .catch(err => {
      // Se o fetch falhar (por ex. file://), registra aviso e insere um fallback simples
      console.warn("Fetch do menu falhou, usando fallback. Erro:", err);
      menuContainer.innerHTML = `
<nav>
  <ul class="main-menu">
    <li><a href="index.html">Início</a></li>
    <li><a href="projetos.html">Projetos</a></li>
    <li>
      <details class="menu-dropdown">
        <summary>Cadastro</summary>
        <ul>
          <li><a href="cadastroVoluntario.html">Cadastro voluntário</a></li>
          <li><a href="cadastroPet.html">Cadastro Pet</a></li>
        </ul>
      </details>
    </li>
    <li><a href="contato.html">Contato</a></li>
    <li><a href="galeria.html">Galeria</a></li>
    <li><a href="transparencia.html">Transparência</a></li>
  </ul>
</nav>
`;
      // Também aplica a melhoria de hover no HTML de fallback
      enhanceDropdownHover(menuContainer);
    });
});



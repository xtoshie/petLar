document.addEventListener("DOMContentLoaded", function () {
  /**
   * Carrega o fragmento do menu a partir de `html/menu.html` e insere em #menu.
   * Se o fetch falhar (por exemplo ao abrir via file://), usa um fallback embutido.
   */
  const menuContainer = document.getElementById("menu");
  if (!menuContainer) return; // nada a fazer se o container não existir

  const menuPath = "../html/menu.html"; // relativo a partir de páginas dentro de `html/`

  fetch(menuPath) // tenta carregar o menu via fetch
    .then(response => { // verifica se a resposta foi OK
      if (!response.ok) throw new Error(`Falha ao carregar ${menuPath}: ${response.status}`); // lança erro para cair no catch
      return response.text(); // lê o corpo da resposta como texto
    })
    .then(html => { // insere o HTML carregado no container
      menuContainer.innerHTML = html; // insere o HTML carregado no container
    })
    .catch(err => { // trata erros que ocorrem durante o fetch
      // Fallback: injeta HTML diretamente caso fetch não funcione
      console.warn("Fetch do menu falhou, usando fallback. Erro:", err);  // aviso no console
      menuContainer.innerHTML = `\n<nav>\n  <ul class="main-menu" style="list-style:none; display:flex; gap:2rem; justify-content:center; padding:1rem; background-color:#ff8c00;">\n    <li><a href="index.html">Início</a></li>\n    <li><a href="projetos.html">Projetos</a></li>\n    <li><a href="cadastro.html">Cadastro</a></li>\n    <li><a href="contato.html">Contato</a></li>\n  </ul>\n</nav>\n`; // menu simples como fallback
    });
});



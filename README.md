[![HTML](https://img.shields.io/badge/feito%20com-HTML5-orange)]()
[![CSS](https://img.shields.io/badge/feito%20com-CSS3-blueviolet)]()
[![JavaScript](https://img.shields.io/badge/feito%20com-JavaScript-blue)]()

# 🐾 PetLar — Projeto HTML5

## 📌 Etapas de Desenvolvimento (em ordem cronológica)

### 1. Planejamento e Estrutura Inicial
- Definir o objetivo do projeto: plataforma fictícia de adoção e apoio a pets.
- Criar a estrutura de pastas:
- Criar o repositório no GitHub com visibilidade **pública**.

---

### 2. Implementação da Estrutura HTML5 Semântica
- Criar **3 páginas HTML** com estrutura semântica completa:
- `index.html`: página inicial com informações sobre a organização e contato.
- `projetos.html`: página sobre projetos sociais, voluntariado e doações.
- `cadastro.html`: página com formulário de cadastro.
- Aplicar **hierarquia de títulos** (`<h1>` a `<h6>`) de forma lógica e consistente.
- Inserir **imagens relevantes** em cada página.
```
PetLar/
├── index.html
├── projetos.html
├── cadastro.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
└── imagens/
```
---

### 3. Estilização com CSS
- Criar o arquivo `estilo.css` e aplicar:
- Layout responsivo.
- Cores e fontes agradáveis.
- Estilo para botões, formulários e navegação.

---

### 4. Criação do Formulário Interativo (cadastro.html)
- Adicionar campos com **tipos de input HTML5**:
- Nome completo
- E-mail
- CPF
- Telefone
- Data de nascimento
- Endereço
- CEP
- Cidade
- Estado
- Utilizar **validação nativa** com atributos como `required`, `pattern`, `type`, `minlength`, etc.
- Agrupar campos com `<fieldset>` e `<legend>` para melhor organização.
- Aplicar **máscaras de input** com JavaScript para CPF, telefone e CEP.

---

### 5. Recursos Visuais e Multimídia
- Inserir imagens otimizadas em múltiplos formatos (JPEG, PNG, WebP).
- Garantir que todas as imagens estejam na pasta `assets/imagens/`.

---

### 6. Validação e Testes
- Validar os arquivos HTML no [W3C Validator](https://validator.w3.org/).
- Testar o formulário e a navegação entre páginas.
- Verificar responsividade em diferentes dispositivos.

---

### 7. Publicação no GitHub
- Subir todos os arquivos e pastas para o repositório GitHub.
- Garantir que o repositório esteja **público**.
- Verificar se todos os arquivos estão organizados corretamente.

---

## ✅ Entregáveis Finais
- Código-fonte completo com estrutura organizada.
- HTML validado e funcional.
- Imagens otimizadas.
- Link público do repositório GitHub.

---

# 🐾 PetLar — Projeto (versão final)

Status atual (26/10/2025)
- Branch principal de trabalho: `develop` (últimos commits aplicados)
- Versão a ser publicada: `v1.0.0` (tag criada e empurrada no final desta operação)

Resumo das alterações implementadas nesta fase
- Flow de Doação
	- `html/doacao.html`: formulário de doação com validação e interceptação de submit.
	- Persiste doações em `localStorage` e salva a última doação em `sessionStorage`.
	- `html/sucesso_doacao.html`: página de confirmação que lê `sessionStorage.last_donation` e exibe o resumo.

- Acessibilidade e navegação
	- Skip-link adicionado em todas as páginas (posicionado corretamente dentro do `body`).
	- Foco visível, contraste e pequenas melhorias a11y (scripts e CSS helpers).

- Galeria e interface
	- `html/galeria.html`: imagens colocadas em cartões (`.card-galeria`) com grid responsivo e lightbox.
	- `javascript/lightbox.js` para visualização em modal.

- Contato e botões
	- `html/contato.html` corrigido (removido quadro azul, alinhamento das redes sociais)
	- Padronização de botões: `.botaoGaleria`, `.botao-doar`, `.relatorio-anual`, etc.
	- Regra CSS adicionada para alinhar botões à esquerda quando solicitado.

- Utilitários
	- `javascript/menu.js` e `javascript/footer.js` injetam header/footer em todas as páginas.
	- Novo `javascript/backToTop.js` e classe `.back-to-top` no CSS — botão circular aparece no canto inferior esquerdo quando rolar e faz scroll suave até `#main-content`.

Arquivos importantes alterados/ adicionados
- HTML: `html/*.html` (várias páginas; alterações notáveis: `projetos.html`, `doacao.html`, `sucesso_doacao.html`, `contato.html`, `galeria.html`)
- CSS: `css/estilo.css` (centro de estilos; moved/centralized inline CSS; adições de .back-to-top e regras de alinhamento de botões)
- JS: `javascript/backToTop.js` (novo), `javascript/lightbox.js`, `javascript/menu.js`, `javascript/form-handler.js` (já existentes/atualizados)

Checklist de status (conforme o TODO original)
- [ ] Executar auditoria de acessibilidade (Lighthouse/axe) — pendente
- [ ] Configurar CI (GitHub Actions) para checks — pendente
- [ ] Adicionar build de produção (package.json + scripts) — pendente
- [ ] Otimizar imagens e gerar WebP/AVIF — pendente
- [ ] Gerar README final e checklist de submissão — ESTA ETAPA (concluída agora)
- [ ] Criar CHANGELOG e versão semântica (v1.0.0) — vou criar a tag `v1.0.0` agora
- [ ] Publicar site (GitHub Pages) — pendente
- [ ] Melhorias de conteúdo e SEO básicas — pendente
- [ ] Rodar testes básicos e validação HTML/CSS — pendente

Como testar localmente (rápido)
1. Abra a pasta do projeto no VS Code.
2. Use Live Server (extensão) ou abra os arquivos HTML diretamente no navegador.
	 - Exemplo: http://127.0.0.1:5500/html/index.html





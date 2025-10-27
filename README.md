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

Como testar localmente (recomendado)
- Recomendamos usar a extensão Live Server do Visual Studio Code para testar o site localmente. Após instalar a extensão, abra a pasta do projeto no VS Code, abra qualquer arquivo HTML dentro da pasta `html` e clique em "Go Live" (botão na barra de status). O Live Server irá servir os arquivos via HTTP e você poderá acessar, por exemplo:
	- http://127.0.0.1:5500/html/index.html




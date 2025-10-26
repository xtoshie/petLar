// form-handler.js
// Handler simples de submissão para os formulários de cadastro.
// Salva os dados no localStorage como prova de conceito e redireciona para sucesso.html.

document.addEventListener('DOMContentLoaded', function () {
  function saveToStorage(key, obj) {
    try {
      const raw = localStorage.getItem(key);
      const arr = raw ? JSON.parse(raw) : [];
      arr.push(obj);
      localStorage.setItem(key, JSON.stringify(arr));
    } catch (e) {
      console.error('Erro ao salvar no localStorage', e);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);
    const data = {};
    for (const [k, v] of fd.entries()) {
      data[k] = v;
    }
    data._submittedAt = new Date().toISOString();

    if (form.id === 'cadastroForm') {
      // Voluntário
      saveToStorage('petlar_voluntarios', data);
      // Guardar nome para exibir em sucesso
      sessionStorage.setItem('last_submission', JSON.stringify({type: 'voluntario', name: data.nome || ''}));
    } else if (form.id === 'cadastroPetForm') {
      // Pet
      saveToStorage('petlar_pets', data);
      sessionStorage.setItem('last_submission', JSON.stringify({type: 'pet', name: data.nomePet || ''}));
    } else {
      // Genérico
      saveToStorage('petlar_generic', data);
      sessionStorage.setItem('last_submission', JSON.stringify({type: 'generic'}));
    }

    // Redireciona para a página de sucesso (assumindo que o formulário está em /html)
    // Usamos um pequeno timeout para permitir que o storage seja gravado antes da navegação.
    setTimeout(() => { location.href = 'sucesso.html'; }, 150);
  }

  const formVol = document.getElementById('cadastroForm');
  if (formVol) formVol.addEventListener('submit', handleSubmit);

  const formPet = document.getElementById('cadastroPetForm');
  if (formPet) formPet.addEventListener('submit', handleSubmit);
});

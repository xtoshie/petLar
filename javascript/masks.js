// masks.js - máscara de CPF, CEP e Telefone em vanilla JS
document.addEventListener('DOMContentLoaded', function () {
  // CPF
  (function () {
    const cpfInput = document.getElementById('CPF') || document.getElementById('cpf') || document.querySelector('input[name="CPF"]');
    if (!cpfInput) {
      console.warn('masks.js: campo de CPF não encontrado.');
    } else {
      cpfInput.setAttribute('inputmode', 'numeric');
      cpfInput.setAttribute('maxlength', '14');
      const formatCPF = (value) => {
        let v = value.replace(/\D/g, '').slice(0, 11);
        v = v.replace(/^(\d{3})(\d)/, '$1.$2')
             .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
             .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        return v;
      };
      cpfInput.addEventListener('input', (e) => {
        const pos = e.target.selectionStart;
        const oldLength = e.target.value.length;
        e.target.value = formatCPF(e.target.value);
        const newLength = e.target.value.length;
        const diff = newLength - oldLength;
        try { e.target.setSelectionRange(pos + (diff > 0 ? diff : 0), pos + (diff > 0 ? diff : 0)); } catch (_) {}
      });
    }
  })();

  // CEP
  (function () {
    const cepInput = document.getElementById('CEP') || document.querySelector('input[name="CEP"]');
    if (!cepInput) {
      console.warn('masks.js: campo de CEP não encontrado.');
    } else {
      cepInput.setAttribute('inputmode', 'numeric');
      cepInput.setAttribute('maxlength', '9');
      const formatCEP = (value) => {
        let v = value.replace(/\D/g, '').slice(0, 8);
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
        return v;
      };
      cepInput.addEventListener('input', (e) => {
        const pos = e.target.selectionStart;
        const oldLength = e.target.value.length;
        e.target.value = formatCEP(e.target.value);
        const newLength = e.target.value.length;
        const diff = newLength - oldLength;
        try { e.target.setSelectionRange(pos + (diff > 0 ? diff : 0), pos + (diff > 0 ? diff : 0)); } catch (_) {}
      });
    }
  })();

  // Telefone (Brasil: (00) 00000-0000 aceita 8 ou 9 dígitos)
  (function () {
    const telInput = document.getElementById('Telefone') || document.querySelector('input[name="Telefone"]') || document.getElementById('telefone');
    if (!telInput) {
      console.warn('masks.js: campo de Telefone não encontrado.');
    } else {
      telInput.setAttribute('inputmode', 'numeric');
      telInput.setAttribute('maxlength', '15');
      const formatPhone = (value) => {
        let v = value.replace(/\D/g, '').slice(0, 11);
        if (v.length <= 10) {
          v = v.replace(/^(\d{2})(\d)/, '($1) $2')
               .replace(/(\d{4})(\d)/, '$1-$2');
        } else {
          v = v.replace(/^(\d{2})(\d)/, '($1) $2')
               .replace(/(\d{5})(\d)/, '$1-$2');
        }
        return v;
      };
      telInput.addEventListener('input', (e) => {
        const pos = e.target.selectionStart;
        const oldLength = e.target.value.length;
        e.target.value = formatPhone(e.target.value);
        const newLength = e.target.value.length;
        const diff = newLength - oldLength;
        try { e.target.setSelectionRange(pos + (diff > 0 ? diff : 0), pos + (diff > 0 ? diff : 0)); } catch (_) {}
      });
    }
  })();

});

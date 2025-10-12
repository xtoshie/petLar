// Dados fictícios (2012-2024)
const anos = Array.from({length: 2024-2012+1}, (_,i) => 2012 + i); //Criando um array com os anos de 2012 a 2024

const donations = [12000, 18000, 24000, 30000, 45000, 52000, 61000, 73000, 88000, 102000, 125000, 140000, 160000]; // total de doações por ano (R$)
// despesas: alimentação, veterinário, banho_e_tosa (ou groomer), recepção, salários_outros, combustível
const despesasPorAno = anos.map((a,i) => ({ 
  ano: a,
  alimentacao:     (donations[i]*0.2),
  veterinario:     (donations[i]*0.25),
  banho_tosa:      (donations[i]*0.08),
  recepcao:        (donations[i]*0.05),
  salarios_outros: (donations[i]*0.15),
  combustivel:     (donations[i]*0.03),
}));

// No bloco abaixo desenha um grafico de linha que mostra como as doações evoluíram ao longo dos anos
// Como ele funciona: a função renderDonations() executa quando chamada, procura um espaço em tela CANVAS onde o grafico será desenhado com o nome donationsChart com as seguintes caracteristicas:Tipo, Eixo horizontal, eixo vertical, cor da linha, fundo suave abaixo da linha, legenda e adaptação automática ao tamanho da tela(Celular, computador, etc).
function renderDonations() {    // gráfico de doações ao longo dos anos
  const ctx = document.getElementById('donationsChart').getContext('2d');   // contexto do canvas
  new Chart(ctx, {  // criação do gráfico
    type: 'line',   // tipo de gráfico
  data: { labels: anos, datasets: [{ label: 'Doações (R$)', data: donations, borderColor: '#ff8c00', backgroundColor: 'rgba(255,140,0,0.1)', tension:0.2 }] },   // dados do gráfico
    options: { responsive:true, plugins:{legend:{display:false}} }  // opções do gráfico
  });
}

//O bloco abaixo desenha um gráfico de barras que mostra a distribuição das despesas no ano mais recente (2024).
//Como ele funciona: a função renderExpenses() executa quando chamada, procura um espaço em tela CANVAS onde o grafico será desenhado com o nome expensesChart com as seguintes caracteristicas:Tipo, Eixo horizontal, eixo vertical, cores das barras, legenda e adaptação automática ao tamanho da tela(Celular, computador, etc).
function renderExpenses() {
  const ctx = document.getElementById('expensesChart').getContext('2d');
  const last = despesasPorAno[despesasPorAno.length-1];
  const labels = ['Alimentação','Veterinário','Banho & Tosa','Recepção','Salários (outros)','Combustível'];
  const data = [last.alimentacao,last.veterinario,last.banho_tosa,last.recepcao,last.salarios_outros,last.combustivel];
  new Chart(ctx, { type: 'bar', data:{ labels, datasets:[{ label:'Despesas R$', data, backgroundColor: ['#4caf50','#e91e63','#03a9f4','#9c27b0','#ffc107','#795548'] }] }, options:{responsive:true} });
}

//O bloco abaixo cria uma tabela HTML que resume as doações e despesas por ano
//Como ele funciona: a função renderTable() executa quando chamada, procura um espaço em tela com o id summaryTable e cria uma tabela HTML com os dados de doações e despesas por ano.
function renderTable(){
  const container = document.getElementById('summaryTable');
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  thead.innerHTML = '<tr><th>Ano</th><th>Doações (R$)</th><th>Alimentação</th><th>Veterinário</th><th>Banho & Tosa</th><th>Recepção</th><th>Salários Outros</th><th>Combustível</th></tr>';
  table.appendChild(thead);
  const tbody = document.createElement('tbody');
  despesasPorAno.forEach((row,i)=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td style="text-align:left">${row.ano}</td><td>${donations[i].toLocaleString('pt-BR')}</td><td>${row.alimentacao.toLocaleString('pt-BR')}</td><td>${row.veterinario.toLocaleString('pt-BR')}</td><td>${row.banho_tosa.toLocaleString('pt-BR')}</td><td>${row.recepcao.toLocaleString('pt-BR')}</td><td>${row.salarios_outros.toLocaleString('pt-BR')}</td><td>${row.combustivel.toLocaleString('pt-BR')}</td>`;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  container.appendChild(table);
}

//As três instruções abaixo são como comandos que dizem ao sistema: mostre os gráficos e a tabela na tela chamando as funções que foram definidas acima.
renderDonations();
renderExpenses();
renderTable();

// A função abaixo cria arquivos CSV para download com os dados de doações e despesas
// Como ela funciona: a função criarCSVs() cria duas strings no formato CSV (valores separados por vírgula) com os dados de doações e despesas. Essas strings podem ser usadas para gerar arquivos CSV para download.
(function criarCSVs(){
  const doacoesCsv = ['ano,doacoes', ...anos.map((a,i)=>`${a},${donations[i]}`)].join('\n');
  const despesasCsv = ['ano,alimentacao,veterinario,banho_tosa,recepcao,salarios_outros,combustivel', ...despesasPorAno.map(r=>`${r.ano},${r.alimentacao},${r.veterinario},${r.banho_tosa},${r.recepcao},${r.salarios_outros},${r.combustivel}`)].join('\n');
})();

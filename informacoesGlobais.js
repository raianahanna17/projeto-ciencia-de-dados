const url = ‘https://raw.githubusercontent.com/
guilhermeonrails/api/main/dados-globais.json’
async function visualizarInformacoesGlobais() {
const res = await fetch(url)
const dados = await res.json()
  document.createElement(‘p’)
  paragrafo.classList.add(‘graficos-container__texto’)
  const paragrafo=console.log(dados.tempo_medio);
}
visualizarInformacoesGlobais()



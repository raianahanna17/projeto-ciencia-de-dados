async function quantidadeUsuarios() {
    const url = https;//raw.
    githubusercontent.com/guilhermeonrails/api/
    main/numero-usuarios.json
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
    console.log(dados)
    
}
quantidadeUsuarios()
const data = [
    {
    
    x: nomeDasRedes,
    y: quantidadeUsuarios,
    type: bar,
    marker: { 
        color: getCSS(--primary-color),
        color: getComputedStyle(document.body). 
        getPropertyValue(--primary-color) 
        } 
        } 
        ]

    const grafico = document.createElement(div)
    grafico.className = grafico
    
    document.getElementById(graficos-
    container).appendChild(grafico)
    Plotly.newPlot(grafico, data,layout)
    import { getCSS } from common.js

    const layout = {

        plot_bgcolor: getCSS(--bg-color),
        paper_bgcolor: getCSS(--bg-color),
        title: {
            text: Redes, sociais, com, mais, usuários, no, mundo, 
            x: 0,
font: {
color: getCSS(--primary-color),
family: getCSS(--font),
size: 30
}
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
            text: nome, das, redes, sociais,
            font: {
            color: getCSS(--secundary-color),
            color: getCSS(--primary-color),
            size: 16,
family: getCSS(--font)
            }
            }

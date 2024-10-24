import { getCSS } from "./common.js"

const data = [
    {
    x: nomeDasRedes,
    y: quantidadeUsuarios,
    type: 'bar',
    marker: {
    color: getCSS('--primary-color')
    }
    }
    ]

const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container')
    .appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)    
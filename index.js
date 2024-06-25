/*
t1 t2   t3 = 0 
0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
*/

let x = 0
let y = 1
let z = 0

z = x + y

let option = 0
let valor = parseInt(prompt("digite um número:"))


function pageTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
  }
  
  document.getElementById('btn-dark/light').addEventListener('click', pageTheme)

for (i = 0; i < valor; i++) {
    x = y
    y = z
    z = x + y
    console.log(x + " + " + y + " = " + z)

    if(valor === z) {
        option = 1
    }
} 

if(option === 1) {
    console.log(valor + " é um valor de uma sequência fibonacci" )
}

else  {
    console.log("não há este valor na sequência de fibonacci " + "(" + valor + ")")
}
const fibonacciBtn = document.getElementById("fibonacciBtn")

function fibonacciBtnActive () {
    if (fibonacciBtn) {
        fibonacciBtn = prompt("ola?")
    }
} 

/* a pessoa poder digitar no input e ao colocar o número checar se é ou não uma sequencia de fibonati (aparecendo na tela escrito) */
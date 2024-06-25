function pageTheme() {
    document.body.classList.toggle('is-dark')
    document.body.classList.toggle('is-light')
}

document.getElementById('btn-dark/light').addEventListener('click', pageTheme)


let x = 0
let y = 1
let z = 0

z = x + y

let option = 0

function calcFibonacci(valor) {

    while (z <= valor) {
        x = y
        y = z
        z = x + y
        createLi(x, y, z)

        if (valor == z) {
            option = 1
        }

    }

    if (option === 1) {
        console.log(valor + " é um valor de uma sequência fibonacci")
        zerarVariaveis()
        return true
    } else {
        console.log("não há este valor na sequência de fibonacci " + "(" + valor + ")")
        zerarVariaveis()
        return false
    }

}

function zerarVariaveis() {
    x = 0
    y = 1
    z = 0
    option = 0
}



function fibonacciBtnActive() {
    const ul = document.getElementById("numbersResult")
    removeChilds(ul)
    const inputValue = document.getElementById("fibonacci").value
    const result = calcFibonacci(inputValue)

    if (result) {
        document.getElementById("result").textContent = "há este valor: " + inputValue + " na sequência de fibonacci"
    } else {
        document.getElementById("result").textContent = "não há este valor: " + inputValue + " na sequência de fibonacci"
    }

}

function createLi(x, y, z) {
    const li = document.createElement("li")
    li.innerText = x + " + " + y + " = " + z
    li.className = "vitor"
    document.getElementById("numbersResult").appendChild(li)
}

function removeChilds(parent) {
    while(parent.lastChild) {
        parent.removeChild(parent.lastChild)
    }
}
sideLength = 16
const btn = document.querySelector('button')
btn.addEventListener('click', event => {
    clearBoard()
})

function drawEtch (sideLength) {
    if (this.sideLength > 100) {
        this.sideLength = 100
    }
    for (let rowNumber = 0; rowNumber < this.sideLength; rowNumber++) {
        const rowElement = document.createElement('div')
        rowElement.className = "row" + rowNumber
        rowElement.style = "clear: left;"
        document.getElementsByClassName('container')[0].appendChild(rowElement)
        for (let cellNumber = 0; cellNumber < this.sideLength; cellNumber++) {
            const cellElement = document.createElement('div')
            cellElement.className = "row" + rowNumber + "cell" + cellNumber
            const padding = 960 / this.sideLength / 2
            cellElement.style = "float: left; border: solid; padding: " + padding + "px;"
            cellElement.addEventListener("mouseenter", function(e) {
                e.target.style.backgroundColor = "red"
            })
            document.getElementsByClassName("row" + rowNumber)[0].appendChild(cellElement)
        }
    }
}

function clearBoard() {
    document.getElementsByClassName('container')[0].innerHTML = ''
    drawEtch(sideLength)
}

drawEtch(sideLength)
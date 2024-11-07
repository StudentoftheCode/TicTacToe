let currentPlayer = "X"

function togglePlayer(){
    currentPlayer = currentPlayer === "X" ? "O" : "X"
}

function handleSections(event){
    event.target.innerText = currentPlayer
    togglePlayer()
}
const boxes = document.querySelectorAll('.game-box')

boxes.forEach(box => {
    box.addEventListener('click', handleSections)
})

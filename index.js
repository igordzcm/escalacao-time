function addPlayer() {
    const teamList = document.getElementById("team-list")

    let posicao = document.getElementById('position').value
    let nome = document.getElementById('name').value
    let numero = document.getElementById('number').value

    const confirmation = confirm("Escalar " + nome + " como " + posicao + "?")

    if (confirmation){
        const playerItem = document.createElement('li')
        playerItem.id = 'player-' + numero
        playerItem.innerText = posicao + ': ' + nome + ' (Número: ' + numero + ')'

        teamList.appendChild(playerItem)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}

function removePlayer() {
    const numero = document.getElementById("numberToRemove").value
    const playerToRemove = document.getElementById("player-" + numero)
  
    const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?")
  
    if (confirmation) {
      document.getElementById("team-list").removeChild(playerToRemove)
      document.getElementById("numberToRemove").value = ""
    }
  }
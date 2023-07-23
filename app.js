document.addEventListener('DOMContentLoaded', () => {

  // variables
  const gird = document.querySelector('.grid')
  const width = 8
  const squares = []
  
  // functions
  // create board
  function createBoard(){
    for(let i = 0; i < width*width; i++){
      const square = document.createElement('div')
      grid.appendChild(square)
      squares.push(square)
    }
  }

  createBoard()
})

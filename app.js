document.addEventListener('DOMContentLoaded', () => {

  // variables
  const grid = document.querySelector('.grid')
  const width = 8
  const squares = []

  const candyColors = [
    'red',
    'yellow',
    'orange',
    'purple',
    'green',
    'blue'
  ]
  
  // functions
  // create board
  function createBoard(){
    for(let i = 0; i < width*width; i++){
      const square = document.createElement('div')
      square.setAttribute('draggable', true)
      square.setAttribute('id', i)
      let randomColor = Math.floor(Math.random() * candyColors.length)
      square.style.backgroundColor = candyColors[randomColor]   
      grid.appendChild(square)
      squares.push(square)
    }
  }

  createBoard()

  // Drag the candies
  squares.forEach(squares => square.addEventListener('dragstart', dragStart)) 
  squares.forEach(squares => square.addEventListener('dragend', dragEnd)) 
  squares.forEach(squares => square.addEventListener('dragover', dragOver)) 
  squares.forEach(squares => square.addEventListener('dragenter', dragEnter)) 
  squares.forEach(squares => square.addEventListener('dragleave', dragLeave)) 
  squares.forEach(squares => square.addEventListener('drop', dragDrop)) 

  function dragStart(){
    console.log(this.id, 'dragstart')
  }

  function dragOver(){
    console.log(this.id, 'dragover')
  }

  function dragEnter(){
    console.log(this.id, 'dragenter')
  }

  function dragLeave(){
    console.log(this.id, 'dragleave')
  }

  function dragDrop(){
    console.log(this.id, 'dragdrop')
  }

  function dragEnd(){
    console.log(this.id, 'dragend')
  }
  
})

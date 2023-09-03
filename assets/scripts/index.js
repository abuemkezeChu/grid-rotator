'use strict'

const btn1 = document.getElementById('btn-one')
const btn2 = document.getElementById('btn-two')
const btn3 = document.getElementById('btn-three')
const btn4 = document.getElementById('btn-four')
const btn5 = document.getElementById('btn-five')
const btn6 = document.getElementById('btn-six')
const btn7 = document.getElementById('btn-seven')
const btn8 = document.getElementById('btn-eight')
const btn9 = document.getElementById('btn-nine')

const grid = [1, 2, 3, 6, 9, 8, 7, 4] // store the value of each button

// rotate grid clockwise
const rotateClockWise = (grid) => {
  grid.unshift(grid.pop())
}

// rotate grid anticlockwise
const rotateAntiClockWise = (grid) => {
  grid.push(grid.shift())
}

// update the view
const updateView = (grid) => {
  btn1.textContent = grid[0]
  btn2.textContent = grid[1]
  btn3.textContent = grid[2]
  btn6.textContent = grid[3]
  btn9.textContent = grid[4]
  btn8.textContent = grid[5]
  btn7.textContent = grid[6]
  btn4.textContent = grid[7]
}

btn5.addEventListener('click', () => {
  rotateClockWise(grid)
  updateView(grid)
})

btn1.addEventListener('click', () => {
  rotateAntiClockWise(grid)
  updateView(grid)
})

btn2.addEventListener('click', () => {
  rotateAntiClockWise(grid)
  updateView(grid)
})

btn3.addEventListener('click', () => {
  rotateAntiClockWise(grid)
  updateView(grid)
})

btn4.addEventListener('click', () => {
  rotateAntiClockWise(grid)
  updateView(grid)
})

btn6.addEventListener('click', () => {
  rotateAntiClockWise(grid)
  updateView(grid)
})
btn7.addEventListener('click', () => {
  rotateAntiClockWise(grid)
  updateView(grid)
})

btn8.addEventListener('click', () => {
  rotateAntiClockWise(grid)
  updateView(grid)
})

btn9.addEventListener('click', () => {
  rotateAntiClockWise(grid)
  updateView(grid)
})

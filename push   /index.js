const squares = Array.from(document.querySelectorAll('.grid div'))
console.log(squares)

let currentSnake = []

//add the number 0 to the currentSnake array to see what happens
currentSnake.push(0);
console.log(currentSnake)


//Challenge: draw the snake as 3 squares long on the third row down using unshift

//Challenge: add to the HEAD of the snake using push


currentSnake.forEach(element => squares[element].classList.add('snake'))
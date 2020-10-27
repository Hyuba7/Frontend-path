const squares = Array.from(document.querySelectorAll('.grid div'))

//divを取得して箱にする


for (let i = 0; i < squares.length; i++) {
  if (i % 2 === 0) {
      squares[i].classList.add('even')
  } else squares[i].classList.add('odd')
}



import React, { useState } from "react";
import Header from '../../../componets';

function App() {
    
  const [puzzle, setPuzzle] = useState(
    Array(9).fill().map(() => Array(9).fill(0))
  );
  const [solvedPuzzle, setSolvedPuzzle] = useState(
    Array(9).fill().map(() => Array(9).fill(0))
  );

  function isValid(num, row, col) {
    // Verifica se o número já está presente na linha
    for (let i = 0; i < 9; i++) {
      if (puzzle[row][i] === num) {
        return false;
      }
    }

    // Verifica se o número já está presente na coluna
    for (let i = 0; i < 9; i++) {
      if (puzzle[i][col] === num) {
        return false;
      }
    }

    // Verifica se o número já está presente no bloco 3x3
    const blockRow = Math.floor(row / 3) * 3;
    const blockCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (puzzle[blockRow + i][blockCol + j] === num) {
          return false;
        }
      }
    }

    // Se passou por todas as verificações, é um número válido
    return true;
  }

  function solveSudoku() {
    // Encontra a primeira célula vazia
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (puzzle[row][col] === 0) {
          // Testa cada número de 1 a 9 na célula vazia
          for (let num = 1; num <= 9; num++) {
            if (isValid(num, row, col)) {
              puzzle[row][col] = num;

              // Tenta resolver o restante do sudoku
              if (solveSudoku()) {
                return true;
              }

              // Se não encontrou solução, volta à célula anterior e tenta outro número
              puzzle[row][col] = 0;
            }
          }

          // Retorna false se não encontrou solução
          return false;
        }
      }
    }

    // Se não encontrou células vazias, sudoku está resolvido
    setSolvedPuzzle(puzzle.map(row => [...row]));
    return true;
  }

  function handleSolveClick() {
    solveSudoku();
  }

  function handleInputChange(event, row, col) {
    const newValue = parseInt(event.target.value) || 0;
    const newPuzzle = puzzle.map((r, i) => {
      return r.map((c, j) => {
        if (i === row && j === col) {
          return newValue;
        }
        return c;
      });
    });
    setPuzzle(newPuzzle);
  }

  return (
    <div className="App">
        <Header/>
      <h1>Sudoku Solver</h1>
      <table className="SudokuTable">
        <tbody>
          {puzzle.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input type="text" value={cell !== 0 ? cell : ""} maxLength="1" onChange={(event) => handleInputChange(event, rowIndex, colIndex)} />
</td>
))}
</tr>
))}
</tbody>
</table>
<button onClick={handleSolveClick}>Solve</button>
{solvedPuzzle && (
<div>
<h2>Solution:</h2>
<table className="SudokuTable">
<tbody>
{solvedPuzzle.map((row, rowIndex) => (
<tr key={rowIndex}>
{row.map((cell, colIndex) => (
<td key={colIndex}>{cell !== 0 ? cell : ""}</td>
))}
</tr>
))}
</tbody>
</table>
</div>
)}
</div>
);
}

export default App;
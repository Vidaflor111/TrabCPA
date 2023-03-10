import React, { useState } from 'react';
import Header from '../../../componets';

function NQueensProblem() {
  const [n, setN] = useState(8);
  const [solution, setSolution] = useState([]);

  function solveNQueens() {
    const board = new Array(n).fill(null).map(() => new Array(n).fill(0));

    function canPlaceQueen(row, col) {
      for (let i = 0; i < row; i++) {
        if (board[i][col] === 1) {
          return false;
        }
        const diff = row - i;
        if (col - diff >= 0 && board[i][col - diff] === 1) {
          return false;
        }
        if (col + diff < n && board[i][col + diff] === 1) {
          return false;
        }
      }
      return true;
    }

    function placeQueen(row) {
      if (row === n) {
        const result = board.map(row => row.join(''));
        setSolution(result);
        return true;
      }

      for (let col = 0; col < n; col++) {
        if (canPlaceQueen(row, col)) {
          board[row][col] = 1;
          placeQueen(row + 1);
          board[row][col] = 0;
        }
      }

      return false;
    }

    placeQueen(0);
  }

  function handleChange(event) {
    setN(Number(event.target.value));
    setSolution([]);
  }

  return (
    <div>
      <Header/>
      <label>
        
        Insira o valor de N:
        <input type="number" value={n} onChange={handleChange} />
      </label>
      <button onClick={solveNQueens}>Resolver</button>
      {solution.length > 0 &&
        <div>
          <h2>Solução:</h2>
          {solution.map(row => <p>{row}</p>)}
        </div>
      }
    </div>
  );
}
export default NQueensProblem;
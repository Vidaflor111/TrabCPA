import Header from '../../../componets';
import React from 'react';
import './index.css';

const maze = [
  ['S', '#', '#', '#', '#', '#', '#', '#', '.', '#'],
  ['.', '.', '.', '.', '.', '.', '#', '.', '.', '#'],
  ['.', '#', '.', '#', '#', '.', '#', '#', '.', '#'],
  ['.', '#', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['#', '#', '.', '#', '#', '.', '#', '#', '#', '#'],
  ['.', '.', '.', '.', '#', '.', '.', '.', '.', '#'],
  ['#', '.', '#', '.', '#', '.', '#', '#', '.', '#'],
  ['#', '.', '#', '.', '.', '.', '.', '.', '.', '.'],
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', 'E']
];

const solveMaze = (maze) => {
  const visited = Array.from({ length: maze.length }, () => Array.from({ length: maze[0].length }, () => false));
  const path = [];

  const dfs = (row, col) => {
    if (row < 0 || row >= maze.length || col < 0 || col >= maze[0].length) return false;
    if (visited[row][col] || maze[row][col] === '#') return false;
    visited[row][col] = true;
    path.push([row, col]);
    if (maze[row][col] === 'E') return true;
    if (dfs(row + 1, col) || dfs(row - 1, col) || dfs(row, col + 1) || dfs(row, col - 1)) return true;
    path.pop();
    return false;
  };

  dfs(0, 0);
  return path;
};

const MazeSolver = () => {
  const path = solveMaze(maze);

  return (
    <div>
    <Header/>
            <div className="titulo">
                <h1>Maze</h1>  
            </div>


            
      {maze.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, colIndex) => (
            <span
              key={colIndex}
              style={{
                display: 'inline-block',
                width: '20px',
                height: '20px',
                backgroundColor: path.some(([row, col]) => row === rowIndex && col === colIndex) ? 'green' : cell === '#' ? 'black' : 'white',
                border: '1px solid black'
              }}
            >
              {cell}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MazeSolver;


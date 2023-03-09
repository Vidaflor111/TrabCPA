import './index.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        
        <header>
            <div>
                <h1>Jogos</h1>  
            </div>
            <div>
            <nav>
                <ul>
                    <li><Link to="/api/v1/nqueens">NQueens</Link></li>
                    <li><Link to="/api/v1/sudoku">Sudoku</Link></li>
                    <li><Link to="/api/v1/maze">Maze</Link></li>
                </ul>
            </nav>
            </div>
        </header>
        
    );
}

export default Header;

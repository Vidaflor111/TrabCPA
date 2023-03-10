import './index.css';

function Header() {
    return (
        
        <header>
            <div className="titulo">
                <h1>Jogos</h1>  
            </div>
            <div className='links'>
            <nav>
                <ul>
                    <button><a href="/api/v1/nqueens">NQueens</a></button>
                    <button><a href="/api/v1/sudoku">Sudoku</a></button>
                    <button><a href="/maze">Maze</a></button>
                    
                </ul>
            </nav>
            </div>
        </header>
        
    );
}

export default Header;

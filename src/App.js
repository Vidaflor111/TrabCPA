import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import Maze from './api/v1/maze'
import Home from './Home'
import Nqueens from './api/v1/nqueens'
import Sudoku from './api/v1/sudoku'
function App() {
    return (
        <Router>
            <Routes>
                <Route path = "/" element={<Home/>} />
                <Route path = "/api/v1/maze" element={<Maze/>} />
                <Route path = "/api/v1/sudoku" element={<Sudoku/>} />
                <Route path = "/api/v1/nqueens" element={<Nqueens/>} />
                <Route path = "/api/v1/nqueens/:id" element={<ItemDetail/>} />
            </Routes>
        </Router>
    );
}
export default App;

function ItemDetail(props) {
    const itemId = props.match.params.id;
    // Use o ID do item para buscar informações do item e renderizar a página de detalhes
    return (
      <div>
        <h2>Detalhes do Item {itemId}</h2>
        <p>Descrição do item</p>
      </div>
    );
  }


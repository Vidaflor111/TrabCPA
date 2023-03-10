import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import Maze from './api/v1/maze'
import Home from './Home'
import Nqueens from './api/v1/nqueens'
import Sudoku from './api/v1/sudoku'
import Maze1 from './maze'
function App() {
    return (
        <Router>
            <Routes>
                <Route path = "/" element={<Home/>} />
                <Route path = "/api/v1/maze" element={<Maze/>} />
                <Route path = "/api/v1/sudoku" element={<Sudoku/>} />
                <Route path = "/api/v1/nqueens" element={<Nqueens/>} />
                <Route path = "/maze" element={<Maze1/>} />
            </Routes>
        </Router>
    );
}
export default App;



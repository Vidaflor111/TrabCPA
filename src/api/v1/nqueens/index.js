
import './index.css';
import Header from '../../../componets';
function Nqueens() {
    return (
        <div className="Nqueens">
            <Header/>
            <h1>Número de Rainhas</h1>
            <form>
                    <label htmlFor="nqueens-input">Número de Rainhas:</label>
                    <input type="number" id="nqueens-input" name="nqueens-input" min="1" max="20" required/>
                    <button type="submit">Jogar</button>
                </form>
        </div>
    );
}

export default Nqueens;

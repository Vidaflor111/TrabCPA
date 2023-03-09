
import './index.css';
import Header from '../../../componets';
function Nqueens() {
    return (
        
        <div className="Nqueens">
            <Header/>
            <div className="titulo">
                <h1>Número de Rainhas</h1>  
            </div>
                <div className='links'>
                <form>
                    <label htmlFor="nqueens-input">Número de Rainhas:</label>
                    <input type="number" id="nqueens-input" name="nqueens-input" min="1" max="20" required/>
                    <button type="submit">Jogar</button>
                </form>
                </div>
        </div>
    );
}
export default Nqueens;



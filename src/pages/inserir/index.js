
import { Link } from 'react-router-dom';

import './index.scss';


function Inserir() {
  return (
    <div className="App">
        <div>
            <h1>Inserir</h1>
            <Link to={'/'}> Voltar </Link>
        </div>
    </div>
  );
}

export default Inserir;
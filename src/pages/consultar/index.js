


import { Link } from 'react-router-dom';
import './index.scss';

function Consultar() {
  return (
    <div className="App">
        <div>
            <h1>Consultar</h1>
            <Link to={'/'}> Voltar </Link>
        </div>
    </div>
  );
}

export default Consultar;
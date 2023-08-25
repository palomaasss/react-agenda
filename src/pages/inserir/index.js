
import { Link } from 'react-router-dom';

import './index.scss';
import { useState } from 'react';


function Inserir() {
 const[nome, setNome]= useState('')
 const[telefone, setTelefone]= useState('')
 const[email, setEmail]= useState('')
 const[cadastro, setCadastro]= useState('')
 const[fav, setFav]= useState(false)






















  return (
    <div className="pag-inserir">
        <div className='s1'>
            <h1>Inserir</h1>

            <div className='inputs'>
              <label>Nome</label>
                <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>

                <label>Telefone</label>
                <input type='text' value={telefone} onChange={e=> setTelefone(e.target.value)}/>

                <label>E-mail</label>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <label>Cadastro</label>
                <input type='date' value={cadastro} onChange={e => setCadastro(e.target.value)}/>

                <label>Favorito</label>
                <input type='checkbox' value={fav} onChange={e => setFav(e.target.value)}/>

            </div>
            <Link to={'/'}> Voltar </Link>
        </div>
    </div>
  );
}

export default Inserir;
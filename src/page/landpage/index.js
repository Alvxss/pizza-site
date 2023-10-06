import { adicionarPizza } from '../../api/pizzaApi';
import './index.scss';
import {useState} from 'react';

export default function Landpage() {

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState();
  const [quantidade, setQuantidade] = useState();
  const [ingredientes, setIngredientes] = useState(''); 

  async function adicionar() {
    try {
      let resp = await adicionarPizza(nome, preco, quantidade, ingredientes);

      if (resp.status === 200) {
        alert('Pizza adicionada com sucesso!')
      }
    } catch (error) {
      console.log(error);
      if(error.response) {
        alert(error.response.data.err);
      } else {
        alert(error.message);
      }
    }
  }

  return (
    <div className='pagina-landpage'>
      <div className='cabecalho'>
        <img src="/assets/images/logo.png" alt="logo" />
      </div>

      <div className='secao'>
        <div className='card'>
          <div className='foto'>
            <div className='cardFotos'>
              <div className='fotoPrincipal'>
                <img src="/assets/images/add.svg" alt="Principal" />
              </div>
              <div className='fotoSecundaria'>
                <div>
                  <img src="/assets/images/add.svg" alt="Secundaria" />
                </div>
                <div>
                  <img src="/assets/images/add.svg" alt="Secundaria" />
                </div>
                <div>
                  <img src="/assets/images/add.svg" alt="Secundaria" />
                </div>
              </div>
            </div>
            <div className='addFoto'>
              <a href="">ADICIONAR FOTO</a>
            </div>
          </div>
          <div className='detalhesProduto'>
            <div className='produto'>
              <div>
                <h3>Nome do Produto</h3>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
              </div>
              <div>
                <h3>Preço Inicial</h3>
                <input type="text" value={preco} onChange={e => setPreco(e.target.value)}/>
              </div>
              <div>
                <h3>Quantidade</h3>
                <input type="text" value={quantidade} onChange={e => setQuantidade(e.target.value)}/>
              </div>
            </div>
            <div className='ingredientes'>
              <h3>ingredientes</h3>
              <input type="text" value={ingredientes} onChange={e => setIngredientes(e.target.value)}/>
            </div>
            <div className='addProduto'>
              <button onClick={adicionar}>ADICIONAR PRODUTO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
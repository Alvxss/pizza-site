import './index.scss';

export default function Landpage() {
  return (
    <div className='pagina-landpage'>
      <div className='cabecalho'>
        <h1>Pizzaria</h1>
        <img src="" alt="" />
        <h1>Papa's Louis</h1>
      </div>

      <div className='secao'>
        <div className='card'>
          <div className='foto'>
            <div>
              <img src="" alt="" />
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
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
                <input type="text" />
              </div>
              <div>
                <h3>Preço Inicial</h3>
                <input type="text" />
              </div>
              <div>
                <h3>Quantidade</h3>
                <input type="text" />
              </div>
            </div>
            <div className='ingredientes'>
              <h3>ingredientes</h3>
              <input type="text" />
            </div>
            <div className='addProduto'>
              <a href="">ADICIONAR PRODUTO</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
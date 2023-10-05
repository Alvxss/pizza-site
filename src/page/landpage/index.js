import './index.scss';

export default function Landpage() {
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
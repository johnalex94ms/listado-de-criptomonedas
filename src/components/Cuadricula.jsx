import Cripto from "./Cripto"
import "../css/Cuadricula.css"
import Menu from "./menu/menu"
import usePetition from "../Hooks/usePetition"

function Cuadricula() {

  const [criptos] = usePetition("assets")

  if (!criptos) return <span className="txt_cargando">Cargando...</span>
  
  return (
    <div className="app-container">
      <div className="container-menu">
          <h1 className="title_main">Lista de Criptomonedas</h1>
          <span>{<Menu/>}</span>
      </div>
        <div className="cripto-container">
          { 
            criptos.map(({ id, name, priceUsd, symbol, changePercent24Hr}) => (
              <Cripto 
                key={id} 
                name={name} 
                priceUSD={priceUsd} 
                symbol={symbol} 
                changePercent24Hr={changePercent24Hr}
                id={id}
              />
            ))
          }
        </div>
    </div>
  )  
}

export default Cuadricula

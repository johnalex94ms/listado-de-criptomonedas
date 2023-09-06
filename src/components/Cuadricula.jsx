import { useEffect, useState } from "react"
import axios from "axios"
import Cripto from "./Cripto"
import "../css/Cuadricula.css"
import Menu from "./menu/menu"

function Cuadricula() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()
  useEffect(() => {
    axios.get(`${API_URL}assets`)
      // .then((resp) => resp.json())
      .then((data) => {
        setCriptos(data.data.data)
      })
      .catch(() => {
        console.error("La petición fallo")
      })
  }, [])

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

import { Link } from "react-router-dom"
import "../css/Cripto.css"

const Cripto = ({ id, name, priceUSD, symbol, changePercent24Hr }) => {
    return (
        <div className="cripto">
            <h2>{name}</h2>
            <div className="info">
                <p>
                    <span className="label">Precio: </span>
                    <span>{parseFloat(priceUSD).toFixed(4)}</span>
                </p>
                <p>
                    <span className="label">Simbolo:</span>
                    <span> {symbol}</span>
                </p>
                <p>
                    <span className="label">Variación 24hr: </span>
                    <span className={parseFloat(changePercent24Hr) > 0  ? "positivo" : "negativo"}>
                        {parseFloat(changePercent24Hr).toFixed(3)}%
                    </span>
                </p>
                <Link to={`/criptomonedas/${id}`} className="btn-detalle">Ver detalles</Link>
            </div>
        </div>
    )
}

export default Cripto
import { parseFloatNumber } from "../../helpers/numbers"

const CriptoInfo = ({ cripto }) => {
    return  (
        <div className="info">
            <ul>
                <li><span className="label">Nombre: </span>{cripto.name}</li>
                <li><span className="label">Simbolo: </span>{parseFloatNumber(cripto.symbol, 3)}</li>
            </ul>
        </div>
    )
}

export default CriptoInfo
import { Link, useParams } from "react-router-dom"
import "../css/criptopage.css"
import usePetition from "../Hooks/usePetition"
import CriptoHistory from "./info/CriptoHistorial"
import CriptoInfo from "./info/CriptoInfo"

const  CriptoPage = () => {

    const params = useParams()

    const [cripto, cargandoCripto] = usePetition(`assets/${params.id}`)
    const [history, cargandoHistory] = usePetition(`assets/${params.id}/history?interval=d1`)

    if (cargandoCripto || cargandoHistory) return <span>Cargando..</span>

    return (
        <div className="container_criptopage">
            <Link className="btn_volver_listado" to='/criptomonedas'>Volver al listado</Link>
            <h1>{params.id}</h1>
            { cripto && <CriptoInfo  cripto={cripto} />}
            <h2>Historial</h2>
            { history && <CriptoHistory history={history}  />}
        </div>
    )
}

export default CriptoPage
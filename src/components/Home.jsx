import { Link } from 'react-router-dom'
import "../css/home.css"

const Home = () => {
    return (
        <div className='container-welcome'>
            <div className='container-welcome-info'>
                <h1>Bienvenido</h1>
                <p>Conoce las 100 Criptomonedas más demandadas en el mercado.</p>
                <Link to="/criptomonedas" className='btn-cripto'>Ver criptomonedas</Link>
            </div>
        </div>
    )
}

export default Home
import "./Cripto.css"

const Cripto = ({ name, priceUSD }) => {
    return (
        <div className="cripto">
            <h2>{name}</h2>
            <div className="info">
                <p><span className="label">Precio: {priceUSD}</span></p>
            </div>
        </div>
    )
}

export default Cripto
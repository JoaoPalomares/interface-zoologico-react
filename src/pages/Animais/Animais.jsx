import Navegacao from '../../components/Navegacao/Navegacao';
import CardAnimal from '../../components/CardAnimal/CardAnimal';
import './Animais.css'

function Animais() {
    const componentes = [];
    for (let i = 0; i <= 3; i++) {
        componentes.push(<CardAnimal key={i} />)
    }

    return(
        <>
            <Navegacao />
            <h1 style={{color: 'black'}}>Animais</h1>
            <div className="ctn-cardanimais">
                {componentes}
            </div>
        </>
    )
}

export default Animais;
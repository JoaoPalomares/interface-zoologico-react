import './Home.css'
import Atracao from '../../components/Atracao/Atracao';
import Navegacao from '../../components/Navegacao/Navegacao';
import Welcome from '../../components/Welcome/Welcome';
import FormAnimal from '../../components/FormAnimal/FormAnimal';

function Home() {
    const componentes = [];
    for (let i = 0; i <= 2; i++) {
        componentes.push(<Atracao key={i} />)
    }
    return (
        <>
            <Navegacao></Navegacao>
            <FormAnimal />
            {/* <Welcome></Welcome>
            <h1 style={{color: 'black'}}>Atrações</h1>
            <div className="ctn-atracoes">
                {componentes}
            </div> */}
        </>
    )
}

export default Home;
import Table from 'react-bootstrap/Table';
import AnimalRequests from '../../fetch/AnimalRequests';
import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";

function TabelaAnimal() {
    const [animais, setAnimais] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const listaAnimais = await AnimalRequests.listarAnimais();
                setAnimais(listaAnimais);
            } catch (error) {
                console.error('Erro ao buscar animais: ', error);
            }
        }

        fetchData();
    }, []);

    const deletarAnimal = async (id) => {
        const confirmar = window.confirm(`Deseja deletar o animal com id ${id}?`);
        if (confirmar) {
            if (await AnimalRequests.deletarAnimal(id)) {
                window.alert('Animal deletado com sucesso');
                window.location.reload();
            } else {
                window.alert('Erro ao deletar o animal');
            };
        }
    }

    return (
        <>
        {animais.length > 0 ? (
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Gênero</th>
                            <th>Idade</th>
                            <th>Envergadura</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animais.map((animal) => (
                            <tr key={animal.idanimal} animal={animal}>
                                <td>{animal.idanimal}</td>
                                <td>{animal.nomeanimal}</td>
                                <td>{animal.generoanimal}</td>
                                <td>{animal.idadeanimal}</td>
                                <td>{animal.envergadura}</td>
                                <td onClick={() => deletarAnimal(animal.idanimal)}><FaTrashAlt /></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>Carregando ...</p>
            )
        }
        </>
        );
}

export default TabelaAnimal;
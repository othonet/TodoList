import React, { useCallback, useEffect, useState } from 'react';
import Rodape from '../Rodape';
import { Container, Header, CorpoTodolist, Lista, Input, Msg } from './style';
import { FaList, FaTimes } from 'react-icons/fa';
import SweetAlert from 'sweetalert2-react';
import ReactTooltip from 'react-tooltip';

function Todolist() {

    const [input, setInput] = useState('');
    const [lista, setLista] = useState([]);
    const [listaVazia] = useState('Não há tarefas pendentes. 🤙🏽');
    const [show, setShow] = useState(false);

    useEffect(() => {
        const pegaDados = localStorage.getItem('tarefas');
        if (pegaDados) {
            setLista(JSON.parse(pegaDados));
        }
    }, [])

    function addTask() {

        if (input !== '') {
            let tasks = {
                id: Date.now(),
                task: input
            }
            setLista([...lista, tasks]);
            console.log(lista);
            setInput('');

        } else {
            setShow(true);
        }
    }

    useEffect(() => {
        localStorage.setItem("tarefas", JSON.stringify(lista));
    }, [lista]);


    const delTask = useCallback((tarefa) => {
        const find = lista.filter(r => r.id !== tarefa);
        localStorage.setItem("tarefas", JSON.stringify(find));
        setLista((find));


    }, [lista])


    return (
        <Container>

            <Header>
                <h1>Todolist <FaList /> </h1>
            </Header>

            <CorpoTodolist>

                <Lista>
                    <ul>
                        {lista.length === 0 ? listaVazia :
                            lista.map(item => {
                                return (
                                    <li id="tarefa" key={item.id}> { item.task}
                                        <button onClick={() => delTask(item.id)}> <FaTimes data-tip data-place='top' data-effect='solid' data-for='fecharTarefa' /> </button>
                                        <ReactTooltip id='fecharTarefa' type='success' delayShow={50} delayHide={50}>
                                            <span>Apagar tarefa concluida</span>
                                        </ReactTooltip>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Lista>

                <Input>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Qual é sua próxima tarefa?" />
                    <button type="button" onClick={() => addTask()}> Adicionar tarefa </button>
                </Input>

                <SweetAlert
                    show={show}
                    title="Oops!"
                    text="O campo de tarefas está vazio. Por favor, preencha-o. 😏"
                    icon="warning"
                    onConfirm={() => setShow(false)}
                />

                <Msg>
                    {lista.length === 0 ? <h5> </h5> :
                        <h5>
                            Você tem {lista.length >= 2 ? lista.length + ' tarefas pendentes.' : lista.length + ' tarefa pendente.'}
                        </h5>
                    }
                </Msg>

            </CorpoTodolist>

            <div>
                <Rodape />
            </div>

        </Container>
    )
}

export default Todolist;
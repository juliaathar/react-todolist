import React, { useState } from 'react';
import './App.css';
import Title from './components/Title/Title';
import Box from './components/Box/Box';
import SearchBar from './components/Search/Search';
import Tarefa from './components/Tarefa/Tarefa';
import Modal from './components/Modal/Modal';
import Botao from "./components/Botao/Botao"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tarefas, setTarefas] = useState([
    { titulo: "Estudar JavaScript", status: false },
    { titulo: "Fazer compras", status: false }
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState(null);
  const [searchText, setSearchText] = useState('');  
  const tarefasFiltradas = tarefas.filter(tarefa =>
    tarefa.titulo.toLowerCase().includes(searchText.toLowerCase())
  );


  function adicionarTarefa(titulo) {
    const novaTarefa = {
      titulo: titulo,
      status: false 
    };
    setTarefas([...tarefas, novaTarefa]);
  }

  function marcarComoConcluida(indice) {
    const novasTarefas = tarefas.map((tarefa, i) =>
      i === indice ? { ...tarefa, status: true } : tarefa
    );
    setTarefas(novasTarefas);
  }

  function deletarTarefa(indice) {
    const novasTarefas = tarefas.filter((_, i) => i !== indice);
    setTarefas(novasTarefas);
  }

  function editarTarefa(index, titulo) {
    const novasTarefas = tarefas.map((tarefa, i) =>
      i === index ? { ...tarefa, titulo } : tarefa
    );
    setTarefas(novasTarefas);
  }

  function abrirModalParaEdicao(index) {
    setEditIndex(index);
    setEditTask(tarefas[index]);
    setIsModalOpen(true);
  }

  function fecharModal() {
    setEditIndex(null);
    setEditTask(null);
    setIsModalOpen(false);
  }


  return (
    <div className="App">
      <Box>
        <Title text="Terça-Feira, 24 de Julho" />
        <SearchBar onSearch={setSearchText} />
        <div className="task-list">
        {tarefasFiltradas.map((tarefa, index) => ( 
            <Tarefa 
              key={index} 
              tarefa={tarefa} 
              index={index} 
              marcarComoConcluida={marcarComoConcluida}
              deletarTarefa={deletarTarefa}
              editarTarefa={() => abrirModalParaEdicao(index)}
            />
          ))}
        </div>
        <Modal 
       isOpen={isModalOpen} 
       onClose={fecharModal} 
       onAddTask={adicionarTarefa} 
       onEditTask={editarTarefa}
       editIndex={editIndex}
       editTask={editTask}
      />
      </Box>
      <Botao 
          onClick={() => setIsModalOpen(true)} 
          texto="Adicionar Tarefa" 
        />

    </div>
  );
}

export default App;

import React from 'react';
import './Tarefa.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Tarefa = ({ tarefa, index, marcarComoConcluida,  deletarTarefa, editarTarefa }) => {
    const handleCheckboxChange = () => {
        marcarComoConcluida(index, !tarefa.status);
      };

      return (
        <div className={`task ${tarefa.status ? 'completed' : 'incomplete'}`}>
         <div className='status-title'>
         <input 
            type="checkbox" 
            checked={tarefa.status} 
            onChange={handleCheckboxChange} 
          />
          <p>{tarefa.titulo}</p>
         </div>
        <div className='div-actions'>
        <button 
            className="task-action-button delete-button" 
            onClick={() => deletarTarefa(index)}
          >
            <FaTrashAlt />
          </button>
          <button 
            className="task-action-button edit-button" 
            onClick={() => editarTarefa(index)}
          >
            <FaEdit />
          </button>
        </div>
      
        </div>
      );
  };
  
  export default Tarefa;
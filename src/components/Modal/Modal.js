import React, { useState, useEffect } from 'react';
import './Modal.css';
import Box from '../Box/Box';
import Botao from '../Botao/Botao';
import Title from '../Title/Title';

const Modal = ({ isOpen, onClose, onAddTask, onEditTask, editIndex, editTask}) => {
  const [titulo, setTitulo] = useState('');

  useEffect(() => {
    if (editTask) {
      setTitulo(editTask.titulo);
    }
  }, [editTask]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (titulo.trim()) {
      if (editIndex !== null) {
        onEditTask(editIndex, titulo);
      } else {
        onAddTask(titulo);
      }
      setTitulo('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <Title text={editIndex !== null ? "Editar Tarefa" : "Adicionar Tarefa"} />
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={titulo} 
            onChange={(e) => setTitulo(e.target.value)} 
            placeholder="Digite o título da tarefa"
          />
          <Botao onClick={handleSubmit} texto={editIndex !== null ? "Atualizar" : "Adicionar"} />
        </form>
      </div>
    </div>
  );
};

export default Modal;

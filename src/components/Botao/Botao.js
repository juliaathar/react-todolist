import Title from "../Title/Title";
import './Botao.css';


const Botao = ({ onClick, texto }) => {
    return (
      <div className="button" onClick={onClick}>
        <p className="text-button">{texto}</p>
      </div>
    );
  };

export default Botao;
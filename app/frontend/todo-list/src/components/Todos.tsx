import '../css/todos.css';
import { VscChromeClose, VscCheckAll } from 'react-icons/vsc';

function Todos() {
  return (
    <div className="todos-container">
      <div className="task-container">
        <button className="check-btn">
          <VscCheckAll size="3em" />
        </button>
        <p>Lavar louça</p>
        <button className="exclude-btn">
          <VscChromeClose size="3em" />
        </button>
      </div>

      <div className="task-container">
        <button className="check-btn">
          <VscCheckAll size="3em" />
        </button>
        <p>Escovar os dentes</p>
        <button className="exclude-btn">
          <VscChromeClose size="3em" />
        </button>
      </div>

      <div className="task-container">
        <button className="check-btn">
          <VscCheckAll size="3em" />
        </button>
        <p>Fazer almoço</p>
        <button className="exclude-btn">
          <VscChromeClose size="3em" />
        </button>
      </div>

      <div className="task-container">
        <button className="check-btn">
          <VscCheckAll size="3em" />
        </button>
        <p>Estudar</p>
        <button className="exclude-btn">
          <VscChromeClose size="3em" />
        </button>
      </div>
    </div>
  );
}

export default Todos;

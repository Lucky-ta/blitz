import '../css/todoInput.css';
import { FiPlusCircle } from 'react-icons/fi';
import { useState } from 'react';
import UseApi from '../services/UseApi';

function TodoInput() {
    const [task, setTask] = useState('');

    const handlerInput = async () => {
        const data = await UseApi.addNewTask(task);
        console.log(data);
    }

  return (
    <div className="text-todo-input-container">
      <input onChange={(e) => setTask(e.target.value) } className="text-todo-input" type="text" placeholder="ADICIONE UMA TAREFA" />
      <button onClick={ handlerInput } className="add-todo-btn">
        <FiPlusCircle size="3em" />
      </button>
    </div>
  );
}

export default TodoInput;

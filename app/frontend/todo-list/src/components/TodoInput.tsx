import '../css/todoInput.css';
import { FiPlusCircle } from 'react-icons/fi';
import { useContext, useState } from 'react';
import UseApi from '../services/UseApi';
import { MyContext } from '../context/MyContext';

function TodoInput() {
    const [task, setTask] = useState('');
    const { setReload, reload } = useContext(MyContext)

    const handlerInput = async () => {
        const data = await UseApi.addNewTask(task);
        setReload(!reload);
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

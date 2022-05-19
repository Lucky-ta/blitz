import '../css/todoInput.css'
import {FiPlusCircle} from "react-icons/fi";

function TodoInput() {
    return(
        <div className='text-todo-input-container'>
            <input className="text-todo-input" type="text" placeholder="ADICIONE UMA TAREFA"/>
            <button className='add-todo-btn'>
                <FiPlusCircle size={'3em'}/>
            </button>
        </div>
    )
}

export default TodoInput;
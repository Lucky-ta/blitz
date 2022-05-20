import '../css/todos.css';
import { VscChromeClose, VscCheckAll } from 'react-icons/vsc';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../contexts/MyContext';
import UseApi from '../services/UseApi';

function Todos() {
  const [ todos, setTodos ] = useState([]);


  useEffect(() =>{
    const getTasks = async () => {
        try {
            const data = await UseApi.getAllTasks();
            console.log(data);
            
            setTodos(data)
        } catch (e: any) {
            console.log(e.message);
        }
    }
    getTasks();
}, )

  return (
    <div className="todos-container">
        {todos.map(({task}: any) => {
            return(
                <div className="task-container">
                    <button className="check-btn">
                        <VscCheckAll size="3em" />
                    </button>
                    <p>{task}</p>
                    <button className="exclude-btn">
                        <VscChromeClose size="3em" />
                    </button>
                </div>
            )
        })}
    </div>
  );
}

export default Todos;

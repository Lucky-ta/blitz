import '../css/todos.css';
import { VscChromeClose, VscCheckAll } from 'react-icons/vsc';
import { useContext, useEffect, useState } from 'react';
import UseApi from '../services/UseApi';
import { MyContext } from '../context/MyContext';

function Todos() {
  const [ todos, setTodos ] = useState([]);
  const { reload, setReload } = useContext(MyContext);

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
    
}, [UseApi, reload])

  const deleteTask = async(id: any) => {
    await UseApi.deleteTask(id)
    setReload(!reload)
  }

  return (
    <div className="todos-container">
        {todos.map(({task, id}: any) => {
            return(
                <div className="task-container">
                    <button className="check-btn">
                        <VscCheckAll size="3em" />
                    </button>
                    <p >{task}</p>
                    <button onClick={() => deleteTask(id)} className="exclude-btn">
                        <VscChromeClose size="3em" />
                    </button>
                </div>
            )
        })}
    </div>
  );
}

export default Todos;

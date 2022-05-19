import '../css/todos.css'
import { VscChromeClose } from "react-icons/vsc";
import { VscCheckAll } from "react-icons/vsc";

function Todos() {
    return(
        <div className="todos-container">
            <div className='task-container'>
                <button className='check-btn'>
                    <VscCheckAll size={30}/>
                </button>
                <p>Lavar louça</p>
                <button className='exclude-btn'>
                    <VscChromeClose size={30}/>
                </button>
            </div>

            <div className='task-container'>
                <button className='check-btn'>
                    <VscCheckAll size={30}/>
                </button>
                <p>Escovar os dentes</p>
                <button className='exclude-btn'>
                    <VscChromeClose size={30}/>
                </button>
            </div>

            <div className='task-container'>
                <button className='check-btn'>
                    <VscCheckAll size={30}/>
                </button>
                <p>Fazer almoço</p>
                <button className='exclude-btn'>
                    <VscChromeClose size={30}/>
                </button>
            </div>

            <div className='task-container'>
                <button className='check-btn'>
                    <VscCheckAll size={30}/>
                </button>
                <p>Estudar</p>
                <button className='exclude-btn'>
                    <VscChromeClose size={30}/>
                </button>
            </div>
        </div>
    )
}

export default Todos;
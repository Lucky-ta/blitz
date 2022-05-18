import '../css/todos.css'

function Todos() {
    return(
        <div className="todos-container">
            <div className='task-container'>
                <p>Lavar louça</p>
                <button className='exclude-btn'>X</button>
            </div>

            <div className='task-container'>
                <p>Escovar os dentes</p>
                <button className='exclude-btn'>X</button>
            </div>

            <div className='task-container'>
                <p>Fazer almoço</p>
                <button className='exclude-btn'>X</button>
            </div>

            <div className='task-container'>
                <p>Estudar</p>
                <button className='exclude-btn'>X</button>
            </div>
        </div>
    )
}

export default Todos;
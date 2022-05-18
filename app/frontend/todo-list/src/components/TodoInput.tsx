import '../css/todoInput.css'

function TodoInput() {
    return(
        <div className='text-todo-input-container'>
            <input className="text-todo-input" type="text" placeholder="ADICIONE UMA TAREFA"/>
        </div>
    )
}

export default TodoInput;
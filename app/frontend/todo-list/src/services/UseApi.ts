class UseApi {
    async getAllTasks() {
        const data = await fetch('https://blitzbackend.herokuapp.com/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
    
        });
        return data.json();
    }

    async addNewTask(task: string) {
        const data = await fetch('https://blitzbackend.herokuapp.com/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task })
        });
        return data.json();
    }

    async deleteTask(id: number) {
        const data = await fetch(`https://blitzbackend.herokuapp.com/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return data.json()
    }
}

export default new UseApi();
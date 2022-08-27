export class InTodo {
    todoOne: any;
    load() {
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') == '') {
            console.log('No Tools found...');
            let tools = [
                {
                    title: 'ToDo',
                    assign_date: '22/03/2004',
                    due_date: '30/5/2005',
                    status: ''
                },
                // {
                //     text: 'Write some Documents'
                // },
                // {
                //     text: 'Take a lunch'
                // }
            ];

            this.todoOne = localStorage.setItem('todos', JSON.stringify(tools));
            return this.todoOne
        } else {
            console.log('Find another one todo list...')
        }
    }
}

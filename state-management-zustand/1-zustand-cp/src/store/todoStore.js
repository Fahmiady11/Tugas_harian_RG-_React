import create from 'zustand';

const useTodoStore = create((set) => ({
    todos: [

    ],

    addTodo: (todo) => set((state) => ({
        todos: [...state.todos, todo]
    })),

    removeTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
    })),

    toggleTodo: (id) => set((state) => ({
        todos: state.todos.map((todo) => {
            if (todo.id === id) {
                todo.isDone = !todo.isDone
            }
            return todo;
        })
    }))

}))
// TODO: answer here

export default useTodoStore;
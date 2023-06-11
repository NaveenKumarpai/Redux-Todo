
const savedTodos = localStorage.getItem("todos")
const initialState = savedTodos ? { todos:JSON.parse(savedTodos)}:{ todos:[]}


const TodoReducers =( state = initialState  , action ) => {
    switch (action.type) {
       case "ADD_TODO":
        return { todos: action.payload};
       
        case "REMOVE_TODO":
        return { todos: action.payload};

        case "EDIT_TODO":
        return { todos: action.payload};

        default:
            return state;
    }
};

export default TodoReducers;         


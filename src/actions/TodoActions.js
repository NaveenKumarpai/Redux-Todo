export const AddTodoActions =(todo) => (dispatch, getState) => {
    const{
        Todo :{ todos },
    }= getState();

    const hasTodo = todos.find((i) => i.todo === todo);
    
    if(!hasTodo && todo !== ""){
        const id = todos.length ? todos[0].id + 1 : 1;

     const newTodos = [{id:id , todo }, ...todos]

        localStorage.setItem("todos", JSON.stringify(newTodos))

        dispatch({
            type: "ADD_TODO",
            payload : newTodos,
        });
    }
};

export const RemoveTodoActions = (todo) => (dispatch, getState) => {
    const{
        Todo :{ todos },
    } = getState();

    const updateTodos = todos.filter((t) => t.id !== (todo.id))
    localStorage.setItem("todos", JSON.stringify(updateTodos))

    dispatch({
        type: "REMOVE_TODO",
        payload: updateTodos,
    });

};
export const EditTodoActions = (todo) => (dispatch, getState) => {
    const state = getState();
    const todos = state.Todo.todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, todo: todo.todo };
      } else {
        return t;
      }
    });
    dispatch({ 
        type: "EDIT_TODO",
         payload:  todos,
    });
  };


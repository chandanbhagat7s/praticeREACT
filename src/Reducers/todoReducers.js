
// we create reducers function 
// which will take two argumnet : state and actions 
// state : passed which to be maupated 
// actions : which has type : name of function 
//                      payload : where we pass argument and extract it 

// no need of setState function with the help of reduccer hook it will automaticaly update it


// one problem is solve that 

function todoReducers(state, action) {

    if (action.type == 'add_todo') {
        let sub = action.payload.sub

        return [
            ...state,
            { id: state.length + 1, sub, finished: false },
        ]
    } else if (action.type == 'update_todo') {
        let todo = action.payload.todo
        let sub = action.payload.sub


        const newList = state.map((l) => {
            if (todo.id == l.id) {
                todo.sub = sub;
            }
            return l;
        });
        return newList;

    }
    else if (action.type == 'delete_todo') {
        let todo = action.payload.todo

        const newList = state.filter((l) => {
            return l.id != todo.id;
        });
        return newList;
    }
    else if (action.type == 'finish_todo') {
        let todo = action.payload.todo
        let finished = action.payload.finished

        const newList = state.map((l) => {
            if (todo.id == l.id) {
                todo.finished = finished;
            }
            return l;
        });
        return newList;
    } else {
        return state;
    }






}


export default todoReducers;



















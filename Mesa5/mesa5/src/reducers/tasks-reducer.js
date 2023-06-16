const State = {
    tasks: [],
};

export default function TasksReducer(state = State, action){
    const copyState = { ...state };

    switch(action.type){
        case "ADD_TASK":
            copyState.tasks.push({ ...action.payload.task, id: Date.now() });
            return { ...copyState };
        case "REMOVE_TASK":
            copyState.tasks.splice(action.payload.index, 1);
            return { ...copyState };
        default: return state;
    }
}
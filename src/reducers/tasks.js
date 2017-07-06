export default function tasks(state = {
  tasks: []
}, action) {

  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        tasks: action.payload
      }

    case "ADD_TASK":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      }

    case "DELETE_TASK":
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
      return {
        ...state,
        tasks: [...state.tasks]
      }

    case "COMPLITED_TASK":
      state.tasks = state.tasks.filter(t => t.id !== action.payload.id);
      return {
        ...state,
        tasks: [ action.payload, ...state.tasks ]
      };
    default:
      return state;
  }
}
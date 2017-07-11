export default function tasks(state = {
  tasks: [],
  edit: '',
  sortBy: {title: "priority", asc: "desc"}
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

    case "EDIT_TASK":
      state.tasks = state.tasks.filter(t => t.id !== action.payload.id);
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      }

    case "COMPLITED_TASK":
      state.tasks = state.tasks.filter(t => t.id !== action.payload.id);
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };

    case "EDIT_ID":
      return {
        ...state,
        edit: action.payload
      }
    case "SORT_BY":
      return {
        ...state,
        sortBy: action.payload
      }
    default:
      return state;
  }
}
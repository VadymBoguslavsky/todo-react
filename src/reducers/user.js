export default function user(state = {}, action) {
  switch (action.type) {
    case "STORE_USER":
      return action.payload;

    default:
      return state;
  }
}
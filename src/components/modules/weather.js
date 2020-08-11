import { FETCH_FLIGHT } from "../../lib/api/index";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_FLIGHT:
      console.log(action);
      return [action.payload.data, ...state];
  }
  return state;
}

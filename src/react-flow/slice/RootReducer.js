import { combineReducers } from "redux";

// React Flow Reducer
import { ReactFlowReducer } from "./ReactFlowSlice";

export const RootReducer = combineReducers({
  reactFlow: ReactFlowReducer,
});

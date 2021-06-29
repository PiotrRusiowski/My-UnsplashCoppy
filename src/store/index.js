import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import mainReducer from "../reducer/mainReducer";
import supportReducer from "../reducer/supportReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  mainReducer,
  supportReducer,
});

const store = createStore(rootReducer, composedEnhancer);
export default store;

import { combineReducers, compose, createStore } from "redux";
import { PermissionReducers } from "./reducers/permissionReducer";

const appReducers = combineReducers({
    PermissionReducers,
})
const rootReducers = (state, action) => {
    return appReducers(state, action)
}

const store = createStore(rootReducers, {});

export default store;
import {combineReducers} from "redux";
import apiCallsInProgress from "./apiStatusReducer";
import courses from "../reducers/courseReducer";

const rootReducer = combineReducers({
    apiCallsInProgress,
    courses
});


export default rootReducer;

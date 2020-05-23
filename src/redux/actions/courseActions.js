import {beginAPICall} from "../actions/apiStatusActions";
import * as courseAPI from "../../api/courseAPI";
import * as types from "./actionTypes";

export function loadCoursesSuccess(courses) {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}


export function loadCourses() {
    return function(dispatch) {
        dispatch(beginAPICall());
        return courseAPI
            .getCourses()
            .then(courses => {dispatch(loadCoursesSuccess(courses))})
            .catch(error => {
                console.log("Error");
            });    };
}

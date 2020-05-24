import {beginAPICall} from "../actions/apiStatusActions";
import * as courseAPI from "../../api/courseAPI";
import * as types from "./actionTypes";

export function loadCoursesSuccess(courses) {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
    return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function deleteCourseOptimistic(course) {
    return {type: types.DELETE_COURSE_OPTIMISTIC, course}
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

export function saveCourse(course) {
    return function (dispatch) {
        return courseAPI
            .saveCourse(course)
            .then(savedCourse => dispatch(createCourseSuccess(savedCourse)))
            .catch(error => console.log("Error"));
    }
}

export function deleteCourse(course) {
    return function (dispatch) {
        dispatch(deleteCourseOptimistic(course));
        return courseAPI
            .deleteCourse(course._id);
    }
}

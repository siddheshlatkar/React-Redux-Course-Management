import {handleError, handleResponse} from "./apiUtils";

const courseURL = "https://wbdv-generic-server.herokuapp.com/api/bannur/courses";

export function getCourses() {
    return fetch(courseURL).then(handleResponse).catch(handleError);
}

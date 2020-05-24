import {handleError, handleResponse} from "./apiUtils";

const courseURL = "https://wbdv-generic-server.herokuapp.com/api/bannur/courses";
// const courseURL = "https://reqres.in/api/users";

export function getCourses() {
    return fetch(courseURL).then(handleResponse).catch(handleError);
}

export function deleteCourse(courseId) {
    return fetch(`${courseURL}/${courseId}`, {
        method: 'DELETE'
    }).then(handleResponse)
        .catch(handleError);
}

export function saveCourse(course) {
    return fetch(courseURL + (course.id || ""), {
        method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json" },
        body: JSON.stringify(course)
    })
        .then(handleResponse)
        .catch(handleError);
}

////"start": "react-scripts start",

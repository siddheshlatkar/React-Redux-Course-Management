import * as types from "./actionTypes";

export function beginAPICall() {
    return {type: types.BEGIN_API_CALL};
}

export function apiCallError() {
    return {types: types.API_CALL_ERROR};
}

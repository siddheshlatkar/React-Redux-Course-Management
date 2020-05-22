import React from "react";
import { Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./home/HomePage";

function App() {
    return (
        <div>
            <HomePage/>
        </div>
    );
}

export default App;

import React from "react";
import {render} from "react-dom";
import App from "./components/App";
import {Provider as ReduxProvider} from "react-redux";
import configureStore from "./redux/configureStore";

const store = configureStore();

render(
    <ReduxProvider store={store}>
    <App />
    </ReduxProvider>,
    document.getElementById("root"));

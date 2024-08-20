import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("h1", {id:"child1"}, "this is react"),
    React.createElement("h2", {id:"child2"}, "child2")
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
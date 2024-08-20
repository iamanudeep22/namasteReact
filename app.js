const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("h1", {class:"child1"}, "child1"),
    React.createElement("h2", {id:"child2"}, "child2")
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
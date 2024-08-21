import React from "react";
import ReactDOM from "react-dom/client";

//React element
const heading = (<h1 id="heading" className="heading">Namaste React from JSX!!</h1>);

//React Components:- 
//1) Class based components -> uses JS classes to create component (old)
//2) Functional components -> uses JS functions to create component (new) -> just a JS functions which returns JSX

//component composition:- composing one component inside another

const Title = () => (<h1>ReactJS</h1>);

const HeadingComponent = () => (
    <div className="container">
        <Title/>
        {heading}
        <h1 className="heading">Namaste React from Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
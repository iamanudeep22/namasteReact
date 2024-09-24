import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(){
        super();
        // console.log("parent constructor");
    }

    componentDidMount(){
        // console.log("parent did mount")
    }

    render(){
        // console.log("parent render")
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                <User name={"AnudeepKN (fn)"} location={"Mandya (fn)"} contact={"@anudeep22 (fn)"}/>
                <UserClass name={"First"} location={"Mandya (Cls)"} contact={"@anudeep22 (Cls)"}/>
                
            </div>
        )
    }
}


export default About;
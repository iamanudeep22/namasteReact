import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        
        this.state= {
            userInfo:{
                name: "dummy",
                loctaion: "default"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/iamanudeep22");
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        console.log(json);
    }

    render(){
        // console.log(this.props.name+" child render");
        const {name, avatar_url} = this.state.userInfo;
        
        

        return (
            <div className="user-card">
                <img src={avatar_url} alt="avatar"/>
                <h2>Name: {name}</h2>
                
               
            </div>
        )
    }
}

export default UserClass;
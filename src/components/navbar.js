import React from "react";
import Links from "./Link";
import NavScrollExample from "./nav";

export default class Header extends React.Component{
    constructor() {
        super();
        this.state = {
            userName: "Abdalla",
            Age: 20,
        }
    }
    
    changeState = () => {
        this.setState({ userName: this.state.userName === "Abdalla" ? "Hamdy" : "Abdalla" })
    };
    render() {
        return (
            <>
                <NavScrollExample/>
                <Links name="Home" link="#"/>
                <Links name="Home" link="#"/>
                <h1>Hello { this.state.userName}</h1>
                <button onClick={this.changeState}>Change Name</button>
            </>
        );
    }
}
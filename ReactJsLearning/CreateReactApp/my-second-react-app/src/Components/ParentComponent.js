import React, { Component } from 'react';
import PureComponent from "./PureComponent";
import RegularComponent from "./RegularComponent";

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Joel Learning"
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Joel Learn"
            });
        }, 3000);
    }

    render() {
        console.log("ParentComp");
        return (
            <div>
                I am the parent component
                <PureComponent name={this.state.name}/>
                <RegularComponent name={this.state.name}/>
            </div>
        );
    }
}

export default ParentComponent;
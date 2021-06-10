import React, { Component } from 'react';
import BellUnSubscribe from "./BellUnSubscribe.png";
import BellSubscribe from "./BellSubscribe.png";

class NewComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Subscribe to Joel's channel",
            subWord: "Subscribed",
            imageUrl: BellUnSubscribe
        }
    }

    styles = {
        fontStyle: "italic",
        color: "Teal"
    };
    imageStyle = {
        width: "20px",
        height: "20px"
    }
    subscribeChannel = () => {
        this.setState({ message: "Click on the bell icon to see all notifications" })
    };
    imageChange = () => {
        this.setState({
            imageUrl: BellSubscribe,
            message: "Thank you for subscribing my channel"
        });
    };
    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.subscribeChannel}>{this.state.subWord}</button> <img src={this.state.imageUrl} style={this.imageStyle} onClick={this.imageChange}></img>
            </div>
        );
    }
}

export default NewComponent;
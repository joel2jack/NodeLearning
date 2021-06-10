import React, { Component } from 'react';
import UpdatedHigherOrder from "./HigherOrder";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    IncrementCount=()=>{
        this.setState({count:this.state.count + 1});
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <button onMouseOver={this.IncrementCount}>{this.props.name} Incremented to {count} times</button>
            </div>
        );
    }
}

export default UpdatedHigherOrder(Counter);
import React from 'react';

class ClassProps extends React.Component {
    render() {
        return (
            <div><h1>Hi {this.props.name} from {this.props.place}. This is Class Props</h1>
            {this.props.children}</div>
        );
    }
}

export default ClassProps;
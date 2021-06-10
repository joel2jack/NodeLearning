import React from 'react';

class PureComponent extends React.PureComponent {
    render() {
        console.log("PureComp");
        return (<div>
            I am the pure component {this.props.name}
        </div>);
    }
}

export default PureComponent;
import React from 'react'

class RegularComponent extends React.Component {
    render() {
        console.log("RegComp");
        return (<div>
            I am the regular component {this.props.name}
            </div>);
    }
}

export default RegularComponent;
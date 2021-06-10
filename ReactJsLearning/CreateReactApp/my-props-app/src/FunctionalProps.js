import React from 'react';

function FunctionalProps(props) {
    return (
        <div>
            <h3>This is functional Component</h3>,
            <h3>Hello {props.name} from {props.place}</h3>
        </div>
    );
}

export default FunctionalProps;
import React from 'react';

const UpdatedHigherOrder = OriginalComponent => {
    class NewComponent extends React.Component{
        render(){
            return <OriginalComponent name="Joel"/>
        }
    }
    return NewComponent;
}

export default UpdatedHigherOrder;
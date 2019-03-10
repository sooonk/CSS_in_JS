import React, {} from 'react';

const personal_style = {
    lineHeight: "100px",
    color: "black",
    margin: 0,
    }

class PersonalData extends React.Component {



    render() {
        return <div style={personal_style}>
                    <h2>{this.props.name}</h2>
                    <h3>{this.props.job}</h3>
                </div>
        
    }
}

export default PersonalData;
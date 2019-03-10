import React, {} from 'react';



const header_style = {
    lineHeight: "100px",
    backgroundColor: "maroon",
    color: "whitesmoke",
    width: "100%",
    top: 0,
    margin: 0,
    }

class Header extends React.Component {



    render() {
        return <div style={header_style}>
                    <h1>{this.props.applicationName}</h1>
                </div>
        
    }
}

export default Header;
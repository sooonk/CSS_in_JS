import React, {} from 'react';
import image from './image.jpg'


const image_style = {
    float: 'left',
    margin: '20px',
    marginLeft: '200px'
}

class Image extends React.PureComponent {

    render() {
        return (
        <div style={image_style}>
        <img src={image} alt=''  />
        </div>
        )
    }
}

export default Image;
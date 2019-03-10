import React, {} from 'react';


class Content extends React.PureComponent {
   state = {
        displayContent: false,
    };

    handleChange = () => {
        this.setState({
            displayContent: !this.state.displayContent
        })
    }

    renderView = () => this.props.data.map((item)=> (
        <div key = {item.id}
        >
            {item.title}
            {item.school}

            <div>{item.linkedin}</div>
            <div>{item.mail}</div>
        </div>
        )
    )
    render() {
        return (
        <div>
        
            <div onClick={this.handleChange}>
                <h2>{this.props.title}</h2>
            </div>
            <div onClick={this.handleChange}>
                <h3>{this.props.school}</h3>
            </div>
            <div>
                {this.state.displayContent ? this.renderView(): null}
            </div>
        </div>
        )
    }
}

export default Content;
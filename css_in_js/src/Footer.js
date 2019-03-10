import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const footer_style = {
    backgroundColor: "black",
    color: "whitesmoke",
    position: "fixed",
    width: "100%",
    bottom: 0
}
class Footer extends React.PureComponent {

   static propTypes = {
        applicationName: PropTypes.string,
    };
    static defaultProps = {
        applicationName: "example application footer",
        comment:"All rights reserved"
    }


    render() {
        return <Fragment><footer style={footer_style}>{this.props.applicationName} {this.props.comment} </footer></Fragment>
    }
}

export default Footer;
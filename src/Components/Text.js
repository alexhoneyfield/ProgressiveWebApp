import React from 'react';

class Text extends React.Component {
    render() {
        return (
            <p className={this.props.className}>{this.props.children}</p>
        );
    }
}

export default Text;
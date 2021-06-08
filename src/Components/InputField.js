import React from 'react';

import './InputField.css'

class InputField extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }

        this.update = this.update.bind(this)

    }

    update(e) {
        this.setState({ value: e.target.value })
        this.props.update(e.target.value)
    }

    render() {
        return (
            <input className='input-field__field' type={this.props.type} value={this.state.value} onChange={this.update} />
        );
    }
}

export default InputField;
import React from 'react';

import { set } from 'idb-keyval'

import './Login.css';
import Button from '../Components/Button'
import Text from '../Components/Text'
import InputField from '../Components/InputField'
import View from '../Components/View'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.logIn = this.logIn.bind(this)
        this.updateUsername = this.updateUsername.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
    }

    updateUsername(i) {
        this.setState({ username: i })
    }

    updatePassword(i) {
        this.setState({ password: i })
    }

    logIn() {
        set('Username', this.state.username)
        set('Password', this.state.password)
        this.props.logIn()
    }

    render() {
        return (
            <View className='LoginPage'>
                <Text className='LoginLabel'>Username</Text>
                <InputField update={this.updateUsername} />
                <Text className='LoginLabel'>Password</Text>
                <InputField update={this.updatePassword} type='password' />
                <Button className='LoginButton' onClick={this.logIn}>Log In</Button>
            </View>
        );
    }
}

export default Login;
import React from 'react';

import { get, del } from 'idb-keyval'

import './Home.css';

import View from '../Components/View'
import Button from '../Components/Button'
import Text from '../Components/Text'
import List from '../Components/List'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Username: '',
            Password: ''
        }

        this.deleteLogin = this.deleteLogin.bind(this)
    }

    async componentDidMount() {
        this.setState({ Username: await get('Username') })
        this.setState({ Password: await get('Password') })
    }

    items = [
        { name: 'Hello World', key: 0 },
        { name: 'Hello World', key: 1 },
        { name: 'Hello World', key: 2 },
        { name: 'Hello World', key: 3 },
        { name: 'Hello World', key: 4 },
        { name: 'Hello World', key: 5 },
        { name: 'Hello World', key: 6 },
        { name: 'Hello World', key: 7 },
        { name: 'Hello World', key: 8 },
        { name: 'Hello World', key: 9 },
        { name: 'Hello World', key: 10 },
        { name: 'Hello World', key: 11 },
        { name: 'Hello World', key: 12 },
        { name: 'Hello World', key: 13 },
        { name: 'Hello World', key: 14 },
    ]

    renderItem(data) {
        return <Text className='home__list-item' key={data.key}>{data.name}</Text>
    }

    deleteLogin() {
        del('Username')
        del('Password')

        this.setState({ Username: '', Password: '' })
    }

    render() {
        return (
            <View className='home__container'>
                <Text className='home__label'>Username: {this.state.Username}</Text>
                <Text className='home__label'>Password: {this.state.Password}</Text>
                <Button className='home__button' onClick={this.deleteLogin}>Delete Login Information</Button>
                <List render={this.renderItem} data={this.items} />
            </View>
        );
    }
}

export default Home;
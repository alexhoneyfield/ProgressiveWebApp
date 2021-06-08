import React from 'react';

import { get } from 'idb-keyval'

import './Home.css';
import Text from '../Components/Text'
import List from '../Components/List'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Username: ''
        }
    }

    async componentDidMount() {
        this.setState({ Username: await get('Username') })
    }

    items = [
        'Hello World',
        'Hello World',
        'Hello World',
        'Hello World',
        'Hello World',
        'Hello World',
        'Hello World',
        'Hello World',
        'Hello World',
        'Hello World',
        'Hello World',
        'Hello World',
        'Hello World',
        'Hello World',
        'Hello World',
        'Hello World',
        'Hello World'
    ]

    renderItem(data) {
        return <Text className='home__list-item'>{data}</Text>
    }

    render() {
        return (
            <List className='home__container' render={this.renderItem} data={this.items} />
        );
    }
}

export default Home;
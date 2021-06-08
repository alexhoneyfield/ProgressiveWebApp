import React from 'react';

import { get } from 'idb-keyval'

import './Home.css';
import Button from '../Components/Button'
import Text from '../Components/Text'
import Title from '../Components/Title'
import ScrollView from '../Components/ScrollView'

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

    render() {
        return (
            <ScrollView className='HomePage'>
                <Title className='List-Item'>Hello World</Title>
                <Button className='ListButton' onClick={() => console.log('Button Pressed')}>Button</Button>
                <Text className='List-Item'>Hello World</Text>
                <Text className='List-Item'>Hello World</Text>
                <Text className='List-Item'>Hello World</Text>
                <Text className='List-Item'>Hello World</Text>
                <Text className='List-Item'>Hello World</Text>
                <Text className='List-Item'>Hello World</Text>
                <Text className='List-Item'>Hello World</Text>
                <Text className='List-Item'>Hello World</Text>
                <Text className='List-Item'>Hello World</Text>
                <Text className='List-Item'>Hello World</Text>
                <Text className='List-Item'>Hello World</Text>
                <Text className='List-Item'>Hello World</Text>
            </ScrollView>
        );
    }
}

export default Home;
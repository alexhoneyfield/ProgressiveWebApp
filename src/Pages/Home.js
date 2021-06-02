import React from 'react';

import { get } from 'idb-keyval'

import './Home.css';
import Button from '../Components/Button'
import Text from '../Components/Text'
//import View from '../Components/View'
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
                <Text className='List-Item Title'>Hello World</Text>
                <Button className='ListButton' onClick={() => console.log('Button Pressed')}>Button</Button>
                <Text className='List-Item Text'>Hello World</Text>
                <Text className='List-Item Text'>Hello World</Text>
                <Text className='List-Item Text'>Hello World</Text>
                <Text className='List-Item Text'>Hello World</Text>
                <Text className='List-Item Text'>Hello World</Text>
                <Text className='List-Item Text'>Hello World</Text>
                <Text className='List-Item Text'>Hello World</Text>
                <Text className='List-Item Text'>Hello World</Text>
                <Text className='List-Item Text'>Hello World</Text>
                <Text className='List-Item Text'>Hello World</Text>
                <Text className='List-Item Text'>Hello World</Text>
                <Text className='List-Item Text'>Hello World</Text>
            </ScrollView>
        );
    }
}

export default Home;
import React from 'react';

import './Camera.css';
import View from '../Components/View'
import CameraView from '../Components/CameraView'

class Camera extends React.Component {
    render() {
        return (
            <View className='camera-page__container'>
                <CameraView />
            </View>
        );
    }
}

export default Camera;
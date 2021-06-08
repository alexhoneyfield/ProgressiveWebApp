import React from 'react'

import './CameraView.css'

import View from './View'
import Button from './Button'
import Title from './Title'
import Transition from './Transition'
import Loading from '../Pages/Loading'

class CameraView extends React.Component {

    constructor() {
        super()

        this.state = {
            stream: null,
            image: null,
            page: 1
        }

        this.webcamElement = React.createRef();
        this.canvasElement = React.createRef();

        this.takeImage = this.takeImage.bind(this)
        this.retakeImage = this.retakeImage.bind(this)
        this.saveImage = this.saveImage.bind(this)

        this.pageChanged = this.pageChanged.bind(this)
    }

    componentDidMount() {
        console.log('Mount')
        this.initializeCamera()
    }

    componentWillUnmount() {
        this.closeCamera()
    }

    async initializeCamera() {

        if (navigator.mediaDevices !== undefined && navigator.mediaDevices.getUserMedia !== undefined) {
            try {
                let stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: 'environment' } })

                this.setState({ stream: stream, page: 2 })

                console.log('Camera aquired')
            } catch (error) {
                console.log('Error getting camera feed')
                this.setState({ page: 0 })
            }
        } else {
            console.log('Error getting camera feed')
            this.setState({ page: 0 })
        }
    }

    closeCamera() {
        if (this.state.stream !== null) {
            this.state.stream.getTracks().forEach(track => track.stop())
            this.setState({ stream: null })
        }
    }

    takeImage() {

        console.log("Image taken")

        const imageWidth = this.webcamElement.current.videoWidth;
        const imageHeight = this.webcamElement.current.videoHeight;
        const context = this.canvasElement.current.getContext('2d');

        this.canvasElement.current.width = imageWidth;
        this.canvasElement.current.height = imageHeight;

        context.drawImage(this.webcamElement.current, 0, 0, imageWidth, imageHeight);

        this.setState({ page: 3, image: this.canvasElement.current.toDataURL('image/jpeg', 0.85) })
        this.closeCamera()
    }

    retakeImage() {
        this.setState({ page: 1 })
        this.initializeCamera()
    }

    saveImage() {
        console.log(this.state.image)
    }

    pageChanged(i) {
        console.log('Page: ' + i)
        if (i === 2) {
            if ("srcObject" in this.webcamElement.current) {
                console.log('Source object')
                this.webcamElement.current.srcObject = this.state.stream;
            }
        }
    }

    render() {
        console.log('Render')

        let pages = [
            // Page 0: No camera
            <View className='CameraView'>
                <Title>No Camera</Title>
            </View>,

            // Page 1: Getting camera feed
            <View className='CameraView'>
                <Loading text='Loading Camera' />
            </View>,

            // Page 2: Camera preview
            <View className='CameraView'>
                <video className='Camera' autoPlay playsInline muted ref={this.webcamElement} />
                <canvas className='ImageCanvas' ref={this.canvasElement}></canvas>
                <View className='ImageButtonContainer'>
                    <Button className='ImageButton' onClick={this.takeImage}>Take Photo</Button>
                </View>
            </View>,

            // Page 3: Image snapshot
            <View className='CameraView'>
                <img className='ImagePreview' src={this.state.image} alt='' />
                <View className='ImageButtonContainer'>
                    <Button className='ImageButton' onClick={this.retakeImage}>Re-take Photo</Button>
                    <Button className='ImageButton' onClick={this.saveImage}>Save Photo</Button>
                </View>
            </View>
        ]

        return <Transition pages={pages} page={this.state.page} change={this.pageChanged} name='Camera' />
    }
}

export default CameraView;
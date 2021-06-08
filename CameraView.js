import React from 'react'

import './CameraView.css'

import View from './View'
import Button from './Button'
import Text from './Text'
import Transition from './Transition'

class CameraView extends React.Component {

    constructor() {
        super()

        this.state = {
            captured: false,
            camera: true,
            stream: null,
            image: null
        }

        this.webcamElement = React.createRef();
        this.canvasElement = React.createRef();

        this.takeImage = this.takeImage.bind(this)
        this.retakeImage = this.retakeImage.bind(this)
        this.saveImage = this.saveImage.bind(this)
    }

    componentDidMount() {
        this.initializeCamera()
    }

    componentWillUnmount() {
        this.closeCamera()
    }

    async initializeCamera() {

        if (navigator.mediaDevices !== undefined && navigator.mediaDevices.getUserMedia !== undefined) {
            try {
                let stream = await navigator.mediaDevices.getUserMedia({
                    audio: false, video: { facingMode: 'environment' }
                })

                this.setState({ stream: stream })

                if ("srcObject" in this.webcamElement.current) {
                    this.webcamElement.current.srcObject = stream;
                } else {
                    // For older browsers without the srcObject.
                    this.webcamElement.current.src = window.URL.createObjectURL(stream);
                }
            } catch (error) {
                this.setState({ camera: false })
            }
        } else {
            this.setState({ camera: false })
        }
    }

    closeCamera() {
        if (this.state.stream !== null) {
            this.state.stream.getTracks().forEach(track => track.stop())
            this.setState({ stream: null })
        }
    }

    takeBase64Photo() {

        const imageWidth = this.webcamElement.current.videoWidth;
        const imageHeight = this.webcamElement.current.videoHeight;
        const context = this.canvasElement.current.getContext('2d');

        this.canvasElement.current.width = imageWidth;
        this.canvasElement.current.height = imageHeight;

        context.drawImage(this.webcamElement.current, 0, 0, imageWidth, imageHeight);

        const base64 = this.canvasElement.current.toDataURL('image/jpeg', 0.85);
        return base64;
    }

    takeImage() {
        const img = this.takeBase64Photo()
        this.setState({ captured: true, image: img })
        this.closeCamera()
    }

    retakeImage() {
        this.setState({ captured: false })
        this.initializeCamera()
    }

    saveImage() {
        console.log(this.state.image)
    }

    pages = [
        <View className='CameraView'>
            <Text className='Title'>No Camera</Text>
        </View>,

        <View className='CameraView'>
            <Text className='Title'>Loading Camera</Text>
        </View>,

        <View className='CameraView'>
            <video className='Camera' autoPlay playsInline muted ref={this.webcamElement} />
            <canvas className='ImageCanvas' ref={this.canvasElement}></canvas>
            <View className='ImageButtonContainer'>
                <Button className='ImageButton' onClick={this.takeImage}>Take Photo</Button>
            </View>
        </View>,

        <View className='CameraView'>
            <img className='ImagePreview' src={this.state.image} alt='' />
            <canvas className='ImageCanvas' ref={this.canvasElement}></canvas>
            <View className='ImageButtonContainer'>
                <Button className='ImageButton' onClick={this.retakeImage}>Re-take Photo</Button>
                <Button className='ImageButton' onClick={this.saveImage}>Save Photo</Button>
            </View>
        </View>
    ]

    render() {

        if ((this.state.camera && this.state.stream !== null) || this.state.captured) {

            const image = this.state.captured ? <img className='ImagePreview' src={this.state.image} alt='' /> : <video className='Camera' autoPlay playsInline muted ref={this.webcamElement} />

            const buttons = this.state.captured ?
                <View className='ImageButtonContainer'>
                    <Button className='ImageButton' onClick={this.retakeImage}>Re-take Photo</Button>
                    <Button className='ImageButton' onClick={this.saveImage}>Save Photo</Button>
                </View>
                :
                <View className='ImageButtonContainer'>
                    <Button className='ImageButton' onClick={this.takeImage}>Take Photo</Button>
                </View>

            return (
                <View className='CameraView'>
                    {image}
                    <canvas className='ImageCanvas' ref={this.canvasElement}></canvas>
                    {buttons}
                </View>
            )
        } else if (this.state.stream === null && this.state.camera) {
            return (
                <View className='CameraView'>
                    <Text className='Title'>Loading Camera</Text>
                </View>
            )
        } else {
            return (
                <View className='CameraView'>
                    <Text className='Title'>No Camera</Text>
                </View>
            )
        }
    }
}

export default CameraView;
import React from 'react';

import './Transition.css';

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            page: this.props.page,
            nextPage: this.props.page,
            transitioning: false,
            callChange: false
        }

        this.wrapper = React.createRef()

        this.transitionEnd = this.transitionEnd.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        if (props.page !== state.page) {
            return {
                nextPage: props.page,
                transitioning: true,
                callChange: false
            }
        } else {
            return null
        }
    }

    shouldComponentUpdate(props, state) {
        console.log("Should " + props.name + " update?")
        console.log('Current state:')
        console.log(this.state)
        console.log('Next state:')
        console.log(state)

        if (this.state.nextPage === state.nextPage && this.state.page === state.page) {
            console.log(props.name + " won't update")
            return false
        } else {
            console.log(props.name + " will update")
            return true
        }
    }

    componentDidUpdate() {
        if (this.state.callChange) {
            this.props.change(this.state.nextPage)
            this.setState({ callChange: false })
        }
    }

    transitionEnd(e) {
        if (e.target === this.wrapper.current) {
            console.log(this.props.name + (e.target.className === 'Transition FadeOut' ? (" has faded out from page " + this.state.page) : (' has faded in to page ' + this.state.nextPage)))
        }

        if (e.target === this.wrapper.current && e.target.className === 'Transition FadeOut') {
            this.setState({ page: this.state.nextPage, transitioning: false })

            console.log('Called change for ' + this.props.name)

            //this.props.change(this.state.nextPage)
            this.setState({ callChange: true })
        }
    }

    render() {

        let page = this.props.pages[this.state.page]

        //console.log(this.state.page + " , " + this.state.nextPage + ", " + this.props.name)

        return (
            <div className={'Transition' + (this.state.transitioning ? ' FadeOut' : '')} onTransitionEnd={this.transitionEnd} ref={this.wrapper}>
                {page}
            </div>
        );
    }
}

export default App;
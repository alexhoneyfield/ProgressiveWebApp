import React from 'react';

import './Transition.css';

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            page: 0,
            nextPage: 0,
            transitioning: false
        }

        this.transitionEnd = this.transitionEnd.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        if (props.page !== state.page) {
            return {
                nextPage: props.page,
                transitioning: true
            }
        } else {
            return null
        }
    }

    transitionEnd(e) {
        if (e.target.className === 'Transition FadeOut') {
            this.setState({ page: this.state.nextPage, transitioning: false })
        }

        this.props.change(this.state.nextPage)
    }

    render() {

        let page = this.props.pages[this.state.page]

        return (
            <div className={'Transition' + (this.state.transitioning ? ' FadeOut' : '')} onTransitionEnd={this.transitionEnd}>
                {page}
            </div>
        );
    }
}

export default App;
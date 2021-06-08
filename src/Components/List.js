import React from 'react';

import './List.css'

import ScrollView from './ScrollView';

class List extends React.Component {
    render() {

        let items = [];

        for (var i = 0; i < this.props.data.length; i++) {
            items[i] = this.props.render(this.props.data[i])
        }

        return (
            <ScrollView className={'list__container'}>
                {items}
            </ScrollView>
        );
    }
}

export default List;
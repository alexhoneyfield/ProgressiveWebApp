import React from 'react';

import './List.css';
import './ScrollView'
import ScrollView from './ScrollView';

class List extends React.Component {
    render() {

        let items = [];

        for (var i = 0; i < this.props.data.length; i++) {
            itemProps = String(this.props.data[i])
            items[i] = <this.props.item {itemProps} />
        }

        return (
            <ScrollView>

            </ScrollView>
        );
    }
}

export default List;
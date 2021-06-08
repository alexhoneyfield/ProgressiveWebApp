import React from 'react';

import ScrollView from './ScrollView';

class List extends React.Component {
    render() {

        let items = [];

        for (var i = 0; i < this.props.data.length; i++) {
            items[i] = this.props.render(this.props.data[i])
        }

        return (
            <ScrollView className={this.props.className}>
                {items}
            </ScrollView>
        );
    }
}

export default List;
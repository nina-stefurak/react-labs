import React, {Component, useState} from 'react';
import {Image, Pressable, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {ListItem} from './ListItem'

export class MyList extends Component {
    state = {selectedId: 0}

    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={({item}) =>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({selectedId: item.id})
                            this.props.onPressItem(item)
                        }
                    }
                    >
                        <ListItem
                            title={item.title}
                            width={item.width}
                            height={item.height}
                            thumbnailUrl={item.thumbnailUrl}
                            selected={item.id == this.state.selectedId}
                        />
                    </TouchableOpacity>
                }
                keyExtractor={item => item.id}
            />
        );
    }
}

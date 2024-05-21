import React, {Component} from 'react';
import {Image, Pressable, View, Text} from 'react-native';
export class Tile extends Component {
    state = {isSelected: false};
    
    flipState() {
        this.setState(state => state = {isSelected: !this.state.isSelected});
    }
    
    render() {
        return (
            <View
                style={{
                    padding: 10,
                    marginTop: 10,
                    backgroundColor: this.state.isSelected ? 'orange' : 'lightblue'
                }}
            >
                <Pressable onPress={() => this.flipState()}>
                    <Text>{this.props.title}</Text>
                    <Image
                        source={{
                            uri: this.props.thumbnailUrl,
                        }}
                        style={{
                            width: this.props.width,
                            height: this.props.height,
                            borderColor: 'red',
                            borderWidth: 2,
                            padding: 2,
                        }}
                    />
                </Pressable>
            </View>
        );
    }
}

import React, {useState} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
export const ListItem = (props) => {
    return (
          <View
          style={styles.container(props.selected)}
          >
              <Text
              >{props.title}</Text>
              <Image
                  source={{uri: props.thumbnailUrl}}
                  style={{width: props.width, height: props.height}}
              />
          </View>
    );
}
const styles = StyleSheet.create({
    container:(selected) => ({
        margin: 10,
        backgroundColor: selected ? 'darkblue' : 'lightblue',
        padding: 10,
        width: '95%'
    }),
});
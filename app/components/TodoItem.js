import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

export default class TodoItem extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>List Here</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        alignItems: 'center'
    },
    text: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white'

    }
});


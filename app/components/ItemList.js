import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

export default class ItemList extends Component {

    render() {
        return (
            <View style={styles.ListContainer}>
                <Text>List Here</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ListContainer:{
        marginTop: 40,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white'

    }
});


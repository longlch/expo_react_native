import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

export default class Header extends Component {
    render() {
        const {title} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
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


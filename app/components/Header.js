import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

export default class Header extends Component {
    render() {
        const {title} = this.props;
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer:{
        marginTop: 40,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white'

    }
});


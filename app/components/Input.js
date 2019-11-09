import React, {Component} from 'react';
import {StyleSheet, TextInput, Text, View } from "react-native";
import {inputPlaceholder, itemListText, itemListTextStrike, lighterWhite} from "../utils/Colors";

export default class Input extends Component {

    render() {
        const {onSubmitItem} = this.props;
        return (
            <View>
                <Text style={styles.title}>WHAT'S NEXT</Text>
                <TextInput
                    multiline={false}
                    style={styles.input}
                    placeholder="Add Notes ..."
                    placeholderTextColor={inputPlaceholder}
                    onSubmitEditing={onSubmitItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 34,
        color: 'white',
        fontWeight: '500'
    },
    title: {
        fontSize: 15,
        color: itemListTextStrike,
        fontWeight: '100'
    }
});


import React, {Component} from 'react';
import {StyleSheet, TextInput, Text, View } from "react-native";
import {inputPlaceholder, itemListText, itemListTextStrike, lighterWhite} from "../utils/Colors";

export default class Input extends Component {

    submit = ()=>{
        console.log('submit');
    }

    render() {
        return (
            <View>
                <Text style={styles.title}>WHAT'S NEXT</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Add Notes ..."
                    placeholderTextColor={inputPlaceholder}
                    multiline={true}
                    blurOnSubmit={true}
                    onSubmitEditing={this.submit}
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


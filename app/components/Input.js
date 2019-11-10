import React, {Component} from 'react';
import {StyleSheet, TextInput, Text, View} from "react-native";
import {inputPlaceholder, itemListText, itemListTextStrike, lighterWhite} from "../utils/Colors";

export default class Input extends Component {

    state = {
        value: ''
    };

    onChangeText = (text) => {
        this.setState({
            value: text
        });
    };

    clearText = () => {
        this.setState({
            value: ''
        });
    };

    render() {
        const {onSubmitItem} = this.props;
        const {value} = this.state;

        return (
            <View>
                <Text style={styles.title}>WHAT'S NEXT</Text>
                <TextInput
                    value={value}
                    multiline={false}
                    style={styles.input}
                    placeholder="Add Notes ..."
                    placeholderTextColor={inputPlaceholder}
                    onChangeText={this.onChangeText}
                    onSubmitEditing={(event) => {
                        this.clearText();
                        onSubmitItem(event);
                    }}
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


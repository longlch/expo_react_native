import React, {Component} from 'react';
import {StyleSheet, TextInput } from "react-native";

export default class Input extends Component {
    render() {
        const {title} = this.props;
        return (
            <TextInput
                style={styles.input}
                placeholder="Type here to add note."

            />
        );
    }
}

const styles = StyleSheet.create({
   input:{
       paddingTop: 10,
       paddingRight: 15,
       paddingLeft:15,
       fontSize: 34,
       color: 'white',
       borderWidth: 1
   }
});


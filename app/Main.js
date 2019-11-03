import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import {LinearGradient} from 'expo-linear-gradient'


import {primaryGradientArray} from "./utils/Colors";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import ListItem from "./components/ListItem";

const headerTitle = "TODO"
export default class Main extends Component {
    render() {
        return (
            <LinearGradient
                style={styles.container}
                colors={primaryGradientArray}>

                <Header title={headerTitle}/>

                <Input/>
                <ListItem/>

            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 8,
        marginTop: 200 // TODO: Remove this line
    }
});


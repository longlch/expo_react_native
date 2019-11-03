import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import {LinearGradient} from 'expo-linear-gradient'


import {primaryGradientArray} from "./utils/Colors";
import Header from "./components/Header";
import Input from "./components/Input";
import ItemList from "./components/ItemList";

const headerTitle = "TODO"
export default class Main extends Component {
    render() {
        return (
            <LinearGradient
                style={styles.container}
                colors={primaryGradientArray}>

                <Header title={headerTitle}></Header>
                <Input/>
                <ItemList/>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 200 // TODO: Remove this line
    }
});


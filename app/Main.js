import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import {LinearGradient} from 'expo-linear-gradient'


import {primaryGradientArray} from "./utils/Colors";
import Header from "./components/Header";
import Input from "./components/Input";
import ListItem from "./components/ListItem";

const headerTitle = "TODO"
export default class Main extends Component {

    state = {
        isChecked: false
    }

    handleTodoItem = (isChecked) =>{
        console.log('handle checkeds', isChecked);
        this.setState({
            isChecked: !isChecked
        });
    }

    render() {
        return (
            <LinearGradient
                style={styles.container}
                colors={primaryGradientArray}>

                <Header title={headerTitle}/>
                <Input/>

                <ListItem
                    isChecked={this.state.isChecked}
                    handleTodoItem={(isChecked)=>this.handleTodoItem(isChecked)}
                />

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


import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import {LinearGradient} from 'expo-linear-gradient'


import {primaryGradientArray} from "./utils/Colors";
import Header from "./components/Header";
import Input from "./components/Input";
import ListItem from "./components/ListItem";

const headerTitle = "TODO";
export default class Main extends Component {

    state = {
        isCheckedAll: false,
        items: []
    };

    handleTodoItem = (isChecked) =>{
        this.setState({
            isCheckedAll: !isChecked
        });
    };

    onSubmitItem = (event) =>{
        console.log('submit main',event.nativeEvent.text);
    }
        /*let temps = [];
        temps.push({
            isChecked: false,
            text: text
        });

        this.setState({
            items: temps
        });
    };*/


    render() {
        return (
            <LinearGradient
                style={styles.container}
                colors={primaryGradientArray}>

                <Header title={headerTitle}/>

                <Input
                    onSubmitItem={this.onSubmitItem}
                />

                <ListItem
                    isCheckedAll={this.state.isCheckedAll}
                    items={this.state.items}
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
    }
});


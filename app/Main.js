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

    selectAllItem = (isChecked) =>{
        this.setState({
            isCheckedAll: !isChecked
        });
    };

    onSubmitItem = (event) =>{
        const {text} = event.nativeEvent;
        let {items} = this.state;

        items.push({
            text: text,
            isChecked: false
        });

        this.setState({
            items: items
        });
    }

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
                    selectAllItem={this.selectAllItem}
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


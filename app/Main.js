import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import {LinearGradient} from 'expo-linear-gradient'
import {primaryGradientArray} from "./utils/Colors";
import Header from "./components/Header";
import Input from "./components/Input";
import ListItem from "./components/ListItem";
import uuid from 'uuid/v1'

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

        if(text.trim().length > 0){

            items.push({
                id: uuid(text),
                text: text.trim(),
                isChecked: false
            });

            this.setState({
                items: items
            });
        }
    };

    getDeletedItem = (item) =>{
        let {items} = this.state;

        let filteredItems = items.filter((e,i)=>{
            return e.id != item.id;
        });

        this.setState({
            items: filteredItems
        });
    };

    render() {
        // console.log('[Main] render', this.state.items);
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
                    getDeletedItem = {this.getDeletedItem}
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


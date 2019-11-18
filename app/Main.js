import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, AsyncStorage} from "react-native";
import {LinearGradient} from 'expo-linear-gradient'
import {primaryGradientArray} from "./utils/Colors";
import Header from "./components/Header";
import Input from "./components/Input";
import ListItem from "./components/ListItem";
import uuid from 'uuid/v1'

const headerTitle = "TODO";
export default class Main extends Component {

    state = {
        items: [],
        isLoading: true,
        allItems: {}
    };

    componentDidMount = () => {
        this.loadingItems();
    };

    loadingItems = async () => {
      try {
          const allItems = await AsyncStorage.getItem('todos');
          this.setState({
              isLoading: false,
              allItems: JSON.parse(allItems) || {}
          });
      }  catch (e) {
          console.error(e);
      }
    };

    onSubmitItem = (event) =>{
        const {text} = event.nativeEvent;
        let {items, allItems} = this.state;

        if(text.trim().length > 0){

            const id = uuid(text);

            let item = {
                id: id,
                text: text.trim(),
                isChecked: false
            };

            items.push(item);

            let newItem = {
                [id]: {
                    id,
                    text: text.trim(),
                    isChecked: false
                }
            };

            //TODO: Check this code below.
            
            this.setState(prevState=>{
                const newState = {
                    ...prevState,
                    allItems:{
                        ...prevState.allItems,
                        ...newItem
                    }
                };

                this.saveItems(this.state.allItems);
                return newState;

            }),()=>{

            };

        }
    };

    saveItems = newItem =>{

        AsyncStorage.setItem('todos', JSON.stringify(newItem));
    };

    clearAllItems = async () =>{
        try{
            await AsyncStorage.removeItem('todos');
            this.setState({
                items: [],
                allItems: {}
            });
        }  catch (e) {
            console.error(e);
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
        const {isLoading, allItems, items} = this.state;

        return (
            <LinearGradient
                style={styles.container}
                colors={primaryGradientArray}>


                <Header title={headerTitle}/>

                <Input
                    onSubmitItem={this.onSubmitItem}
                />

                {isLoading
                    ? <ActivityIndicator size="large" color="white"/>

                    : <ListItem
                        allItems={allItems}
                        items={items}
                        getDeletedItem={this.getDeletedItem}
                        clearAllItems={this.clearAllItems}
                    />
                }


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


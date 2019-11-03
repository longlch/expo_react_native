import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from "react-native";
import TodoItem from "./TodoItem";

export default class ListItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{

    }
});


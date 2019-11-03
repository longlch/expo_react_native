import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import TodoItem from "./TodoItem";
import {Ionicons} from '@expo/vector-icons';
import {itemListTextStrike, lighterWhite} from "../utils/Colors";


export default class ListItem extends Component {


    render() {
        const {isChecked, handleTodoItem} = this.props;
        const arrs = [1,2,3,4];

        return (
            <View style={styles.container}>

                <View style={styles.recentContainer}>
                    <Text style={styles.recentText}>RECENT NOTES</Text>
                    <TouchableOpacity onPress={()=>handleTodoItem(isChecked)}>
                        <Ionicons name="md-trash" size={25} color={lighterWhite} />
                    </TouchableOpacity>

                </View>

                <ScrollView>
                    {
                        arrs.map((e,i)=>
                            <TodoItem
                                key={i}
                                isChecked={isChecked}
                                handleTodoItem={(isCheckedFromInput)=>handleTodoItem(isCheckedFromInput)}
                            />)
                    }
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    recentContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 3
    },
    recentText:{
        fontSize: 15,
        color: itemListTextStrike,
        fontWeight: '100'
    }
});


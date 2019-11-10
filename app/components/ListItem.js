import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList} from "react-native";
import TodoItem from "./TodoItem";
import {Ionicons} from '@expo/vector-icons';
import {itemListTextStrike, lighterWhite} from "../utils/Colors";

export default class ListItem extends Component {

    render() {
        const {isCheckedAll, selectAllItem, getDeletedItem, items } = this.props;

        return (
            <View style={styles.container}>

                <View style={styles.recentContainer}>
                    <Text style={styles.recentText}>RECENT NOTES</Text>

                    <TouchableOpacity onPress={()=>selectAllItem(isCheckedAll)}>
                        <Ionicons name="md-trash" size={25} color={lighterWhite} />
                    </TouchableOpacity>
                </View>

                <FlatList
                    extraData={this.props}
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={(e) => {
                        return <TodoItem
                            item={e.item}
                            getDeletedItem={getDeletedItem}
                        />
                    }}
                >
                </FlatList>

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


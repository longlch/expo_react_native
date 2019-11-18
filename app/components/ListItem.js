import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList} from "react-native";
import TodoItem from "./TodoItem";
import {Ionicons} from '@expo/vector-icons';
import {itemListTextStrike, lighterWhite} from "../utils/Colors";

export default class ListItem extends Component {

    render() {
        const {getDeletedItem, items, allItems, clearAllItems} = this.props;

        return (
            <View style={styles.container}>

                <View style={styles.recentContainer}>
                    <Text style={styles.recentText}>RECENT NOTES</Text>

                    <TouchableOpacity onPress={() => clearAllItems()}>
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

                <Text>Store</Text>

                <ScrollView>
                    {Object.values(allItems).reverse().map(item=>
                        <TodoItem
                            key={item.id}
                            item={item}
                        ></TodoItem>

                    )}
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


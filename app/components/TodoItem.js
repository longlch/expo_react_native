import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {circleActive, circleInactive, deleteIconColor, itemListTextStrike, lightWhite} from "../utils/Colors";
import {Ionicons} from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

export default class TodoItem extends Component {

    render() {
        const {isCheckedAll,handleTodoItem} = this.props;

        return (
            <View style={styles.container}>

                <View style={styles.containerTodo}>
                    <TouchableOpacity onPress={()=>handleTodoItem(isCheckedAll)}>
                        <View style={[
                            styles.circle,
                            isCheckedAll ? {borderColor: circleActive} : {
                                borderColor: circleInactive
                            }
                        ]}/>
                    </TouchableOpacity>

                    <View style={styles.viewTodo}>
                        <Text style={[
                            styles.text,
                            isCheckedAll && {
                                color: itemListTextStrike,
                                textDecorationLine: 'line-through'
                            }
                        ]}>lorem</Text>
                    </View>

                </View>

                <View style={styles.containerTodo}>
                    {
                        isCheckedAll &&
                        <View>
                            <TouchableOpacity>
                                <Ionicons name="md-trash" size={25} color={deleteIconColor} />
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        backgroundColor: lightWhite,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 4
    },
    text: {
        fontWeight: '100',
        fontSize: 16,
    },
    containerTodo: {
        flexDirection: 'row',
    },
    viewTodo:{
      marginTop: 4
    },
    circle: {
        borderWidth: 3,
        marginRight: 10,
        width: 30,
        height: 30,
        borderRadius: 15
    }
});


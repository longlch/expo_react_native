import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {circleActive, circleInactive, deleteIconColor, itemListTextStrike, lightWhite} from "../utils/Colors";
import {Ionicons} from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

export default class TodoItem extends Component {

    state = {
        item:{
            id: '',
            isChecked: 'false',
            text: ''
        }
    };

    selectIcon = (isChecked) => {
        this.setState({
            item:{
                ...this.state.item,
                isChecked: !isChecked
            }
        },()=>{
        });

    };

    componentDidMount() {
        const {item} = this.props;
        const {isChecked, text, id} = item;

        this.setState({
            item: {
                id: id,
                isChecked: isChecked,
                text: text
            }
        });
    }

    render() {
        const {item} = this.state;
        const {getDeletedItem} = this.props;

        return (
            <View style={styles.container}>

                <View style={styles.containerTodo}>
                    <TouchableOpacity onPress={()=>this.selectIcon(item.isChecked)}>
                        <View style={[
                            styles.circle,
                            item.isChecked ? {borderColor: circleActive} : {
                                borderColor: circleInactive
                            }
                        ]}/>
                    </TouchableOpacity>

                    <View style={styles.viewTodo}>
                        <Text style={[
                            styles.text,
                            item.isChecked && {
                                color: itemListTextStrike,
                                textDecorationLine: 'line-through'
                            }
                        ]}>{item.text}</Text>
                    </View>

                </View>

                <View style={styles.containerTodo}>
                    {
                        item.isChecked &&
                        <View>
                            <TouchableOpacity onPress={()=> getDeletedItem(item)}>
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
    },
    circle: {
        borderWidth: 3,
        marginRight: 10,
        width: 30,
        height: 30,
        borderRadius: 15
    }
});


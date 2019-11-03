import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import {circleActive, circleInactive, deleteIconColor, lightWhite} from "../utils/Colors";
import { MaterialIcons, FontAwesome,Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

export default class TodoItem extends Component {

    state = {
        isChecked: false
    }

    checkCircle = () =>{
        console.log('log');
        this.setState({
            isChecked: !this.state.isChecked
        });
    }


    render() {
        const {isChecked} = this.state;
        return (
            <View style={styles.container}>

                <View style={styles.containerTodo}>
                    <TouchableOpacity onPress={this.checkCircle}>
                        <View style={[
                            styles.circle,
                            this.state.isChecked ? {borderColor: circleActive} : {
                                borderColor: circleInactive
                            }
                        ]}/>
                    </TouchableOpacity>

                    <View style={styles.viewTodo}>
                        <Text style={styles.text}>lorem</Text>
                    </View>

                </View>


                <View style={styles.containerTodo}>

                    {
                        isChecked &&
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
        marginTop: 40,
        backgroundColor: lightWhite,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',


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


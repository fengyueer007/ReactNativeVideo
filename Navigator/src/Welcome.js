import React, { Component } from 'react';
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';



class Welcome extends React.Component {

    _back(){
        this.props.navigator.pop();
    }

    render(){
        return(
            <View style = {styles.center}>

                <Text>Welcome Page</Text>
                <Text>Welcome to Navigation!{this.props.name}</Text>
                <TextInput onChangeText = {age => this.props.changeMyAge(age)}
                           placeholder = {'Enter you age:'}
                           style = {styles.inputHeight}>
                </TextInput>
                <TouchableOpacity onPress={this._back.bind(this)}>
                    <Text style = {styles.color}>Save my age</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles  = StyleSheet.create({
    center:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#ffffff',
    },
    color:{
        color:'#55acee',
    },
    inputHeight:{
        height:40,
        width:200,
    },
});


export default Welcome;
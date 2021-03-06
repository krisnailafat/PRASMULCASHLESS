/**
 * Created by mata on 7/27/18.
 */

import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Button
} from "react-native";
import { connect } from "react-redux";
import FloatingLabel from "react-native-floating-labels";

class CreateAccount extends Component {
    static navigatorStyle = {
        navBarTextColor:'white',
        navBarBackgroundColor:'#043673',
        navBarButtonColor:'white'
    };

    state = {
        email:''
    }

    render(){
        return(
            <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <View>
                    <Text style={{fontWeight:'bold', fontSize:20}}>Create Account</Text>
                </View>
                <View style={{width:"90%"}}>
                    <FloatingLabel
                        labelStyle={{color: '#3324B7'}}
                        inputStyle={{borderWidth: 0}}
                        style={styles.formInput}
                        value={this.state.email}
                        //onBlur={this.onBlur}
                        password
                        onChangeText = {(text)=> this.setState({email:text})}
                    >
                        Email
                    </FloatingLabel>
                </View>
                <View style={{width:"90%"}}>
                    <FloatingLabel
                        labelStyle={{color: '#3324B7'}}
                        inputStyle={{borderWidth: 0}}
                        style={styles.formInput}
                        value={this.state.email}
                        //onBlur={this.onBlur}
                        password
                        onChangeText = {(text)=> this.setState({email:text})}
                    >
                        Fullname
                    </FloatingLabel>
                </View>
                <View style={{ width:"90%"}}>
                    <FloatingLabel
                        labelStyle={{color: '#3324B7'}}
                        inputStyle={{borderWidth: 0}}
                        style={styles.formInput}
                        value={this.state.email}
                        //onBlur={this.onBlur}
                        password
                        onChangeText = {(text)=> this.setState({email:text})}
                    >
                        Password
                    </FloatingLabel>
                </View>
                <View style={{ width:"90%"}}>
                    <FloatingLabel
                        labelStyle={{color: '#3324B7'}}
                        inputStyle={{borderWidth: 0}}
                        style={styles.formInput}
                        value={this.state.email}
                        //onBlur={this.onBlur}
                        password
                        onChangeText = {(text)=> this.setState({email:text})}
                    >
                        Confirmation Password
                    </FloatingLabel>
                </View>
                <View  style={{paddingTop:40, alignItems:'center'}}>
                    <TouchableOpacity onPress={() => {}}>
                        <View style={{borderRadius: 5, paddingVertical:10,paddingHorizontal:40, backgroundColor:'#043673'}}>
                            <Text style={{paddingHorizontal:10, fontWeight:'bold', fontSize:16,color:'white'}}>Reset Password</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formInput: {
        borderColor: '#333',
    }
})

export default connect(null, null)(CreateAccount);
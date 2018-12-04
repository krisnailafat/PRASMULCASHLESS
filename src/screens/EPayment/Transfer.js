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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Icon from 'react-native-vector-icons/Ionicons';

class Transfer extends Component {
    static navigatorStyle = {
        navBarTextColor: 'white',
        navBarBackgroundColor: '#043673',
        navBarButtonColor: 'white'
    };

    state = {

    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ borderWidth: 0, width: '100%', height: 50, backgroundColor: '#f0f0f0', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Text style={{ marginLeft: 20, fontSize: 16 }}>Transfer</Text>
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

export default connect(null, null)(Transfer);
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

class Listrik extends Component {
    static navigatorStyle = {
        navBarTextColor: 'white',
        navBarBackgroundColor: '#043673',
        navBarButtonColor: 'white'
    };

    state = {
        provider: [
            { id: 1, nama: 'Token PLN' },
        ]
    }

    renderMain() {
        let list_provider = []
        list_provider = this.state.provider.map((item, key) => {
            console.log("ini list ", item, " ", key)
            return (
                <TouchableOpacity key={key} style={{ borderBottomWidth: 1, borderColor: '#dedede', width: '100%', height: 70, flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons
                        name='check'
                        size={30}
                        color='#07c9d2'
                        style={{ marginHorizontal: 10 }}
                    />

                    <Text style={{ fontSize: 20 }}>{item.nama}</Text>

                </TouchableOpacity >
            )
        })
        return list_provider
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ borderWidth: 0, width: '100%', height: 50, backgroundColor: '#f0f0f0', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Text style={{ marginLeft: 20, fontSize: 16 }}>Listrik</Text>
                </View>
                {this.renderMain()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formInput: {
        borderColor: '#333',
    }
})

export default connect(null, null)(Listrik);
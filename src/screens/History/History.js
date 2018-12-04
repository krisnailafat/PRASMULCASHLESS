/**
 * Created by mata on 8/10/18.
 */

import React, { Component } from 'react';

import { Platform, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from "react-redux";

class History extends Component {
    static navigatorStyle = {
        navBarTextColor: 'white',
        navBarBackgroundColor: '#043673',
        navBarButtonColor: 'white',
        // navBarHidden: true,
        topTabTextColor: '#ffffff',
        selectedTopTabTextColor: '#ff505c',
        selectedTopTabIndicatorColor: 'red',
        selectedTopTabIndicatorHeight: 3,

    };

    state = {
        list: [
            { id: 1, nama: 'Krisna', uang: 10000000, tgl: '1 November 2018', jenis: 'Uang Masuk' },
            { id: 2, nama: 'Tarik Tunai di Booth', uang: 200000, tgl: '17 Oktober 2018', jenis: 'Tarik Tunai' },
            { id: 3, nama: 'Toko Kue', uang: 65000, tgl: '5 Oktober 2018', jenis: 'Uang Keluar' }
        ]
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

    }


    onNavigatorEvent = (event) => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    }

    renderMain() {
        let list_history = []
        list_history = this.state.list.map((item, key) => {
            console.log("ini list ", item, " ", key)
            return (
                <TouchableOpacity key={key} style={{ borderBottomWidth: 1, width: '100%', height: 90, flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons
                        name='check'
                        size={30}
                        color='#07c9d2'
                        style={{ marginHorizontal: 8 }}
                    />
                    <View style={{ alignItems: 'center', width: '90%', justifyContent: 'space-between', borderWidth: 0, height: '100%', paddingHorizontal: 10, paddingVertical: 20 }}>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 20 }}>{item.nama}</Text>
                            <Text style={{ fontSize: 20, color: '#666666' }}>{item.uang.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', borderWidth: 0 }}>
                            <Text style={{ fontSize: 16, color: '#a3a3a3' }}>{item.tgl}</Text>
                            <Text style={{ fontSize: 16, color: '#a3a3a3' }}>{item.jenis}</Text>
                        </View>
                    </View >
                </TouchableOpacity >
            )
        })
        return list_history
    }

    render() {

        return (

            <View style={styles.MainContainer} >
                {this.renderMain()}

            </View >

        );

    }

}

const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,

        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        alignItems: 'center',
        // justifyContent: 'space-around'


    },

    TextInputStyle: {

        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: '#A8A8A8',
        textAlign: 'center',
        marginRight: 5,
        fontSize: 16

    },

    button: {

        // width: '100%',

        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#c9c5ca',
        borderRadius: 100,
    },

    TextStyle: {
        color: '#fff',
        textAlign: 'center',
        // fontSize: 18
    },
    roundIcon: {
        borderWidth: 1,
        borderColor: 'rgba(192,192,192,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 100,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    }
})

export default connect(null, null)(History);

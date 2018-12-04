/**
 * Created by mata on 8/10/18.
 */

import React, { Component } from 'react';

import { Platform, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";

class Topup extends Component {
    static navigatorStyle = {
        navBarTextColor: 'white',
        navBarBackgroundColor: '#043673',
        navBarButtonColor: 'white',
    };

    state = {
        menu: [
            { id: 1, judul: 'Kartu Debit', icon: 'credit-card' },
            { id: 2, judul: 'ATM', icon: 'account-balance' },
            { id: 3, judul: 'Internet / Mobile Banking', icon: 'import-export' },
            { id: 4, judul: 'Merchant', icon: 'local-convenience-store' },
            { id: 5, judul: 'PrasmulPay Booth', icon: 'room' },
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

    render() {
        // array judul menu top up
        let list_judul = []
        list_judul = this.state.menu.map((item, key) => {
            console.log("ini menu ", item, " ", key)
            return (
                <TouchableOpacity key={key} style={[styles.shadow, { borderWidth: 1, paddingVertical: 15, backgroundColor: 'white', borderColor: '#f3f3f3', borderTopRightRadius: 5, borderBottomLeftRadius: 5, width: '90%' }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <MaterialIcons
                                name={item.icon}
                                size={30}
                                color='#07c9d2'
                                style={{ marginRight: 10 }}
                            />
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.judul}</Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={30}
                            color='#07c9d2'
                            style={{}}
                        />
                    </View>
                </TouchableOpacity >
            )

        })

        return (

            <View style={styles.MainContainer} >
                {/* bagian atas */}
                < View style={{ borderWidth: 0, flex: 1, paddingVertical: 5, width: '100%', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View style={{ width: '90%' }}>
                        <Text style={{ fontSize: 10, lineHeight: 10 }}>Top Up Saldo Ke</Text>
                        <Text style={{ borderBottomWidth: 1, color: 'black', fontSize: 16, borderColor: '#dadada' }}>Prasmul Pay Cash</Text>
                    </View>
                    <View style={{ width: '90%', paddingVertical: 10, borderWidth: 3, borderRadius: 10, alignItems: 'center', backgroundColor: '#daeafe', borderColor: '#f3f3f3' }}>
                        <Text style={{ fontSize: 14, color: 'black' }}>SALDO PRASMULPAY CASH</Text>
                        <Text>Rp.0</Text>
                    </View>
                    <View style={{ width: '90%', alignItems: 'center' }}>
                        <Text style={{ color: 'black', marginBottom: 15 }}>Maks Saldo PrasmulPay Cash Rp. 1.000.000</Text>
                    </View>
                </View >
                {/* bagian bawah */}
                < View style={{ borderWidth: 0, flex: 2, backgroundColor: '#f7f7f7', width: '100%', alignItems: 'center', justifyContent: 'space-around' }}   >
                    <Text> Top Up makin mudah dengan metode berikut</Text>

                    {list_judul}
                </View >
            </View >

        );

    }

}

const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,

        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'space-around'


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

export default connect(null, null)(Topup);

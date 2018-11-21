/**
 * Created by mata on 8/10/18.
 */

import React, { Component } from 'react';

import { Platform, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

import QRCode from 'react-native-qrcode';
import Entypo from "react-native-vector-icons/Entypo";

import { connect } from "react-redux";

class Merchant extends Component {
    static navigatorStyle = {
        navBarTextColor: 'white',
        navBarBackgroundColor: '#043673',
        navBarButtonColor: 'white',
    };

    state = {
        isGenerated: false
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        this.state = {
            merchant: 'PM-12345',

            Text_Holder_1: '',

            Text_Holder_2: ''

        }
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


    getTextInputValue = () => {
        this.setState({ isGenerated: true })
        this.setState({ Text_Holder_2: this.state.Text_Holder_1 + ';' + this.state.merchant });

    }

    render() {

        return (

            <View style={styles.MainContainer}>

                <View style={styles.roundIcon}>
                    <Entypo
                        name="shop"
                        size={60}
                        color="#043673"
                        style={styles.drawerItemIcon}
                    />
                </View>

                <View style={{ paddingVertical: 10, flexDirection: "row", alignItems: 'center', borderColor: '#043673', paddingBottom: 10, marginBottom: 10, borderBottomWidth: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#043673' }}>Tagihan: </Text>
                    <TextInput
                        style={styles.TextInputStyle}
                        onChangeText={(text) => this.setState({ Text_Holder_1: text })}
                        underlineColorAndroid="transparent"
                        placeholder="nilai penjualan (Rupiah)"
                        keyboardType={'phone-pad'}
                        onSubmitEditing={this.getTextInputValue}
                    />
                    {/* <TouchableOpacity onPress={this.getTextInputValue} style={styles.button} >

                        <Text style={styles.TextStyle}>Generate</Text>

                    </TouchableOpacity> */}
                </View>




                <View style={{ alignItems: 'center', backgroundColor: 'rgb(199,224,253)', width: '90%', borderRadius: 20 }}>
                    <QRCode
                        value={this.state.Text_Holder_2}
                        size={250}
                        bgColor='#000'
                        fgColor='#fff' />
                </View>

                <View style={{ flexDirection: "row", alignItems: 'center', borderColor: '#043673', paddingTop: 10, paddingBottom: 20, borderBottomWidth: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#043673' }}>Nama Vendor : </Text>
                    <Text style={{ fontWeight: 'bold', color: 'red' }}>{this.state.merchant}</Text>
                </View>
            </View>

        );

    }

}

const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        margin: 10,
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
    }
})

export default connect(null, null)(Merchant);

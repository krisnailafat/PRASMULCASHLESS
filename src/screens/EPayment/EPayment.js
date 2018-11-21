/**
 * Created by mata on 8/8/18.
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
    Button,
    FlatList,
    Alert,
    Modal
} from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import QRCodeScanner from 'react-native-qrcode-scanner';

class EPayment extends Component {
    static navigatorStyle = {
        navBarTextColor: 'white',
        navBarBackgroundColor: '#043673',
        navBarButtonColor: 'white',
    };

    state = {
        modalQRCamera: false,
        tagihanbayar: ''
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onSuccess = (e) => {
        Alert.alert(
            'Success',
            'Data ' + e.data,
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
        this.setState({ tagihanbayar: e.data, modalQRCamera: false })
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
        return (
            <View style={{ flex: 1, alignItems: 'flex-start' }}>

                <TouchableOpacity onPress={() => { this.setState({ modalQRCamera: true }) }} style={styles.button} >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.roundIcon}>
                            <MaterialIcons
                                name="photo-camera"
                                size={30}
                                color="#043673"
                            />
                        </View>
                        <Text style={styles.TextStyle}>Pembayaran</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.getTextInputValue} style={styles.button} >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.roundIcon}>
                            <FontAwesome
                                name="money"
                                size={30}
                                color="#043673"
                            />
                        </View>
                        <Text style={styles.TextStyle}>Pengisian pulsa</Text>
                    </View>
                </TouchableOpacity>
                {/* <View style={{ paddingVertical: 20 }}>
                    <Text>{this.state.tagihanbayar}</Text>
                </View> */}
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={this.state.modalQRCamera}
                    onRequestClose={() => { this.setState({ modalQRCamera: false }) }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View>
                            <QRCodeScanner
                                onRead={this.onSuccess}
                                // topContent={
                                //     <Text style={styles.centerText}>
                                //         Arahkan camera pada <Text style={styles.textBold}>QR_code</Text>
                                //     </Text>
                                // }
                                // bottomContent={
                                //     <TouchableOpacity style={styles.buttonTouchable}>
                                //         <Text style={styles.buttonText}>Selesai</Text>
                                //     </TouchableOpacity>
                                // }
                                showMarker={true}
                                cameraStyle={{ height: "100%" }}
                            />
                        </View>
                    </View>
                </Modal>
            </View>

        )
    }
}

const SCREEN_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    button: {
        // width: '70%',
        // paddingTop: 8,
        // paddingBottom: 8,
        // backgroundColor: '#c9c5ca',
        borderRadius: 100,
        margin: 5
        // borderWidth: 1,
        // borderColor: 'rgba(192,192,192,0.3)',
        // alignItems: 'center',
        // justifyContent: 'center',
        // width: 80,
        // height: 80,
        // backgroundColor: '#fff',
        // borderRadius: 100,
    },
    TextStyle: {
        // color: '#fff',
        color: '#043673',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
    roundIcon: {
        borderWidth: 1,
        borderColor: 'rgba(192,192,192,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 100,
        marginRight: 10
    }
})

export default connect(null, null)(EPayment);
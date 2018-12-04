/**
 * Created by mata on 7/27/18.
 */

/**
 * Created by mata on 7/27/18.
 */

/**
 * Created by mata on 7/27/18.
 */

import React, { Component } from "react";
import { Navigation } from 'react-native-navigation';

import {
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Alert,
    TouchableHighlight,
    Button,
    FlatList,
    Platform,
    Modal
} from "react-native";
import { connect } from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Icon from 'react-native-vector-icons/Ionicons';

import QRCodeScanner from 'react-native-qrcode-scanner';

class MainMenu extends Component {
    static navigatorStyle = {
        navBarTextColor: 'white',
        navBarBackgroundColor: '#043673',
        navBarButtonColor: 'white',
        // topBarElevationShadowEnabled: false,
        navBarHidden: true
    };



    state = {
        products: null,
        modalQRCamera: false,

    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    OnDrawerClicked = () => {
        this.props.navigator.toggleDrawer({
            side: "left"
        });
    };

    onNavigatorEvent = (event) => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    }

    gotoMerchant = () => {

        console.log('this.props', this.props)
        this.props.navigator.push({
            screen: "STEMprasmul.Merchant",
            title: 'Create Payment',
            navigatorStyle: {
                tabBarHidden: true
            }
            // passProps: {
            //     tourcontent: key.cat_tours,
            //     tourtitle: key.name,
            //     tourid: key.cat_tours[0].category
            // }
        });


    }

    gotoTopup = () => {
        console.log('this.props', this.props)
        this.props.navigator.push({
            screen: "STEMprasmul.Topup",
            title: 'Top up',
            navigatorStyle: {
                tabBarHidden: true
            }
            // passProps: {
            //     tourcontent: key.cat_tours,
            //     tourtitle: key.name,
            //     tourid: key.cat_tours[0].category
            // }
        });

        // Navigation.push(this.props.componentId, { component: { name: 'NEXT_PAGE', options: { bottomTabs: { visible: false, drawBehind: true, animate: true } } }, });
    }

    onPulsaClick = () => {
        console.log('this.props', this.props)
        this.props.navigator.push({
            screen: "STEMprasmul.Pulsa",
            title: 'Isi Pulsa',
            navigatorStyle: {
                tabBarHidden: true
            }
        });
    }

    onKeretaClick = () => {
        console.log('this.props', this.props)
        this.props.navigator.push({
            screen: "STEMprasmul.Kereta",
            title: 'Transportasi',
            navigatorStyle: {
                tabBarHidden: true
            }
        });
    }

    onListrikClick = () => {
        console.log('this.props', this.props)
        this.props.navigator.push({
            screen: "STEMprasmul.Listrik",
            title: 'Listrik',
            navigatorStyle: {
                tabBarHidden: true
            }
        });
    }

    onTransferClick = () => {
        console.log('this.props', this.props)
        this.props.navigator.push({
            screen: "STEMprasmul.Transfer",
            title: 'Transfer',
            navigatorStyle: {
                tabBarHidden: true
            }
        });
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

    render() {

        return (
            <View style={styles.mainMenu}>
                <View style={{ paddingVertical: 11, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', backgroundColor: '#043673' }}>
                    <TouchableOpacity onPress={this.OnDrawerClicked} style={{ marginLeft: 15 }}>
                        <Icon
                            name={"md-menu"}
                            size={30}
                            color="white"
                        />
                    </TouchableOpacity>

                    <View>
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>STEM eCAMPUS</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.gotoMerchant} style={{ marginRight: 20 }}>
                            {/* <FontAwesome
                                name={"qrcode"}
                                size={30}
                                color="white"
                            /> */}
                            <Entypo
                                name="shop"
                                size={30}
                                color="white"
                                style={styles.drawerItemIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 15 }}>
                            <Icon
                                name={"md-notifications"}
                                size={30}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    flex: 1, width: '100%', borderWidth: 0, justifyContent: 'center', backgroundColor: '#043673',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,

                    elevation: 10,
                }}>
                    <View style={{ borderWidth: 0, borderColor: 'white', flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderWidth: 0, flex: 1 }}>
                            <Text style={{ color: 'white', marginLeft: 18 }}>STEM Cash</Text>
                            <Text style={{ color: 'white', marginLeft: 25, marginVertical: 10, fontSize: 20 }}>Rp.&nbsp;
                            <Text style={{ color: 'yellow', marginLeft: 25, fontSize: 20 }}>0</Text></Text>
                            <Text style={{ color: 'white', marginLeft: 18 }}>STEM POINTS &nbsp;
                            <Text style={{ color: 'yellow', marginLeft: 25, fontSize: 18 }}>0</Text></Text>
                        </View>
                        <TouchableOpacity onPress={this.gotoTopup} style={{ borderWidth: 0, flex: 0, backgroundColor: '#08dbe5', marginRight: 15, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10 }}>
                            <Text style={{ color: 'white', fontSize: 16 }}>TOP UP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderWidth: 0, borderColor: 'white', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ modalQRCamera: true }) }} style={styles.roundIcon} activeOpacity={0.9}>
                            <MaterialIcons
                                name="photo-camera"
                                size={40}
                                color="#043673"
                            />
                            <Text style={{ color: '#043673' }}>Scan</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{ flex: 1, flexDirection: 'column', borderWidth: 0, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>

                    <View style={{ borderWidth: 0, borderColor: 'red', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                        <TouchableOpacity onPress={this.onPulsaClick} style={styles.ovalIcon} activeOpacity={0.8}>
                            <Entypo name="phone" size={40} color="#043673" />
                            <Text style={{ color: '#043673', textAlign: 'center', fontSize: 16 }}>Pulsa</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.onKeretaClick} style={styles.ovalIcon} activeOpacity={0.8}>
                            <Icon name="md-train" size={40} color="#043673" />
                            <Text style={{ color: '#043673', textAlign: 'center', fontSize: 16, }}>Kereta</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderWidth: 0, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this.onTransferClick} style={styles.ovalIcon} activeOpacity={0.8}>
                            <FontAwesome name="exchange" size={40} color="#043673" />
                            <Text style={{ color: '#043673', textAlign: 'center', fontSize: 16, }}>Transfer</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.onListrikClick} style={styles.ovalIcon} activeOpacity={0.8}>
                            <MaterialIcons name="flash-on" size={40} color="#043673" />
                            <Text style={{ color: '#043673', textAlign: 'center', fontSize: 16, }}>Listrik</Text>
                        </TouchableOpacity>
                    </View>

                </View>

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
            </View >
        )
    }
}

const styles = StyleSheet.create({
    mainMenu: {
        flex: 1,

        alignItems: 'center'

    },
    roundIcon: {
        borderWidth: 4,
        borderColor: '#edf5fe',
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 110,
        backgroundColor: '#fff',
        borderRadius: 100,
    },
    ovalIcon: {
        borderWidth: 4,
        borderColor: '#7cb5fa',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
        borderRadius: 100,
        paddingVertical: 10
    },
    TextStyle: {
        // color: '#fff',
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    }

})

export default connect(null, null)(MainMenu);
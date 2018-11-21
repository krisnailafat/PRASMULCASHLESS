import React, { Component } from "react";

import { Navigation } from 'react-native-navigation';

import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,
    AsyncStorage
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

import { connect } from "react-redux";

class SideDrawer extends Component {
    state = {
        email: '',
    }

    constructor(props) {
        super(props);
        console.log('navigator props', props)
    }

    componentWillMount() {
        AsyncStorage.getItem("ap:auth:email").then((value) => {
            this.setState({ "email": value });
        })
            .then(res => {
                // console.log('state email on drawer:', this.state.email)
            })
    }

    gotoHome() {
        Promise.all([
            Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30),
            Icon.getImageSource("ios-list-box-outline", 30),
            Icon.getImageSource("ios-cash", 30),
            Icon.getImageSource("ios-add-circle", 30)
        ]).then(sources => {
            Navigation.startTabBasedApp({
                tabs: [
                    {
                        label: 'Home',
                        screen: 'STEMprasmul.MainMenu', // this is a registered name for a screen
                        icon: sources[1],
                        //selectedIcon: require('../img/one_selected.png'), // iOS only
                        title: 'STEM eCAMPUS',
                        navigatorButtons: {
                            leftButtons: [
                                {
                                    icon: sources[0],
                                    title: "Menu",
                                    id: "sideDrawerToggle"
                                }
                            ]
                        }

                    },
                    {
                        label: 'News',
                        screen: 'STEMprasmul.News',
                        icon: sources[2],
                        //selectedIcon: require('../img/two_selected.png'), // iOS only
                        title: 'STEM eCAMPUS',
                        navigatorButtons: {
                            leftButtons: [
                                {
                                    icon: sources[0],
                                    title: "Menu",
                                    id: "sideDrawerToggle"
                                }
                            ]
                        }

                    }
                ],
                drawer: {
                    left: {
                        screen: "STEMprasmul.SideDrawer"
                    }
                },
                appStyle: {
                    tabBarSelectedButtonColor: '#043673',
                }
            });
        })
    }

    gotoEpayment() {

        Promise.all([
            Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30),
            Icon.getImageSource(Platform.OS === 'android' ? "md-home" : "ios-list-box-outline", 30),
            Icon.getImageSource("ios-cash", 30),
            Icon.getImageSource("ios-add-circle", 30)
        ]).then(sources => {
            Navigation.startSingleScreenApp({
                screen: {
                    screen: 'STEMprasmul.EPayment',
                    title: 'E-Payment',
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[0],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                drawer: {
                    left: {
                        screen: "STEMprasmul.SideDrawer"
                    }
                },
            })
        })


    }

    gotoMerchant() {

        Promise.all([
            Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30),
            Icon.getImageSource("ios-list-box-outline", 30),
            Icon.getImageSource("ios-cash", 30),
            Icon.getImageSource("ios-add-circle", 30)
        ]).then(sources => {
            Navigation.startSingleScreenApp({
                screen: {
                    screen: 'STEMprasmul.Merchant',
                    title: 'Create Payment',
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[0],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                drawer: {
                    left: {
                        screen: "STEMprasmul.SideDrawer"
                    }
                },
            })
        })


    }


    onSignOut() {
        Navigation.startSingleScreenApp({
            screen: {
                screen: "STEMprasmul.Login",
                title: "Login"
            },

        });
    }

    render() {
        return (
            <View
                style={[
                    styles.container,
                    { width: Dimensions.get("window").width * 0.8, backgroundColor: '#043673' }
                ]}
            >
                <View style={{ paddingLeft: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        resizeMode="cover"
                        // style={{ height: 50, width: 50 }}
                        source={require('../../assets/logo.png')}
                    />
                    {/* <View style={{ paddingLeft: 20, flex: 1, justifyContent: 'center' }}>
                        <Text style={{ color: '#043673', fontSize: 22 }}>STEM eCAMPUS</Text>
                        <Text style={{ color: '#043673' }}>user@pmbs.ac.id</Text>
                    </View> */}
                </View>
                <View style={{ margin: 10, paddingVertical: 10, flexDirection: 'row', borderBottomWidth: 1, borderColor: 'white' }}>
                </View>

                <View style={styles.listOnDrawer}>
                    <TouchableOpacity onPress={this.gotoHome}>
                        <View style={styles.drawerItem2}>
                            <View>
                                <Text style={styles.textOnList}>Home</Text>
                            </View>
                            <View style={{ width: 45, alignItems: 'center' }}>
                                <Icon
                                    name={Platform.OS === "android" ? "md-home" : "ios-home"}
                                    size={30}
                                    color="white"
                                    style={styles.drawerItemIcon}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.gotoEpayment}>
                        <View style={styles.drawerItem2}>
                            <View>
                                <Text style={styles.textOnList}>e-Payment</Text>
                            </View>
                            <View style={{ width: 45, alignItems: 'center' }}>
                                <MaterialIcons
                                    name="payment"
                                    size={30}
                                    color="white"
                                    style={styles.drawerItemIcon}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.drawerItem2}>
                            <View>
                                <Text style={styles.textOnList}>News</Text>
                            </View>
                            <View style={{ width: 45, alignItems: 'center' }}>
                                <Icon
                                    name="ios-open"
                                    size={30}
                                    color="white"
                                    style={styles.drawerItemIcon}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.gotoMerchant}>
                        <View style={styles.drawerItem2}>
                            <View>
                                <Text style={styles.textOnList}>Merchant</Text>
                            </View>
                            <View style={{ width: 45, alignItems: 'center' }}>
                                <Entypo
                                    name="shop"
                                    size={30}
                                    color="white"
                                    style={styles.drawerItemIcon}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ paddingVertical: 10, paddingLeft: 20, flexDirection: 'row', borderBottomWidth: 1, width: "100%", borderBottomColor: 'white' }}>
                    </View>
                    <TouchableOpacity onPress={this.onSignOut}>
                        <View style={styles.drawerItem2}>
                            <View>
                                <Text style={styles.textSignOut}>Sign Out</Text>
                            </View>
                            <View style={{ width: 45, alignItems: 'center' }}>
                                <Icon
                                    name="md-log-out"
                                    size={30}
                                    color="white"
                                    style={styles.drawerItemIcon}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ paddingLeft: 20, flexDirection: 'row', borderBottomWidth: 1, width: "100%", borderBottomColor: 'white' }}>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: "white",
        flex: 1
    },
    drawerItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        height: 100,
        backgroundColor: "#490E14"
    },
    drawerItem2: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        padding: 10,
        height: 50,
        backgroundColor: "#043673"
    },
    drawerItemIcon: {
        marginLeft: 10,
        borderWidth: 0,
    },
    listOnDrawer: {
        padding: 10,
        paddingVertical: 10,
        backgroundColor: "#043673"
    },
    textOnList: {
        color: 'white'
    },
    textSignOut: {
        padding: 5,
        alignItems: "center",
        justifyContent: 'center',
        color: "white"
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(authLogout()),
        onRequestTour: () => dispatch(startRequestTour()),
        goTourPackage: () => dispatch(startTourPackage()),
        onPayment: () => dispatch(startPayment())
    };
};

export default connect(null, mapDispatchToProps)(SideDrawer);

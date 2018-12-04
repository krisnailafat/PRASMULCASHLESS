/**
 * Created by mata on 8/10/18.
 */

import React, { Component } from 'react';

import { Platform, StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList, Dimensions, Image, ImageBackground, ScrollView } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
        isGenerated: false,
        menu: [
            { id: 1, makan: "Burger", img: "https://i.imgur.com/rHuX2xQ.jpg" },
            { id: 2, makan: "Pizza", img: "https://i.imgur.com/GmBg9rQ.jpg" },
            { id: 3, makan: "Kebab", img: "https://i.imgur.com/gPCKNum.jpg" },
            { id: 4, makan: "Kentang Goreng", img: "https://i.imgur.com/6wAAX5p.jpg" },
            { id: 5, makan: "spaghetti", img: "https://i.imgur.com/IimCoFt.jpg" },

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

    renderMakan = () => {
        return (
            <View style={{ height: 200 }}>
                <FlatList
                    // contentContainerStyle={{ height: 200 }}
                    data={this.state.menu}
                    horizontal={true}
                    // numColumns={2}
                    keyExtractor={(item, index) => index.toString()} //to string bila diperlukan
                    renderItem={(info) => {
                        console.log('info ', info)
                        return (
                            <TouchableOpacity style={{ borderWidth: 0, height: 200 }}>
                                <View style={styles.listItem}>
                                    <Image resizeMode="cover" source={{ uri: info.item.img }} style={{ height: 150 }} />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{info.item.makan} </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }

    render() {

        return (
            <ScrollView>
                <View style={styles.MainContainer}>
                    <View style={{ borderWidth: 0, width: '100%', height: 50, backgroundColor: '#f0f0f0', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 20, fontSize: 16 }}>Makanan Favorite</Text>
                    </View>
                    {this.renderMakan()}
                    <View style={{ marginTop: 5, borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#dedede", width: '100%' }}>
                        <TouchableOpacity style={{ height: 200, margin: 5 }}>
                            <View style={{ width: '100%', height: '100%', }}>
                                <ImageBackground resizeMode="cover" source={{ uri: "https://i.imgur.com/rHuX2xQ.jpg" }} style={{ width: '100%', height: '100%', borderRadius: 5 }} imageStyle={{ borderRadius: 5 }} >
                                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                                        {/* <Text style={{ color: 'red' }}>Centered text</Text> */}
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', borderWidth: 0, marginTop: 5 }}>
                        <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.shadow}>
                                <MaterialIcons
                                    name="new-releases"
                                    size={40}
                                    color="#043673"
                                />
                                <Text>Baru</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.shadow}>
                                <MaterialIcons
                                    name="turned-in"
                                    size={40}
                                    color="#043673"
                                />
                                <Text>sale</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.shadow}>
                            <MaterialIcons
                                    name="room"
                                    size={40}
                                    color="#043673"
                                />
                                <Text>Dekat</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.shadow}>
                                <MaterialIcons
                                    name="brightness-6"
                                    size={40}
                                    color="#043673"
                                />
                                <Text>24 jam</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.shadow}>
                                <MaterialIcons
                                    name="local-florist"
                                    size={40}
                                    color="#043673"
                                />
                                <Text>Sehat</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.shadow}>
                            <MaterialIcons
                                    name="restaurant"
                                    size={40}
                                    color="#043673"
                                />
                                <Text>Restoran</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
    listItem: {
        width: (Dimensions.get('window').width / 1.8) - 10,
        margin: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "#f6f6f6",
        flexDirection: "column",
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#f6f6f6',
        shadowColor: '#aaaaaa',
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 3,
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
        width: '30%',
        height: 100,
        margin: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "#f6f6f6",
        flexDirection: "column",
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#f6f6f6',
        shadowColor: '#aaaaaa',
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default connect(null, null)(Merchant);

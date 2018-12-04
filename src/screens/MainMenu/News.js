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
    WebView,
    ActivityIndicator
} from "react-native";
import { connect } from "react-redux";

class News extends Component {
    static navigatorStyle = {
        navBarTextColor: 'white',
        navBarBackgroundColor: '#043673',
        navBarButtonColor: 'white',
        //navBarHidden:true
    };

    state = {
        berita: null,
        isLoading: true,
    }

    componentWillMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=d6b1f98cabd047ceb4a1a5703c944c68";
        // AsyncStorage.getItem("app:auth:token").then((value) => {
        //     this.setState({ authToken: value });
        // })
        //     .then(res => {
        fetch(url, {
            credentials: 'include',
            method: 'GET',
            // headers: {
            //     "Content-Type": "application/json",
            //     "Authorization": "Token " + this.state.authToken
            // },
        })
            .catch(err => {
                console.log(err);
                //Alert("Error accessing mitratel server");
                this.setState({ errorMessage: err, isLoading: false })
                //dispatch(uiStopLoading());
            })
            .then(res => res.json())
            .then(parsedRes => {
                //dispatch(uiStopLoading());
                console.log('berita console: ', parsedRes);
                this.setState({ berita: parsedRes, isLoading: false })
            })

            // })
            .catch(err => Alert.alert("Error", err))
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

    onClickHandler = key => {
        console.log('ini key', key)
        this.props.navigator.push({
            screen: "STEMprasmul.ReadNews",
            title: 'Back',
            navigatorStyle: {
                tabBarHidden: true
            },
            passProps: {
                news: key,
            }
        })
    }

    renderImage(info) {
        if (info.item.urlToImage == null) {
            return (
                <Image resizeMode="cover" source={{ uri: "https://i.ibb.co/zFJp1zc/icon-70-512.png" }} style={styles.placeImage} />
            )
        } else {
            return (
                <Image resizeMode="cover" source={{ uri: info.item.urlToImage }} style={styles.placeImage} />
            )
        }

    }

    renderContent() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#043673" />
                    <Text style={{ paddingTop: 10 }}>Loading ...</Text>
                </View>
            )
        } else {
            return (
                <View>
                    <FlatList
                        contentContainerStyle={styles.listContainer}
                        data={this.state.berita.articles}
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                        renderItem={(info) => {
                            console.log('info', info)
                            return (
                                <TouchableOpacity onPress={() => this.onClickHandler(info.item)}>
                                    <View style={styles.listItem}>
                                        {this.renderImage(info)}
                                        <View>
                                            <Text style={{ fontWeight: 'bold', color: '#5a5a5a' }}>{info.item.title}</Text>
                                            {/* <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 5, paddingTop: 10 }}>
                                                <Text>nama</Text> */}
                                            {/* <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Price: </Text>
                                                <Text style={{ fontWeight: 'bold', paddingLeft: 5, fontSize: 12 }}>Rp.</Text> */}
                                            {/* <Text style={{ fontWeight: 'bold', color: '#ce0b24', paddingLeft: 5, fontSize: 14 }}>{(info.item.product_areas[0] != undefined) ? info.item.product_areas[0].price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : ''}</Text> */}
                                            {/* </View> */}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            )
        }


    }

    render() {
        console.log("ini berita ", this.state.berita)
        return (
            // <View style={styles.mainMenu}>
            <View style={styles.mainMenu}>
                {this.renderContent()}
                {/* <WebView
                    source={{
                        uri:
                            'https://www.google.com/'
                    }}
                    // style={{ marginTop: 20 }}
                    scalesPageToFit={true}
                /> */}
            </View>
        )
    }
}

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    mainMenu: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    listItem: {
        width: (Dimensions.get('window').width / 2) - 10,
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
    placeImage: {
        marginRight: 8,
        height: 150,
        width: "100%"
    }

})

export default connect(null, null)(News);
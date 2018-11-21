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
    FlatList
} from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons';

class NewsDetail extends Component {
    static navigatorStyle = {
        navBarTextColor:'white',
        navBarBackgroundColor:'#043673',
        navBarButtonColor:'white',
    };

    state = {
        products:null
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


    render(){

        return(
            <View style={styles.mainMenu}>
                <Text>News Campus</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainMenu : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },

})

export default connect(null, null)(NewsDetail);

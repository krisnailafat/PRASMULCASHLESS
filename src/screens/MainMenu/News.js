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
    FlatList
} from "react-native";
import { connect } from "react-redux";

class News extends Component {
    static navigatorStyle = {
        navBarTextColor:'white',
        navBarBackgroundColor:'#043673',
        navBarButtonColor:'white',
        //navBarHidden:true
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
                <Text>Main menu</Text>
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

export default connect(null, null)(News);
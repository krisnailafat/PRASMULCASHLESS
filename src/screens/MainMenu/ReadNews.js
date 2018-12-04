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
    WebView
} from "react-native";
import { connect } from "react-redux";
import FloatingLabel from "react-native-floating-labels";

class ReadNews extends Component {
    static navigatorStyle = {
        navBarTextColor: 'white',
        navBarBackgroundColor: '#043673',
        navBarButtonColor: 'white'
    };

    state = {

    }

    render() {
        console.log("ini pass ", this.props.url)
        return (
            <View style={{ height: deviceHeight }}>
                {/* <Text>santuy</Text> */}
                <WebView
                    source={{
                        uri:
                            this.props.news.url
                    }}
                    // style={{ marginTop: 20 }}
                    scalesPageToFit={true}
                />
            </View>
        )
    }
}

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    formInput: {
        borderColor: '#333',
    }
})

export default connect(null, null)(ReadNews);
/**
 * Created by mata on 7/25/18.
 */

import React, { Component } from "react";
import { connect } from "react-redux";

import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Button,
    TextInput,
    Platform
} from "react-native";
import FloatingLabel from "react-native-floating-labels";
import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons';


import firebase from 'react-native-firebase';
import type { RemoteMessage, Notification, NotificationOpen } from 'react-native-firebase';


class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    static navigatorStyle = {
        navBarHidden: true,
        screenBackgroundColor: 'white',
    };
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    componentDidMount = async () => {
        firebase.messaging().getToken().then(token => {
            console.log("TOKEN getFCMToken PRASMUL", token);
            this.setState({ token: token || "" })
        });

        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            // user has permissions
        } else {
            // user doesn't have permission
            try {
                await firebase.messaging().requestPermission();
                // User has authorised
            } catch (error) {
                // User has rejected permissions
                alert('No permission for notification');
            }
        }

        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            console.log('opened notification')
            // App was opened by a notification
            // Get the action triggered by the notification being opened
            const action = notificationOpen.action;
            // Get information about the notification that was opened
            const notification = notificationOpen.notification;
            if (notification.body !== undefined) {
                alert(notification.body);
            } else {
                var seen = [];
                alert(JSON.stringify(notification.data, function (key, val) {
                    if (val != null && typeof val == "object") {
                        if (seen.indexOf(val) >= 0) {
                            return;
                        }
                        seen.push(val);
                    }
                    return val;
                }));
            }
            firebase.notifications().removeDeliveredNotification(notification.notificationId);
        }

        const channel = new firebase.notifications.Android.Channel('prasmul-channel', 'Prasmul Channel', firebase.notifications.Android.Importance.Max)
            .setDescription('My apps test channel');

        // Create the channel
        firebase.notifications().android.createChannel(channel);

        firebase.messaging().subscribeToTopic('/topics/prasmulApp');

        this.messageListener = firebase.messaging().onMessage((message) => {
            // Process your message as required
            console.log('message listener:', message)
        });


        this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification: Notification) => {
            // Process your notification as required
            // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
            console.log('this is notificationDisplayedListener', notification)

            // const notification2 = new firebase.notifications.Notification()
            //     .setNotificationId('notificationId')
            //     .setTitle('My notification title')
            //     .setBody('My notification body')
            //     .setData({
            //         key1: 'value1',
            //         key2: 'value2',
            //     });
            //
            // notification2
            //     .android.setChannelId('test-channel')
            //     .android.setSmallIcon('ic_launcher');
            //
            // firebase.notifications().displayNotification(notification2);

        });
        this.notificationListener = firebase.notifications().onNotification((notification: Notification) => {
            // Process your notification as required
            console.log('get Message');
            console.log(notification);
            // const notification2 = new firebase.notifications.Notification()
            //     .setNotificationId('notificationId')
            //     .setTitle('My notification title')
            //     .setBody('My notification body')
            //     .setData({
            //         key1: 'value1',
            //         key2: 'value2',
            //     });
            //
            // notification2
            //     .android.setChannelId('test-channel')
            //     .android.setSmallIcon('ic_launcher');
            //
            // firebase.notifications().displayNotification(notification2);

            if (Platform.OS === 'android') {


                const localNotification = new firebase.notifications.Notification({
                    sound: 'default',
                    show_in_foreground: true,
                    show_in_background: true
                })
                    .setNotificationId(notification.notificationId)
                    .setTitle(notification.title)
                    .setSubtitle(notification.subtitle)
                    .setBody(notification.body)
                    .setData(notification.data)
                    .android.setChannelId('prasmul-channel') // e.g. the id you chose above
                    .android.setSmallIcon('ic_launcher') // create this icon in Android Studio
                    .android.setColor('#000000') // you can set a color here
                    .android.setPriority(firebase.notifications.Android.Priority.High);

                firebase.notifications()
                    .displayNotification(localNotification)
                    .catch(err => console.error('notification error', err));

            }
            //else if (Platform.OS === 'ios') {
            //
            //     const localNotification = new firebase.notifications.Notification()
            //         .setNotificationId(notification.notificationId)
            //         .setTitle(notification.title)
            //         .setSubtitle(notification.subtitle)
            //         .setBody(notification.body)
            //         .setData(notification.data)
            //         .ios.setBadge(notification.ios.badge);
            //
            //     firebase.notifications()
            //         .displayNotification(localNotification)
            //         .catch(err => console.error(err));
            //
            // }
        });
        this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
            // Get the action triggered by the notification being opened
            console.log('klik notification --> go to news page')
            console.log('notif open:', notificationOpen)
            const action = notificationOpen.action;
            // Get information about the notification that was opened
            const notification = notificationOpen.notification;
            // const notification = new firebase.notifications.Notification({
            //     sound: 'default',
            //     show_in_foreground: true,
            //     show_in_background: true
            // })
            //     .setNotificationId(notificationOpen.notification.notificationId)
            //     .setTitle(notificationOpen.notification.title)
            //     .setSubtitle(notificationOpen.notification.subtitle)
            //     .setBody(notificationOpen.notification.body)
            //     .setData(notificationOpen.notification.data)
            //     .android.setChannelId('test-channel') // e.g. the id you chose above
            //     .android.setSmallIcon('ic_launcher') // create this icon in Android Studio
            //     .android.setColor('#000000') // you can set a color here
            //     .android.setPriority(firebase.notifications.Android.Priority.High);
            if (notification.body !== undefined) {
                alert(notification.body);
                // var seen = [];
                // alert(JSON.stringify(notification.data, function(key, val) {
                //     if (val != null && typeof val == "object") {
                //         if (seen.indexOf(val) >= 0) {
                //             return;
                //         }
                //         seen.push(val);
                //     }
                //     return val;
                // }));
            } else {
                if (notificationOpen.notification.data !== undefined) {
                    alert(notificationOpen.notification.data.body)
                }
            }
            firebase.notifications().removeDeliveredNotification(notification.notificationId);
        });

        // const notificationOpen = await firebase.notifications().getInitialNotification();
        // console.log('tes')
        // if (notificationOpen) {
        //     // App was opened by a notification
        //     // Get the action triggered by the notification being opened
        //     const action = notificationOpen.action;
        //     // Get information about the notification that was opened
        //     const notification: Notification = notificationOpen.notification;
        // }
    }

    componentWillUnmount() {
        this.notificationDisplayedListener();
        this.notificationListener();
        this.notificationOpenedListener();
        this.messageListener();
    }


    onBlur() {
        console.log('#####: onBlur');
    }

    onHandlerForgotPassword = () => {
        this.props.navigator.push({
            screen: "STEMprasmul.ForgotPassword",
            title: "Reset Password",

        });
    }

    onHandlerCreateAccount = () => {
        this.props.navigator.push({
            screen: "STEMprasmul.CreateAccount",
            title: "Registration",

        });
    }

    onHandlerLogin = () => {
        console.log('handler login')

        Promise.all([
            Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30),
            Icon.getImageSource(Platform.OS === 'android' ? "md-home" : "ios-list-box-outline", 30),
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

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#043673', justifyContent: 'space-around' }}>
                <View />
                <View >
                    <Image
                        resizeMode="cover"
                        // style={{height: 110,width: 110}}
                        source={require('../../assets/logo.png')}
                    />
                </View>


                <View style={{ paddingTop: 30, width: "90%" }}>

                    <TextInput
                        style={{ height: 50, backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomWidth: 1, fontSize: 18, paddingHorizontal: 15 }}
                        underlineColorAndroid="transparent"
                        placeholder={'Username'}
                        onChangeText={(val) => this.setState({ val })}
                        value={this.state.username}
                    />
                    {/* </View>
                <View style={{ width: "90%" }}> */}
                    <TextInput
                        style={{ height: 50, backgroundColor: 'white', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopWidth: 1, fontSize: 18, paddingHorizontal: 15 }}
                        underlineColorAndroid="transparent"
                        placeholder={'Password'}
                        onChangeText={(val) => this.setState({ val })}
                        value={this.state.password}
                    />
                    <View style={{ flexDirection: 'column', justifyContent: "flex-end", alignItems: "flex-end", }}>
                        <TouchableOpacity onPress={this.onHandlerForgotPassword}>
                            <Text style={{ color: 'white' }}>Forgot Password ?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 0, alignItems: 'center', width: '100%', justifyContent: 'center', marginTop: 20 }}>
                        <TouchableOpacity onPress={this.onHandlerLogin} style={{ width: '100%' }}>
                            <View style={{ alignItems: 'center', borderRadius: 100, borderColor: 'white', borderWidth: 1, paddingVertical: 15, paddingHorizontal: 40, backgroundColor: '#043673' }}>
                                <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', fontSize: 18, color: 'white' }}>Log In</Text>
                            </View>
                        </TouchableOpacity>
                        {/* </View> */}
                        <View style={{ flexDirection: 'row', paddingVertical: 20, alignItems: 'center' }}>
                            <View style={{ paddingHorizontal: '25%', borderBottomWidth: 1, borderColor: 'white' }}></View>
                            <Text style={{ color: 'white' }}> OR </Text>
                            <View style={{ paddingHorizontal: '25%', borderBottomWidth: 1, borderColor: 'white' }}></View>
                        </View>
                        {/* <View style={{ paddingTop: 10, alignItems: 'center' }}> */}
                        <TouchableOpacity onPress={this.onHandlerCreateAccount} style={{ width: '100%' }}>
                            <View style={{ alignItems: 'center', borderRadius: 100, paddingVertical: 15, paddingHorizontal: 40, backgroundColor: '#0a74f6' }}>
                                <Text style={{ paddingHorizontal: 10, fontSize: 20, color: 'white', fontWeight: 'bold' }}>Create Account</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


            </View >
        );
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    formInput: {
        borderColor: '#333',
    }
})

export default connect(null, null)(Login);
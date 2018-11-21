// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import React, { Component } from 'react';

import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import Login from "./src/screens/Auth/Login"
import CreateAccount from "./src/screens/Auth/CreateAccount"
import ForgotPassword from "./src/screens/Auth/ForgotPassword"
import MainMenu from "./src/screens/MainMenu/MainMenu";
import News from "./src/screens/MainMenu/News";
import EPayment from "./src/screens/EPayment/EPayment";
import Merchant from "./src/screens/Merchant/Merchant";
import configureStore from "./src/store/configureStore";

const store = configureStore();

// Register Screens
Navigation.registerComponent(
    "STEMprasmul.SideDrawer",
    () => SideDrawer,
    store,
    Provider
);
Navigation.registerComponent(
    "STEMprasmul.CreateAccount",
    () => CreateAccount,
    store,
    Provider
);
Navigation.registerComponent(
    "STEMprasmul.ForgotPassword",
    () => ForgotPassword,
    store,
    Provider
);
Navigation.registerComponent(
    "STEMprasmul.MainMenu",
    () => MainMenu,
    store,
    Provider
);
Navigation.registerComponent(
    "STEMprasmul.News",
    () => News,
    store,
    Provider
);
Navigation.registerComponent(
    "STEMprasmul.EPayment",
    () => EPayment,
    store,
    Provider
);
Navigation.registerComponent(
    "STEMprasmul.Login",
    () => Login,
    store,
    Provider
);
Navigation.registerComponent(
    "STEMprasmul.Merchant",
    () => Merchant,
    store,
    Provider
);


Navigation.startSingleScreenApp({
    screen: {
        screen: "STEMprasmul.Login",
        title: "Login"
    },

});

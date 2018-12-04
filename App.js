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
import Topup from "./src/screens/Topup/Topup";
import History from "./src/screens/History/History"
import OnProgress from "./src/screens/History/OnProgress"
import ReadNews from "./src/screens/MainMenu/ReadNews"
import Pulsa from "./src/screens/EPayment/Pulsa"
import Kereta from "./src/screens/EPayment/Kereta"
import Listrik from "./src/screens/EPayment/Listrik"
import Transfer from "./src/screens/EPayment/Transfer"

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
Navigation.registerComponent(
    "STEMprasmul.Topup",
    () => Topup,
    store,
    Provider
);
Navigation.registerComponent(
    "STEMprasmul.History",
    () => History,
    store,
    Provider
);
Navigation.registerComponent(
    "STEMprasmul.OnProgress",
    () => OnProgress,
    store,
    Provider
);
Navigation.registerComponent(
    "STEMprasmul.ReadNews",
    () => ReadNews,
    store,
    Provider
);
Navigation.registerComponent(
    "STEMprasmul.Pulsa",
    () => Pulsa,
    store,
    Provider
);
Navigation.registerComponent(
    "STEMprasmul.Kereta",
    () => Kereta,
    store,
    Provider
);
Navigation.registerComponent(
    "STEMprasmul.Listrik",
    () => Listrik,
    store,
    Provider
);
Navigation.registerComponent(
    "STEMprasmul.Transfer",
    () => Transfer,
    store,
    Provider
);

Navigation.startSingleScreenApp({
    screen: {
        screen: "STEMprasmul.Login",
        title: "Login"
    },

});

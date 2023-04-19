import React, { useState, useEffect } from "react";

import { StyleSheet, View, Button, Text } from "react-native";

// import { GoogleSignin } from "@react-native-google-signin/google-signin";

// import auth from "@react-native-firebase/auth";

const App = () => {
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // GoogleSignin.configure({
  //   webClientId: "1573399935-ku8mi5qo6prgrgbg5mu3q1rkuuc254j8.apps.googleusercontent.com",
  // })

  // const onAuthStateChanged = (user) => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  // const onGoogleButtonPress = async () => {
  //   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

  //   const { idToken } = await GoogleSignin.signIn();
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
  //   // return auth().signInWithCredential(googleCredential);
  //   const user_sign_in = auth().signInWithCredential(googleCredential);

  //   user_sign_in.then((user) => {
  //     console.log(user);
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }

  // if (initializing) {
  //   return null;
  // }

  // if (!user) {
  //   return (
  //     <View style={styles.container}>
  //       <GoogleSigninButton
  //         style={{ width: 300, height: 65 }}
  //         onPress={onGoogleButtonPress}
  //       />
  //     </View>
  //   )
  // }

  // async function onGoogleButtonPress() {
  //   // Check if your device supports Google Play
  //   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  //   // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();
  
  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential);
  // }

  return (
    <View style={styles.container}>
      <Text>asdadas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
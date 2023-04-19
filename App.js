import React, { useEffect, useState } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import auth from "@react-native-firebase/auth";

// import { GoogleSignin, GoogleSigninButton, statusCodes } from "@react-native-google-signin/google-signin";
import { GoogleSignin, GoogleSigninButton, statusCodes } from "react-native-google-signin";

GoogleSignin.configure({
  webClientId: "1573399935-ku8mi5qo6prgrgbg5mu3q1rkuuc254j8.apps.googleusercontent.com",
});

const LoginScreen = () => {
  const [error, setError] = useState();
  const [connected, setConnected] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const result = await GoogleSignin.signIn();

      if (result) {
        const googleCredential = auth.GoogleAuthProvider.credential(result?.idToken, result?.accessToken);
        await auth().signInWithCredential(googleCredential);
      }
    } catch (error) {
      setError(error?.code);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setConnected(user && true);
    });

    return subscriber;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {!connected &&
        <TouchableOpacity >
          <GoogleSigninButton />
        </TouchableOpacity>
      }

      {connected &&
        <Text>
          deu boa
        </Text>
      }

      {error &&
        <Text>
          Erro: {error}
        </Text>
      }
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
  title: {
    color: "#333",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  }
});

export default LoginScreen;

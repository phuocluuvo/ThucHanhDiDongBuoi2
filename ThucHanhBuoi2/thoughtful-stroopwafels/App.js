import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import Constants from "expo-constants";

export default function App() {
    const users = [
        { username: "luu", password: "123" },
        { username: "louis", password: "123" },
    ];
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);
    return ( <
        >
        <
        Text style = {
            { marginHorizontal: "auto", fontSize: 30 } } > Login < /Text> {
            isLoginSuccess ? ( <
                Text style = {
                    { marginHorizontal: "auto", fontSize: 20 } } > Success < /Text>
            ) : ( <
                Text style = {
                    { marginHorizontal: "auto", fontSize: 20 } } > Fail < /Text>
            )
        } <
        View style = { styles.container } >
        <
        View style = {
            { marginVertical: 3 } } >
        <
        Text > User name: < /Text> <
        Text > Password: < /Text> <
        /View> <
        View style = {
            { marginVertical: 3 } } >
        <
        TextInput style = { styles.input }
        onChange = {
            (e) => setUserName(e.target.value) }
        /> <
        TextInput style = { styles.input }
        onChange = {
            (e) => setPassword(e.target.value) }
        /> <
        /View> <
        /View>

        <
        Button title = "Login"
        style = {
            { marginVertical: 10 } }
        onPress = {
            () => {
                users.forEach((u) => {
                    if (username.trim === u.username && password.trim === u.password) {
                        setIsLoginSuccess(true);
                    } else {
                        alert(
                            username.trim + "===" + u.username + " = " + username.trim ===
                            u.username
                        );
                        setIsLoginSuccess(false);
                    }
                });
            }
        }
        /> <
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: Constants.statusBarHeight,
        padding: 8,
    },
    input: {
        borderWidth: 1,
        marginTop: 1,
    },
});
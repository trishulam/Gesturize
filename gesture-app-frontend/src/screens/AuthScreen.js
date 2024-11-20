import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const AuthScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    return (
        <View style={styles.container}>
            <View style={{ width: '70%', paddingVertical: 40 }}>
                <TextInput label="Email" style={{ marginVertical: 15 }} />
                <TextInput label="Password" />
            </View>
            <View>
                <Pressable style={{ backgroundColor: '#258189', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 50, display: 'flex', flexDirection: 'row', width: 300, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'column'
    },
})
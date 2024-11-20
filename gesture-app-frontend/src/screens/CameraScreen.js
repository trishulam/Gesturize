import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const CameraScreen = () => {
    const naviation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ backgroundColor: '#f2f2f2', borderRadius: 100, position: 'absolute', top: 50, left: 20, padding: 7}} onPress={() => naviation.goBack()}>
                <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <View>
                <Image style={styles.homeLogoImage} source={require('../../assets/logo.png')} />
            </View>
            <KeyboardAvoidingView keyboardVerticalOffset={-100} behavior='padding' style={styles.bottomContainer}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, marginVertical: 15 }}>Connect to Gesturise</Text>
                <View>
                    <TextInput style={styles.textBox} placeholder="IP Address..." />
                </View>
                <View>
                    <TextInput style={styles.textBox} placeholder="Port Number..." />
                </View>
                <TouchableOpacity style={{ backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 50, display: 'flex', flexDirection: 'row', width: 300, alignItems: 'center', justifyContent: 'center', marginVertical: 15 }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 20 }}>Connect</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

export default CameraScreen

const styles = StyleSheet.create({
    textBox: {
        borderWidth: 1,
        borderColor: '#fff',
        width: 300,
        height: 45,
        borderRadius: 15,
        paddingHorizontal: 10,
        fontSize: 18,
        backgroundColor: '#fff',
        marginVertical: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 40
    },
    homeLogoImage: {
        width: 250,
        height: 250,
        borderRadius: 100
    },
    bottomContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#60b83a',
        width: '100%',
        height: '50%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    }
})
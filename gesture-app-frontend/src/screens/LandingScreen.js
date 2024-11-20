import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image style={styles.homeLogoImage} source={require('../../assets/logo.png')} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 40 }}>
                <Text style={{ color: '#258189', fontWeight: 'bold', fontSize: 40 }}>Gesturize</Text>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 15, marginBottom: 50 }}>Redefining Connectivity - All at you fingertips!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('AuthScreen')} style={{ backgroundColor: '#258189', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 50, display: 'flex', flexDirection: 'row', width: 300, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 25, marginTop: 20 }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LandingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    topContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#258189',
        width: '100%',
        height: '45%',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
    },
    homeLogoImage: {
        width: 250,
        height: 250,
        borderRadius: 150
    },
})
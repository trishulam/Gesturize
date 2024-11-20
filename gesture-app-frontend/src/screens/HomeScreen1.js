import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image style={styles.homeLogoImage} source={require('../../assets/logo.png')} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')} style={{ backgroundColor: '#258189', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 50, display: 'flex', flexDirection: 'row', width: 300, alignItems: 'center', justifyContent: 'center' }}>
          <Entypo name="camera" size={25} color="white" style={{ marginRight: 15 }} />
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Use Device as Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('VoiceScreen')} style={{ backgroundColor: '#258189', paddingHorizontal: 20, paddingVertical: 15, marginVertical: 15, borderRadius: 50, display: 'flex', flexDirection: 'row', width: 300, alignItems: 'center', justifyContent: 'center' }}>
          <MaterialIcons name="group" size={24} color="white" style={{ marginRight: 15 }} />
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Group Presentation</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ConfigScreen')} style={{ backgroundColor: '#258189', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 50, display: 'flex', flexDirection: 'row', width: 300, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="settings" size={25} style={{ marginRight: 15 }} color="white" />
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Configure Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ height: 180, width: 180 }} source={require('../../assets/launch-button.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

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
    borderRadius: 200
  }
})
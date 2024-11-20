import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { SelectList } from 'react-native-dropdown-select-list'
import { useState } from 'react';
import { RadioButton, ProgressBar, MD3Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const ConfigScreen = () => {

    const navigation = useNavigation()

    const [selected, setSelected] = useState("Baba");
    const [selectedAction, setSelectedAction] = useState("");
    const [checked, setChecked] = useState('first');


    const data = [
        { key: '1', value: 'Baba', path: require("../../assets/gestures/Baba.png") },
        { key: '2', value: 'Fist', path: require("../../assets/gestures/Fist.png") },
        { key: '3', value: 'Palm', path: require("../../assets/gestures/Palm.png") },
        { key: '4', value: 'Pinch', path: require("../../assets/gestures/Pinch.png") },
        { key: '5', value: 'Pointer', path: require("../../assets/gestures/Pointer.png") },
        // { key: '6', value: 'Seven', path: require("../../assets/gestures/Seven.png") },
        { key: '7', value: 'Side Thumbs', path: require("../../assets/gestures/Side Thumbs.png") },
        { key: '8', value: 'Thumbs', path: require("../../assets/gestures/Thumbs Up.png") },
        { key: '9', value: 'Triple', path: require("../../assets/gestures/Triple.png") },
        { key: '10', value: 'Victory', path: require("../../assets/gestures/Victory.png") },
    ]

    const imagePath = data.find(item => item.value === selected)?.path;

    const actions = [
        { key: '1', value: 'Cursor' },
        { key: '2', value: 'Scroll' },
        { key: '3', value: 'Windows' },
        { key: '4', value: 'Click' },
        { key: '5', value: 'Drag' },
        { key: '6', value: 'Annotate' },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 25, alignSelf: 'flex-start' }}>Configure Gesture</Text>
                <ProgressBar style={{ marginVertical: 15 }} progress={0.5} color={MD3Colors.error50} />
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingVertical: 20 }}>
                    <View>
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            save="value"
                        />
                        <Image style={{ height: 180, width: 180, marginTop: 60 }} resizeMode='contain' source={imagePath} />
                    </View>
                    <View style={{ borderRightWidth: 1 }}>
                    </View>
                    <View>
                        <SelectList
                            setSelectedAction={(val) => setSelectedAction(val)}
                            data={actions}
                            save="value"
                        />
                        <View style={{ paddingVertical: 20 }}>
                            {
                                actions.map((action, index) => {
                                    return (
                                        <View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <RadioButton
                                                value={action.value}
                                                status={checked === action.value ? 'checked' : 'unchecked'}
                                                onPress={() => setChecked(action.value)}
                                            />
                                            <Text>{action.value}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={{ backgroundColor: '#258189', paddingHorizontal: 20, paddingVertical: 15, marginVertical: 35, borderRadius: 50, display: 'flex', flexDirection: 'row', width: 300, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Save Settings</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ConfigScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'column'
    },
})
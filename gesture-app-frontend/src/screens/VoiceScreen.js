import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useVoiceRecognition } from '../hooks/useVoiceRecognition'

const VoiceScreen = () => {

    const { state, startRecognizing, stopRecognizing, cancelRecognizing, destroyRecognizer } = useVoiceRecognition()

    return (
        <View style={styles.container}>
            <Text>VoiceScreen</Text>
            <Text>{JSON.stringify(state, null, 2)}</Text>
            <Pressable onPressIn={startRecognizing} onPressOut={stopRecognizing} style={styles.recordButton}>
                <Text>Start</Text>
            </Pressable>
        </View>
    )
}

export default VoiceScreen

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

    recordButton: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#258189',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
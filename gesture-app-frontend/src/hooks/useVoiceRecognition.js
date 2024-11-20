import Voice, { SpeechErrorEvent, SpeechResultsEvent } from '@react-native-voice/voice'
import { useCallback, useEffect, useState } from "react"

export const useVoiceRecognition = () => {
    const [state, setState] = useState({
        recognized: '',
        pitch: '',
        error: '',
        end: '',
        started: '',
        results: [],
        partialResults: [],
        isRecording: false,
    })

    const resetState = useCallback(() => {
        setState({
            recognized: '',
            pitch: '',
            error: '',
            end: '',
            started: '',
            results: [],
            partialResults: [],
            isRecording: false,
        })
    }, [setState])

    const startRecognizing = useCallback(async () => {
        resetState()
        try {
            await Voice.start('en-US')
        } catch (e) {
            console.error(e)
        }
    }, [resetState])

    const stopRecognizing = useCallback(async () => {
        try {
            await Voice.stop()
        } catch (e) {
            console.error(e)
        }
    }, [])

    const cancelRecognizing = useCallback(async () => {
        try {
            await Voice.cancel()
        } catch (e) {
            console.error(e)
        }
    }, [])

    const destroyRecognizer = useCallback(async () => {
        try {
            await Voice.destroy()
        } catch (e) {
            console.error(e)
        }
        resetState()
    }, [resetState])

    useEffect(() => {
        Voice.onSpeechStart = () => {
            setState((prevState) => ({
                ...prevState,
                started: '√',
                isRecording: true,
            }))
        }

        Voice.onSpeechRecognized = () => {
            setState((prevState) => ({
                ...prevState,
                recognized: '√',
            }))
        }

        Voice.onSpeechEnd = () => {
            setState((prevState) => ({
                ...prevState,
                end: '√',
                isRecording: false,
            }))
        }

        Voice.onSpeechError = (e) => {
            setState((prevState) => ({
                ...prevState,
                error: JSON.stringify(e.error),
                isRecording: false,
            }))
        }

        Voice.onSpeechResults = (e) => {
            setState((prevState) => ({
                ...prevState,
                results: e.value,
            }))
        }

        Voice.onSpeechPartialResults = (e) => {
            setState((prevState) => ({
                ...prevState,
                partialResults: e.value,
            }))
        }

        Voice.onSpeechVolumeChanged = (e) => {
            setState((prevState) => ({
                ...prevState,
                pitch: e.value,
            }))
        }

        return () => {
            Voice.destroy().then(Voice.removeAllListeners)
        }
    }, []);

    return {
        state,
        setState,
        resetState,
        startRecognizing,
        stopRecognizing,
        cancelRecognizing,
        destroyRecognizer,
    }
}
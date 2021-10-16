import React from 'react';
import AudioRecorderPlayer, { 
    AVEncoderAudioQualityIOSType,
    AVEncodingOption, 
    AudioEncoderAndroidType,
    AudioSet,
    AudioSourceAndroidType, 
   } from 'react-native-audio-recorder-player';


export const Record = () => {
    const [isLoggingIn, setIsLoggingIn] = React.useState(false)
    const [recordSecs, setRecordSecs] = React.useState(0)
    const [recordTime, setRecordTime] = React.useState('00:00:00')
    const [currentPositionSec, setCurrentPositionSec] = React.useState(0)
    const [currentDurationSec, setCurrentDurationSec] = React.useState(0)
    const [playTime, setPlayTime] = React.useState('00:00:00')
    const [duration, setDuration] = React.useState('00:00:00')

    const audioRecorderPlayer = new AudioRecorderPlayer();
    audioRecorderPlayer.setSubscriptionDuration(0.09); // optional. Default is 0.1
}
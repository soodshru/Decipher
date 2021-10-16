import React from 'react';
import AudioRecorderPlayer, { 
    AVEncoderAudioQualityIOSType,
    AVEncodingOption, 
    AudioEncoderAndroidType,
    AudioSet,
    AudioSourceAndroidType, 
   } from 'react-native-audio-recorder-player';

import { Card, Background, Logo, Header, Title, Button, Divider, } from 'react-native-paper';


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

    const onStartRecord = async () => {
    
        const path = 'hello.m4a';
        const audioSet = {
          AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
          AudioSourceAndroid: AudioSourceAndroidType.MIC,
          AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
          AVNumberOfChannelsKeyIOS: 2,
          AVFormatIDKeyIOS: AVEncodingOption.aac,
        };
        console.log('audioSet', audioSet);
        const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
        audioRecorderPlayer.addRecordBackListener((e) => {
          setRecordSecs(e.current_position)
          setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.current_position)))
        });
        console.log(`uri: ${uri}`);
      };

    const onStopRecord = async () => {
        const result = await audioRecorderPlayer.stopRecorder();
        audioRecorderPlayer.removeRecordBackListener();
        setRecordSecs(0)
        console.log(result);
      };

    const onStartPlay = async (e) => {
        console.log('onStartPlay');
        const path = 'hello.m4a'
        const msg = await audioRecorderPlayer.startPlayer(path);
        audioRecorderPlayer.setVolume(1.0);
        console.log(msg);
        audioRecorderPlayer.addPlayBackListener((e) => {
          if (e.current_position === e.duration) {
            console.log('finished');
            audioRecorderPlayer.stopPlayer();
          }
          setCurrentPositionSec(e.current_position)
          setCurrentDurationSec(e.duration)
          setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.current_position)))
          setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)))
        });
    };


    const onPausePlay = async (e) => { 
        await audioRecorderPlayer.pausePlayer();
    };

    const onStopPlay = async (e) => {
        console.log('onStopPlay');
        audioRecorderPlayer.stopPlayer();
        audioRecorderPlayer.removePlayBackListener();
    };

    return (
        <Card style={{ flex: 1, flexDirection: 'row', alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
          <Background>
            <Logo />
            <Header>InstaPlayer</Header>
            <Title>{recordTime}</Title>
            <Button mode="contained" icon="record" onPress={() => onStartRecord()}>
              RECORD
          </Button>
  
            <Button
              icon="stop"
              mode="outlined"
              onPress={() => onStopRecord()}
            >
              STOP
      </Button>
            <Divider />
            <Title>{playTime} / {duration}</Title>
            <Button mode="contained" icon="play" onPress={() => onStartPlay()}>
              PLAY
          </Button>
  
            <Button
              icon="pause"
              mode="contained"
              onPress={() => onPausePlay()}
            >
              PAUSE
      </Button>
            <Button
              icon="stop"
              mode="outlined"
              onPress={() => onStopPlay()}
            >
              STOP
      </Button>
          </Background>
        </Card>
      )
}
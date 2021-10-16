import React from 'react';
import { ReactMic } from 'react-mic';
import { sendAudio } from '../api/Api';
 
export class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      loading: false,
      file: null
    }
    this.onStop = this.onStop.bind(this)
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }
 
  startRecording = () => {
    this.setState({ record: true });
  }
 
  stopRecording = () => {
    this.setState({ record: false });
  }

  setLoading = (boolean) => {
    this.setState({loading: boolean})
  }
 
  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }
 
  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
    this.setState({file: recordedBlob})
    sendAudio(recordedBlob.blob, this.setLoading)
  }
 
  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          mimeType="audio/wav"
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button>
        {this.state.file && <audio
                ref="audioSource"
                controls="controls"
                controlsList="nodownload"
                src={this.state.file.blobURL}
              />}
      </div>
    );
  }
}

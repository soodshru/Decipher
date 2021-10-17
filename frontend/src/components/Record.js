import React from 'react';
import { ReactMic } from 'react-mic';

import './Record.scss'
 
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
    this.toggleRecord = this.toggleRecord.bind(this)
  }

  toggleRecord = () => {
    this.setState({record: !this.state.record})
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
    this.props.sendAPIRequest(recordedBlob.blob, this.setLoading)
  }
 
  render() {
    return (
      <div>
        {this.state.file && <audio
                ref="audioSource"
                controls="controls"
                controlsList="nodownload"
                src={this.state.file.blobURL}
              />}
        <div className='mic'>
          <ReactMic
            record={this.state.record}
            onStop={this.onStop}
            onData={this.onData}
            mimeType="audio/wav"
            strokeColor="#000000"/>
        </div>
        {!this.state.record ? <div onClick={this.toggleRecord} className='normal-circle'></div> : <div onClick={this.toggleRecord} className="pulsating-circle"></div>}
      </div>
    );
  }
}

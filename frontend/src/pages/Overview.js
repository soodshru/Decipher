import React from 'react';
import '../App.css';
import { Record } from '../components/Record';
import LanguageSelect from '../components/LanguageSelect';
import { LANGUAGES } from '../utils/constants';
import { sendAudio } from '../api/Api';

function Overview() {
  const [langOne, setLangOne] = React.useState(['','']);
  const [langTwo, setLangTwo] = React.useState(['','']);
  const [file, setFile] = React.useState(null)

  const handleChange = (value, index) => {
    if (!index) setLangOne([value, LANGUAGES[value]])
    else setLangTwo([value, LANGUAGES[value]])
    console.log([value, LANGUAGES[value]])
  };

  const sendAPIRequest = (file, setLoading) => {
    sendAudio(file, setLoading, langOne, langTwo)
  }

  return (
    <div className="App">
      <LanguageSelect langOne={langOne} langTwo={langTwo} handleChange={handleChange}/>
      <Record sendAPIRequest={sendAPIRequest}/>
    </div>
  );
}

export default Overview;

import axios from 'axios';

const backendUrl = 'http://127.0.0.1:5000'

export const sendAudio = async (file, setLoading, fromLang, toLang) => {
    if (fromLang[1] === '' || toLang[1] === '') return
    setLoading(true)
    let data = new FormData();
    data.append('file', file, file.name);
    data.append('fromLang', fromLang[1])
    data.append('toLang', toLang[1])

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    try{
        const response = await axios.post(backendUrl + '/speechtospeech', data, config)
        setLoading(false)
        console.log(response.data)
    } catch (err) {
        console.error(err)
    }
}
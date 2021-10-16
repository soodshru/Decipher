import axios from 'axios';

export const sendAudio = async (file, setLoading) => {
    setLoading(true)
    let data = new FormData();
    data.append('wavfile', file, file.name);

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    try{
        const response = await axios.post('/api/recorderfiles', data, config)
        setLoading(false)
        console.log(response)
    } catch (err) {
        console.error(err)
    }
}
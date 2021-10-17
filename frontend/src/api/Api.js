import axios from 'axios';

const backendUrl = 'http://127.0.0.1:5000'

export const sendAudio = async (file, setLoading) => {
    setLoading(true)
    let data = new FormData();
    data.append('file', file, file.name);

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    try{
        const response = await axios.post(backendUrl + '/speechtotext', data, config)
        setLoading(false)
        console.log(response)
    } catch (err) {
        console.error(err)
    }
}
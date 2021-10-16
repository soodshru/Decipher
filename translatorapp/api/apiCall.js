import axios from 'axios';

export const goForAxios = (setLoading, setData) => {
    setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            console.log('getting data from axios', response.data);
            setTimeout(() => {
                setLoading(false)
                setData(response.data)
            }, 2000)
        })
        .catch(error => {
            console.log(error);
        });
}
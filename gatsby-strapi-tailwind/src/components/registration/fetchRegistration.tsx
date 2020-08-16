import axios from 'axios';

const fetchRegistration = async () => {
    const results = await axios({
        method: 'GET',
        url: 'http://localhost:1337/registrations',
    })
    return results;
}
export default fetchRegistration;
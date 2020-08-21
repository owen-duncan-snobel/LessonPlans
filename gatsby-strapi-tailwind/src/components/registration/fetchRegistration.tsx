import axios from 'axios';

const fetchRegistration = async () => {
    const results = await axios({
        method: 'GET',
        url: 'http://localhost:1337/registrations',
    })
        .catch(err => {
            console.log(err);
            return err;
        })
    return results;
}
export default fetchRegistration;
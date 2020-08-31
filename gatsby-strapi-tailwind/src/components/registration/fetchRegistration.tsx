import axios from 'axios';

const fetchRegistration = async () => {
    const results = await axios({
        method: 'GET',
        url: 'https://sheltered-thicket-91584.herokuapp.com/registrations',
    })
        .catch(err => {
            console.log(err);
            return err;
        })
    return results;
}
export default fetchRegistration;
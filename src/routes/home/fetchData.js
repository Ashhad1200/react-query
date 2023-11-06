import axios from 'axios';
import { useQuery } from 'react-query';

const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
};

// const useMyDataApi = (data) => {
//     return (
//         useQuery(data, fetchData)
//     );
// };
export default fetchData;   
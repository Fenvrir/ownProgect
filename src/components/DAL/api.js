import * as axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/';
export const postsApi = {
   async getPosts() {
        return await axios.get(baseUrl + 'posts').then(resp =>
            resp.data);
    }
}


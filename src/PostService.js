import { resolve } from "core-js/fn/promise";
import axios from axios;

const url = 'http://localhost:3000/api/posts/';

class PostService {
    static getPosts() {
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                    const data = res.data;
                    resolve(
                        data.map(post => ({
                            ...post,
                            createdAt: new Date(post.createdAt)
                        }))
                    );
                })
                .catch((err) => {
                    reject(err);
                })

        });
    }

    //Create post
    static insertPost(text) {
        return axios.post(url, {
            text
        });

    }


    //Delete post
    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
}
export default PostService;
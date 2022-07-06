import axios from 'axios'

export const getPosts = async() => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const getPostIds = async() => {
    try {
        const posts = await getPosts();
        const paths = posts.map(posts => ({
            params: { id: posts.id.toString() } //convert string || .toString
        }))
        console.log(paths)
        return paths;
    } catch (error) {
        console.log(error)
    }
}

export const getPostById = async(id) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return response.data;
    } catch (error) {
        console.log(error)

    }
}
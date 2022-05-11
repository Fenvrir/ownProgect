import { postsApi } from "../DAL/api";

const GET_POSTS = "GET_POSTS";
const DELETE_POST = "DELETE_POST";
const ADD_POST = "ADD_POST";

const initialState = {
};


const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {...state, posts: [...action.posts]};
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(post => post.id !== action.id ) };
        case ADD_POST:
            const newPost = {
                title: action.title,
                id: Math.random(),
                body: action.body
            }
            return {...state, posts: [...state.posts, newPost]}
        default:
            return state;
    }
};

export const getPosts = (posts) => ({ type: GET_POSTS, posts });
export const deletePost = id => ({ type: DELETE_POST, id });
export const addPost = (title, body) => ({type: ADD_POST, title, body});


export const getPostsThunk = () => {
    return (dispatch) => {  
        postsApi.getPosts().then(response => {
           dispatch(getPosts(response));
        })
    }
}
export default postReducer;
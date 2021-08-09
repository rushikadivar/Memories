import * as api from '../api/index';

// Action Creators
// it's a functions that return a actions

export const getPosts = () => async(dispatch) => {

    try {
        // whatever we're returning from the backend from api it'll be in object format
        const { data } = await api.fetchPost();
        dispatch({ type: 'FETCH_ALL', payload: data} );
    } catch (error) {
        console.log(error.message);        
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE_POST', payload: data });
    } catch (error) {
        console.log(error.message);       
    }
}
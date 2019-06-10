import actionTypes from './actionTypes';

const {
    ADD_COMMENT_TO_POST,
    ADD_POST_TO_TIMELINE,
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_DATA_FAILURE,
    FETCH_PROFILE_DATA_SUCCESS,
    TOGGLE_POST_LIKE,
    TOGGLE_POST_FAV,
    TOGGLE_COMMENT_BUTTON,
    UPDATE_STATUS,
} = actionTypes;

export const setPostUpdateField = text => ({ payload: text, type: UPDATE_STATUS });

// Instead of plain objects, we are returning function.
export const fetchProfileData = () => dispatch => {
    // Dispatching REQUEST action, which tells our app, that we are started requesting todos.
    dispatch({
        type: FETCH_PROFILE_REQUEST,
    });
    return fetch('../../static/data/timelineData.json')
    // Here, we are getting json body from server response
    // And providing `response` and `body` variables to the next chain.
        .then(response => response.json()
            .then(body => ({ body, response })))
        .then(({ response, body }) => {
            if (!response.ok) {
                // If request was failed, dispatching FAILURE action.
                dispatch({
                    error: body.error,
                    type: FETCH_PROFILE_DATA_FAILURE,
                });
            } else {
                // When everything is ok, dispatching SUCCESS action.
                dispatch({
                    timelineData: body,
                    type: FETCH_PROFILE_DATA_SUCCESS,
                });
            }
        });
};

export const handlePostUpdate = payload => ({
    payload,
    type: ADD_POST_TO_TIMELINE,
});

export const handlePostComment = payload => ({
    payload,
    type: ADD_COMMENT_TO_POST,
});

export const likeButtonClicked = payload => ({
    payload,
    type: TOGGLE_POST_LIKE,
});

export const favButtonClicked = payload => ({
    payload,
    type: TOGGLE_POST_FAV,
});

export const commentButtonClicked = payload => ({
    payload,
    type: TOGGLE_COMMENT_BUTTON,
});
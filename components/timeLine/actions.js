import actionTypes from './actionTypes';

const {
    ADD_COMMENT_TO_POST,
    ADD_POST_TO_TIMELINE,
    ADD_POST_TO_TIMELINE_SUCCESS,
    ADD_POST_TO_TIMELINE_FAILURE,
    SET_USERS_PROFILE_SUCCESS,
    SET_USERS_PROFILE_ERROR,
    POST_PROFILE_DATA_TO_DATABASE,
    POST_PROFILE_DATA_TO_DATABASE_SUCCESS,
    POST_PROFILE_DATA_TO_DATABASE_ERROR,
    REQUEST_SET_ONLINE_FRIENDS_ERROR,
    REQUEST_LOAD_ONLINE_FRIENDS_DATA,
    REQUEST_LOAD_USERS_PROFILE,
    REQUEST_SET_ONLINE_FRIENDS_DATA,
    REQUEST_LOAD_TIMELINE_DATA,
    REQUEST_SET_TIMELINE_ERROR,
    REQUEST_SET_TIMELINE_DATA_SUCCESS,
    TOGGLE_FAV_BUTTON_CLICKED,
    TOGGLE_COMMENT_BUTTON_CLICKED,
    TOGGLE_LIKE_BUTTON_CLICKED,
} = actionTypes;

export const loadUsersProfile = payload => ({
    payload,
    type: REQUEST_LOAD_USERS_PROFILE,
});

export const setUsersProfileSuccess = payload => ({
    payload,
    type: SET_USERS_PROFILE_SUCCESS,
});

export const setUsersProfileError = payload => ({
    payload,
    type: SET_USERS_PROFILE_ERROR,
});

export const loadTimeLineData = () => ({
    type: REQUEST_LOAD_TIMELINE_DATA,
});

export const setTimeLineError = payload => ({
    payload,
    type: REQUEST_SET_TIMELINE_ERROR,
});

export const setTimeLineData = payload => ({
    payload,
    type: REQUEST_SET_TIMELINE_DATA_SUCCESS,
});

export const loadOnlineFriendsData = () => ({
    type: REQUEST_LOAD_ONLINE_FRIENDS_DATA,
});

export const setOnlineFriendsError = payload => ({
    payload,
    type: REQUEST_SET_ONLINE_FRIENDS_ERROR,
});

export const setOnlineFriendsData = payload => ({
    payload,
    type: REQUEST_SET_ONLINE_FRIENDS_DATA,
});

export const addPostToTimeline = payload => ({
    payload,
    type: ADD_POST_TO_TIMELINE,
});

export const addPostToTimelineSuccess = payload => ({
    payload,
    type: ADD_POST_TO_TIMELINE_SUCCESS,
});

export const addPostToTimelineFailure = payload => ({
    payload,
    type: ADD_POST_TO_TIMELINE_FAILURE,
});

export const handlePostComment = payload => ({
    payload,
    type: ADD_COMMENT_TO_POST,
});

export const likeButtonClicked = payload => ({
    payload,
    type: TOGGLE_LIKE_BUTTON_CLICKED,
});

export const favButtonClicked = payload => ({
    payload,
    type: TOGGLE_FAV_BUTTON_CLICKED,
});

export const commentButtonClicked = payload => ({
    payload,
    type: TOGGLE_COMMENT_BUTTON_CLICKED,
});

export const postProfileDataToDatabase = payload => ({
    payload,
    type: POST_PROFILE_DATA_TO_DATABASE,
});

export const postProfileDataToDatabaseSuccess = payload => ({
    payload,
    type: POST_PROFILE_DATA_TO_DATABASE_SUCCESS,
});

export const postProfileDataToDatabaseError = payload => ({
    payload,
    type: POST_PROFILE_DATA_TO_DATABASE_ERROR,
});

import axios from "axios";
import * as types from "../types/types";
import * as config from "../constants/constants";

export const getAllTweets = () => dispatch => {
  dispatch({
    type: types.IS_LOADING_ALL,
  });
  return axios
    .get(`${config.APP_URL_PROD}/tweets`, {
      headers: {
        Authorization: localStorage.getItem("bt"),
        access_token: localStorage.getItem("at"),
        access_secret: localStorage.getItem("ats"),
      },
    })
    .then(res => {
      return dispatch({
        type: types.LOAD_ALL_TWEETS,
        payload: res.data.data,
      });
    })
    .catch(error => {
      return dispatch({
        type: types.SERVER_FAILED_TO_RESPOND,
        payload: "Please try again later",
      });
    });
};

export const getSingleTweet = id => dispatch => {
  dispatch({
    type: types.IS_LOADING_SINGLE,
  });
  return axios
    .get(`${config.APP_URL_PROD}/tweet/${id}`, {
      headers: {
        Authorization: localStorage.getItem("bt"),
      },
    })
    .then(res => {
      return dispatch({
        type: types.LOAD_SINGLE_TWEET,
        payload: res.data.data,
      });
    })
    .catch(error => {
      return dispatch({
        type: types.SERVER_FAILED_TO_RESPOND,
        payload: "please try again later",
      });
    });
};

export const replyTweet = (payload, notify) => dispatch => {
  dispatch({
    type: types.IS_LOADING_REPLY,
  });
  return axios
    .post(`${config.APP_URL_PROD}/tweets`, payload, {
      headers: {
        Authorization: localStorage.getItem("bt"),
        access_token: localStorage.getItem("at"),
        access_secret: localStorage.getItem("ats"),
      },
    })
    .then(res => {
      notify();
      return dispatch({
        type: types.REPLY_TO_TWEET,
        payload: res.data.data,
      });
    })
    .catch(error => {
      return dispatch({
        type: types.SERVER_FAILED_TO_RESPOND,
        payload: "Please try again later",
      });
    });
};

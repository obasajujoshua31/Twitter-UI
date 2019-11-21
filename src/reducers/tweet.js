import * as types from "../types/types";
import initState from "./initState";

export default (state = initState, action) => {
  switch (action.type) {
    case types.IS_LOADING_SINGLE:
      return { ...state, isLoadingSingle: true, replyTweetStatus: false };

    case types.IS_LOADING_ALL:
      return { ...state, isLoadingAll: true };

    case types.LOAD_ALL_TWEETS:
      return {
        ...state,
        isLoadingAll: false,
        tweets: action.payload,
        replyTweetStatus: false,
      };

    case types.LOAD_SINGLE_TWEET:
      return {
        ...state,
        isLoadingSingle: false,
        tweet: action.payload,
        replyTweetStatus: false,
      };

    case types.REPLY_TO_TWEET:
      return {
        ...state,
        isLoadingReply: false,
        replyTweetStatus: true,
        replyiedTweet: [...state.replyiedTweet, action.payload],
      };

    case types.SERVER_FAILED_TO_RESPOND:
      return {
        ...state,
        isLoadingAll: false,
        isLoadingSingle: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

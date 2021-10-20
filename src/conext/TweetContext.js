import React from "react";

var TweetStateContext = React.createContext();
var TweetDispatchContext = React.createContext();

function tweetReducer(state, action) {
  switch (action.type) {
    case "SET_TWEET_TEXT":
      return {...state, tweetText: action.paylod};
    case "SET_TWEET_LIST":
      return {...state, tweetList: action.paylod};
    case "LIKE_TWEET":
      const tweetId = action.paylod;
      const foundIndex = state.tweetList.findIndex(item => item._id === tweetId)
      if(foundIndex === -1)
        return state
      return {...state, tweetList: [...state.tweetList.slice(0,foundIndex),{...state.tweetList[foundIndex], likes : state.tweetList[foundIndex].likes+1 },...state.tweetList.slice(foundIndex+1)]};
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function TweetProvider({children}) {
  var [state, dispatch] = React.useReducer(tweetReducer, {
    tweetText: "",
    tweetList: [],
  });
  return (
    <TweetStateContext.Provider value={state}>
      <TweetDispatchContext.Provider value={dispatch}>
        {children}
      </TweetDispatchContext.Provider>
    </TweetStateContext.Provider>
  );
}

function useTweetState() {
  var context = React.useContext(TweetStateContext);
  if (context === undefined) {
    throw new Error("useTweetState must be used within a TweetProvider");
  }
  return context;
}

function useTweetDispatch() {
  var context = React.useContext(TweetDispatchContext);
  if (context === undefined) {
    throw new Error("useTweetDispatch must be used within a TweetProvider");
  }
  return context;
}

export {TweetProvider, useTweetState, useTweetDispatch, setTweetText, setTweetList, likeTweet};

// ###########################################################
function setTweetText(dispatch,tweetText) {
  dispatch({
    type: "SET_TWEET_TEXT",
    paylod: tweetText
  });
}
function setTweetList(dispatch,tweetList) {
  dispatch({
    type: "SET_TWEET_LIST",
    paylod: tweetList
  });
}
function likeTweet(dispatch,id) {
  dispatch({
    type: "LIKE_TWEET",
    paylod: id
  });
}



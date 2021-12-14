import axious from "axious";

const initState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};
const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};
///ACtion CREATOR object that describes what will happen
//Redux thunk - enables asynchronous data fetching
const fetchGames = (userData) => {
  axio;
  return {
    type: "FETCH_GAMES",
    payload: userData,
  };
};
export default gamesReducer;

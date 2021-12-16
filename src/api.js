//Base URL
const base_url = "https://api.rawg.io/api/";
const api_key = "key=faed85b8d5414975b6b944c4a801cac2";
//Getting the dates
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate() + 1;
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth - 1}-${currentDay - 1}`;
const nextYear = `${currentYear + 1}-${
  currentMonth + 1 > 12 ? `01` : currentMonth + 1
}-${currentDay}`;

//Popular games
const popular_games = `games?${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
//Game details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?${api_key}`;
//Game Schreenshots
export const gameScreenshotsURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?${api_key}`;

//Searched games
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&${api_key}&page_size=9`;

//Base URL
const base_url = "https://api.rawg.io/api/";
const api_key = "?key=faed85b8d5414975b6b944c4a801cac2";
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
const lastYear = `${currentYear - 1}-${currentMonth - 1}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth + 1}-${currentDay}`;

//Popular games
const popular_games = `games${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
console.log(popularGamesURL());

// https://api.rawg.io/api/games?key=faed85b8d5414975b6b944c4a801cac2&dates=2019-09-01,2019-09-30&ordering=-rating&page_size=10
// https://api.rawg.io/api/games?key=faed85b8d5414975b6b944c4a801cac2?dates=2020-11-14,2021-12-14&ordering=-rating&page_size=10
// https://api.rawg.io/api/games?key=faed85b8d5414975b6b944c4a801cac2?dates=2019-09-01,2019-09-30&ordering=-rating&page_size=10
// https://api.rawg.io/api/games?key=faed85b8d5414975b6b944c4a801cac2&dates=2019-09-01,2019-09-30&ordering=-rating&page_size=10

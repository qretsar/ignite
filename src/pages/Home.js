import React, { useEffect } from "react";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
//STYLING and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

//router
import { useLocation } from "react-router-dom";

//Main Function
const Home = (params) => {
  //get the current useLocation
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(pathId);

  //FETCH GAMES_ACTION
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get that data background
  const { newGames, popular, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      {pathId && <GameDetail />}
      {searched.length ? (
        <div className="searched">
          <h2>Searched Games </h2>
          <Games>
            {searched.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </Games>
        </div>
      ) : (
        ""
      )}
      <h2>Upcoming Games </h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  place-items: center;
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

//
//default export
export default Home;

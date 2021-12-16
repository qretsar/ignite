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
import { fadeIn, lineAnim } from "../animations";
//router
import { useLocation } from "react-router-dom";

//Main Function
const Home = (params) => {
  //get the current useLocation
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

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
          <MotionLine />
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
      <h2>Upcoming Games</h2>
      <MotionLine variants={lineAnim} initial="hidden" animate="show" />
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
      <MotionLine variants={lineAnim} initial="hidden" animate="show" />
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
      <MotionLine variants={lineAnim} initial="hidden" animate="show" />
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
    padding: 3rem 0rem 1rem 0rem;
    text-align: center;
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
const MotionLine = styled(motion.div)`
  width: 100%;
  height: 1vh;
  background: #027199a2;
  margin-bottom: 1rem;
  border-radius: 1rem;
`;
//
//default export
export default Home;

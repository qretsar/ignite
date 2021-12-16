import React from "react";
//STYLING and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, popup } from "../animations";

//REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
//router
import { Link } from "react-router-dom";
import { smallImage } from "../util";
const Game = ({ name, released, image, id }) => {
  console.log(`${image === null}`);
  //Load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        {/* <img src={smallImage(image, 1280)} alt={name} /> */}
        {image ? (
          <img src={smallImage(image, 1280)} alt={name} />
        ) : (
          <img src={image} alt={name} />
        )}
      </Link>
    </StyledGame>
  );
};
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  /* padding: 0.1rem; */
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;

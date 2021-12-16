import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
import logo from "../img/logo.svg";
//REDUX AND ROUTES
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const { searched } = useSelector((state) => state.games);

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput(" ");
  };
  // dispatch()
  const clearSearched = () => {
    dispatch({
      type: "CLEAR_SEARCHED",
    });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>

      <StyledForm className="search">
        {searched.length ? (
          <button onClick={clearSearched}>CLEAR SEARCH</button>
        ) : (
          ""
        )}

        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </StyledForm>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  position: sticky;
  display: flex;
  /* flex-direction: row; */
  justify-content: space-around;
  /* align-items: center; */
  top: 0;
  padding: 0.5rem 0rem;
  /* text-align: center; */
  background-color: rgb(75, 159, 189);
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 0.5rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #027199;
    color: white;
  }
  h1 {
    color: white;
  }
`;
const Logo = styled(motion.nav)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem;
  cursor: pointer;
  img {
    flex: 1;
    height: 2rem;
    width: 2rem;
    filter: invert(96%) sepia(27%) saturate(450033%) hue-rotate(0deg)
      brightness(80%) contrast(118%);
  }
`;
const StyledForm = styled(motion.form)`
  width: 50%;
  justify-content: flex-start;
  flex: 2;
`;
export default Nav;

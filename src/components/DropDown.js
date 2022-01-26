import React from "react";
import styled, { css } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { MenuData } from "../data/MenuData";
import { Link } from "react-router-dom";

const DropDown = ({ isOpen, toggle }) => {
  return (
    <DropDwonContainer isOpen={isOpen}>
      <Icon>
        <IconButton onClick={toggle}>
          <ClosedIcon />
        </IconButton>
      </Icon>
      <DropDownWraper>
        <DropDownMenu>
          {MenuData.map((item, index) => (
            <DropDownLink to={item.link} key={index}>
              {item.title}
            </DropDownLink>
          ))}
        </DropDownMenu>
        <BtnWrap>
          <button to="/contact">ContactUs</button>
        </BtnWrap>
      </DropDownWraper>
    </DropDwonContainer>
  );
};

const DropDwonContainer = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transform: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.7s ease-in-out;
`;
const Icon = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  background: transparent;
  cursor: pointer;
  outline: none;
`;
const ClosedIcon = styled(CloseIcon)`
  color: #000d1a;
`;
const DropDownWraper = styled.div``;
const DropDownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  transition: 0.5s ease-in-out;

  @media (max-width: 768px) {
    grid-template-rows: repeat(4, 60px);
    transition: 0.5s ease-in-out;
  }
`;
const DropDownLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  text-decoration: none;
  color: #fff;
  list-style: none;
  cursor: pointer;

  &:hover {
    color: #000d1a;
  }
`;
const BtnWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;

  button {
    background: transparent;
    width: 200px;
    height: 40px;
    border: none;
    color: black;
    background-color: lightgray;
    border-radius: 10px;
    font-size: 15px;
    cursor: pointer;
  }
`;

export default DropDown;

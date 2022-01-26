import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuData } from "../data/MenuData";

const Navbar = ({ toggle }) => {
  return (
    <Container>
      <Content>
        <Logo>ELIXR</Logo>
        <MenuBars onClick={toggle}>
          <img src="/images/menu.png" alt="" />
        </MenuBars>
        <NavMenu>
          {MenuData.map((item, index) => (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          ))}
        </NavMenu>
        <NavBtn>
          <button to="/contact">ContactUs</button>
        </NavBtn>
      </Content>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

const Content = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
  padding: 15px 20px;
  position: fixed;
  z-index: 100;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.a`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 600;
  font-style: bold;
  font-size: 20px;
`;

const MenuBars = styled.div`
  display: none;

  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: white;
  }

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-size: contain;

    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);

    &:hover {
      color: violet;
      transition: 0.2s ease-in-out;
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -35px;
  justify-content: end;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  text-decoration: none;
  color: #fff;
  flex-direction: row;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
`;
const NavBtn = styled.div`
  margin-right: 10px;
  max-width: 200px;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }

  button {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    color: black;
    background-color: lightgray;
    border-radius: 10px;
    font-size: 15px;
    cursor: pointer;
  }
`;

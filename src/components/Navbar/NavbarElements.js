import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { VscHome } from "react-icons/vsc";

export const Nav = styled.nav`
  background: #2c7056;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc ((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-item: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
`;

export const Bars = styled(VscHome)`
  display: none;
  color: #fff;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  color: white;
`;

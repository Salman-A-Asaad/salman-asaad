import React, { useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { SlClose } from "react-icons/sl";
import styled from "styled-components";
import { bodyColor, firstColor } from "../Style";
import { Link } from "react-scroll";
import { links } from "../assets/data/data";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const closeRef = useRef();
  return (
    <Nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <Link
          style={{ cursor: "pointer" }}
          smooth={true}
          duration={500}
          to="home"
          className="navbar-brand text-light"
        >
          <span className="fw-bold" style={{ color: firstColor }}>
            {"<"}
          </span>{" "}
          Salman <span style={{ color: firstColor }}>Asaad</span>
          <span className="fw-bold">{" />"}</span>
        </Link>
        <Barbutton
          ref={closeRef}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShow(!show)}
        >
          <BarIcon style={{ color: show ? firstColor : "" }}>
            {show === false ? <FaBars /> : <SlClose />}
          </BarIcon>
        </Barbutton>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((ele, index) => {
              return (
                <ListItem key={index} className="nav-item">
                  <Link
                    className="nav-link text-capitalize"
                    smooth={true}
                    duration={500}
                    to={ele.link}
                    onClick={() => {
                      closeRef.current.click();
                    }}
                  >
                    {ele.pageName}
                  </Link>
                </ListItem>
              );
            })}
          </ul>
        </div>
      </div>
    </Nav>
  );
};
const Barbutton = styled.button`
  transition: all 1s;
  border: none;
  outline: none;
  box-shadow: none;
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
`;
const BarIcon = styled.span`
  transition: all 0.5s;
  color: white;
`;
const Nav = styled.nav`
  background-color: ${bodyColor};
`;
const ListItem = styled.li`
  margin-left: 15px;
  position: relative;
  transition: all 0.5s;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 0%;
    background-color: white;
    transition: all 0.5s;
  }
  a {
    color: white;
    transition: all 0.5s;
    cursor: pointer;
  }
  a:hover {
    color: ${firstColor};
  }
  &:hover::before {
    width: 100%;
  }
  @media (max-width: 991px) {
    margin-left: 0;
    margin: auto;
  }
`;
export default Navbar;

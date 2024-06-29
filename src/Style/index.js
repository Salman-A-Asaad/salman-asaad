import styled from "styled-components";
const hue = 163;
const firstColor = `hsl(${hue}, 100%, 40%)`;
const firstColorAlt = `hsl(${hue}, 56%, 35%)`;
const titleColor = `hsl(228, 8%, 95%)`;
const textColor = `hsl(228, 8%, 65%)`;
const bodyColor = `hsl(228, 15%, 20%)`;
const containerColor = `hsl(228, 15%, 15%)`;
const ContainerBody = styled.div`
  background-color: ${bodyColor};
`;
const Container = styled.div`
  background-color: ${containerColor};
`;
const Links = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 12px;
`;
const Link = styled.a`
  text-decoration: none;
  background-color: ${firstColor};
  color: white;
  padding: 10px;
  font-size: 25px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.5s;
  &:hover {
    color: white;
    transform: translateY(-8px);
  }
  @media (max-width: 320px) {
    width: 35px;
    height: 35px;
  }
  cursor: pointer;
`;
const ButtonA = styled.button`
  width: fit-content;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: ${firstColor};
  border: none;
  outline: none;
  transition: all 0.5s;
  a {
    color: white;
    text-transform: capitalize;
    text-decoration: none;
  }
  &:hover {
    box-shadow: ${firstColorAlt} 0px 5px 15px;
  }
  @media (max-width: 320px) {
    padding: 7px 12px;
  }
`;
const Button = styled(ButtonA)`
  text-transform: capitalize;
  color: white;
`;
const Text = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
  h4 {
    text-transform: capitalize;
    font-size: 1.4rem;
  }
  h3 {
    text-transform: capitalize;
    font-size: 2rem;
  }
  p {
    color: ${textColor};
    font-size: 0.9rem;
    width: 70%;
  }
  @media (max-width: 767px) {
    align-items: center;
    justify-content: center;
    p {
      width: 100%;
      text-align: center;
    }
  }
  @media (max-width: 320px) {
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1rem;
    }
    p {
      font-size: 0.7rem;
    }
    @media (max-width: 767px) {
      align-items: center;
      justify-content: center;
    }
  }
`;
const Header = styled.div`
  padding-top: 10px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  * {
    text-transform: capitalize;
  }
  h5 {
    font-size: 1.4rem;
  }
  h4 {
    font-size: 2rem;
  }
  @media (max-width: 320px) {
    h4 {
      font-size: 1.5rem;
    }
    h5 {
      font-size: 1rem;
    }
  }
`;
export {
  firstColor,
  firstColorAlt,
  titleColor,
  textColor,
  bodyColor,
  containerColor,
  Links,
  Link,
  ButtonA,
  Button,
  ContainerBody,
  Container,
  Text,
  Header,
};

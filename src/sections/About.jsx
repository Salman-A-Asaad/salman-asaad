import React from "react";
import styled from "styled-components";
import meImage from "../assets/img/me-2.JPG";
import { firstColor, Container, Button, Text } from "../Style";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const About = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <Container id="about" className="py-5">
      <div style={{ overflow: "hidden" }} className="container">
        <div ref={ref} className="row row-gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
            transition={{ duration: 0.5 }}
            className="col-md-6 col-lg-6"
          >
            <div
              style={{ padding: "15px 0" }}
              className="d-flex align-items-center justify-content-center"
            >
              <ImageContainer>
                <Image loading="lazy" src={meImage} alt="me" />
              </ImageContainer>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.5 }}
            className="col-md-6 col-lg-6"
          >
            <Text style={{ padding: "15px 0" }}>
              <h4>
                my <span style={{ color: firstColor }}>intro</span>
              </h4>
              <h3>about me</h3>
              <p>
                Graduate with top honors in Information Technology Engineering
                seeking a challenging position as a Frontend Developer to
                leverage skills in software development and contribute to
                innovative projects.
              </p>
              <Button>
                <Link smooth={true} duration={500} to="contact">
                  contact me
                </Link>
              </Button>
            </Text>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};
const ImageContainer = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 80px;
    height: 80px;
    background-color: ${firstColor};
    top: -10px;
    left: -10px;
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    width: 80px;
    height: 80px;
    background-color: ${firstColor};
    bottom: -10px;
    right: -10px;
    z-index: 1;
  }
`;
const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-bottom-left-radius: 35px;
  border-top-right-radius: 35px;
  position: relative;
  z-index: 2;
  @media (min-width: 375px) and (max-width: 991px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 374px) {
    width: 250px;
    height: 250px;
  }
`;

export default About;

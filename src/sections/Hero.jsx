import React from "react";
import meImage from "../assets/img/me.jpg";
import styled, { keyframes } from "styled-components";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  bodyColor,
  firstColor,
  textColor,
  Links,
  Link,
  ButtonA,
} from "../Style";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <Container className="py-3 py-sm-5 py-md-5 py-lg-5">
      <div className="container">
        <div ref={ref} className="row row-gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.5 }}
            className="col-md-6 col-lg-6"
          >
            {inView && (
              <Text>
                <h3>
                  Hello, <span style={{ color: firstColor }}>I'm</span>
                </h3>
                <h2>salman asaad</h2>
                <h3>front-end developer</h3>
                <p>
                  With knowledge in web development and design, I offer the best
                  projects resulting in quality work.
                </p>
                <ButtonA>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://wa.me/0988514601"
                  >
                    let's talk
                  </a>
                </ButtonA>
                <Links>
                  <Link
                    target="_blank"
                    href="https://github.com/Salman-A-Asaad"
                  >
                    <FiGithub />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/salman-asaad"
                  >
                    <CiLinkedin />
                  </Link>
                </Links>
              </Text>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="col-md-6 col-lg-6"
          >
            <ImageContainer>
              <AnimatedImageContainer
                style={{
                  animation: `moving 5s infinite`,
                }}
              >
                <AnimatedImage loading="lazy" src={meImage} alt="me" />
              </AnimatedImageContainer>
            </ImageContainer>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${bodyColor};
`;

const Text = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
  h2 {
    text-transform: capitalize;
    color: ${firstColor};
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
    text-transform: capitalize;
  }
  p {
    font-size: 0.8rem;
    width: 70%;
    color: ${textColor};
  }
  @media (max-width: 767px) {
    align-items: center;
    justify-content: center;
    p {
      width: 100%;
      text-align: center;
    }
  }
  @media (min-width: 320px) and (max-width: 400px) {
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 321px) and (max-width: 340px) {
    h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 320px) {
    h2 {
      font-size: 1.5rem;
    }
    h3 {
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

const movingAnimation = keyframes`
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${movingAnimation} 5s infinite;
`;

const AnimatedImageContainer = styled.div`
  animation: ${movingAnimation} 5s infinite;
`;

const AnimatedImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  padding: 10px;
  border: 3px solid ${firstColor};
  animation: ${movingAnimation} 5s infinite;
  @media (min-width: 375px) and (max-width: 991px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 374px) {
    width: 250px;
    height: 250px;
  }
`;

export default Hero;

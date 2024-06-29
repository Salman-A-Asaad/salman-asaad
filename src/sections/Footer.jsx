import React, { useCallback } from "react";
import styled from "styled-components";
import {
  firstColor,
  textColor,
  Links,
  Link,
  ContainerBody as Container,
} from "../Style";
import { TbFileCv } from "react-icons/tb";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cv from "../assets/pdf/Salman-Asaad.pdf";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Salman Asaad Resume.pdf";
    link.click();
  }, []);
  return (
    <Container className="py-5">
      <div style={{ overflow: "hidden" }} className="container">
        <div ref={ref} className="row row-gap-4">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.5 }}
            className="col-md-6 col-lg-4"
          >
            {" "}
            <Header>
              <h4>
                salman <span style={{ color: firstColor }}>asaad</span>
              </h4>
              <h5>front-end developer</h5>
            </Header>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.6 }}
            className="col-md-6 col-lg-4"
          >
            <Links className="d-flex align-items-lg-center justify-content-center">
              <Link
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100010923374122"
              >
                <FaFacebook />
              </Link>
              <Link href="mailto:salman.abdulaziz.asaad@gmail.com">
                <MdEmail />
              </Link>
              <Link onClick={handleDownload}>
                <TbFileCv />
              </Link>
            </Links>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.7 }}
            className="col-md-12 col-lg-4"
          >
            <div
              style={{ color: textColor, height: "100%" }}
              className="d-flex align-items-center justify-content-center"
            >
              &copy; {new Date().getFullYear()}. All rights reserved.
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

const Header = styled.div`
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
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
    @media (min-width: 426px) {
      text-align: start;
    }
  }
  h4 {
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    @media (min-width: 426px) {
      text-align: start;
    }
  }
`;
export default Footer;

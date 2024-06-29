import React from "react";
import styled from "styled-components";
import { bodyColor, firstColor, textColor, Container, Header } from "../Style";
import { services } from "../assets/data/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <Container id="services" className="py-5">
      <div style={{ overflow: "hidden" }} ref={ref} className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          <Header>
            <h5>
              my <span style={{ color: firstColor }}>services</span>
            </h5>
            <h4>what i do</h4>
          </Header>
        </motion.div>
        <div className="row">
          {services.map((ele, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.4 }}
                transition={{ duration: 0.6 }}
                key={index}
                className="col-md-4 col-lg-4"
              >
                <Service>
                  <span>{ele.icon}</span>
                  <h5>{ele.title}</h5>
                  <p>{ele.sub}</p>
                </Service>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
const Service = styled.div`
  min-height: 300px;
  box-shadow: ${firstColor} 0px 2px 8px 0px;
  margin-top: 20px;
  background-color: ${bodyColor};
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  span {
    font-size: 50px;
    color: ${firstColor};
  }
  h5 {
    color: white;
    text-transform: capitalize;
    font-size: 1.5rem;
  }
  p {
    color: ${textColor};
    letter-spacing: 1.5px;
    font-size: 0.9rem;
  }
  @media (max-width: 320px) {
    h5 {
      font-size: 1rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
  @media (min-width: 767px) and (max-width: 991px) {
    min-height: 340px;
  }
  &:last-of-type {
    margin-bottom: 10px;
  }
`;
export default Services;

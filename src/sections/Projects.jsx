import React from "react";
import styled from "styled-components";
import {
  firstColor,
  firstColorAlt,
  ContainerBody as Container,
  Header,
} from "../Style";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { projects } from "../assets/data/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <Container id="projects" className="py-5">
      <div style={{ overflow: "hidden" }} ref={ref} className="container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 0.5 }}
        >
          <Header>
            <h5>
              my <span style={{ color: firstColor }}>jops</span>
            </h5>
            <h4>recent projects</h4>
          </Header>
        </motion.div>
        <div className="row">
          {projects.map((ele, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.4 }}
                transition={{ duration: 0.7 }}
                key={index}
                className="col-md-6 col-lg-4"
              >
                <Project>
                  <img
                    style={{
                      objectPosition: ele.title === "Snapgram" ? "left" : "",
                    }}
                    loading="lazy"
                    src={ele.img}
                    alt={ele.title}
                  />
                  <div>
                    <h5>web</h5>
                    <h4>{ele.title} website</h4>
                    <span>
                      view demo{" "}
                      <a rel="noreferrer" target="_blank" href={ele.demo}>
                        <FaExternalLinkAlt />
                      </a>
                    </span>
                    <span>
                      view github{" "}
                      <a rel="noreferrer" target="_blank" href={ele.git}>
                        <FaExternalLinkAlt />
                      </a>
                    </span>
                  </div>
                  <span className="info">
                    <BsFillInfoSquareFill />
                  </span>
                </Project>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

const Project = styled.div`
  box-shadow: white 0px 1px 2px 0px;
  cursor: pointer;
  margin-top: 20px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  img {
    width: 100%;
    height: 340px;
    object-fit: cover;
    object-position: top;
  }
  div {
    transition: all 0.5s;
    position: absolute;
    top: 150%;
    left: 50%;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(8, 39, 141, 1) 0%,
      rgba(8, 7, 104, 0.989233193277311) 0%,
      rgba(9, 9, 121, 1) 0%,
      rgba(0, 204, 144, 1) 0%,
      rgba(0, 204, 148, 0.6699054621848739) 0%,
      rgba(0, 195, 243, 0) 100%,
      rgba(0, 202, 248, 1) 100%,
      rgba(0, 212, 255, 1) 100%
    );
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    text-transform: capitalize;
    span {
      a {
        color: white;
        font-size: 18px;
        margin-left: 8px;
        transition: all 0.5s;
        &:hover {
          box-shadow: ${firstColorAlt} 0px 5px 15px;
        }
      }
    }
  }
  .info {
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 10px;
    color: ${firstColor};
    font-size: 20px;
    transition: all 0.5s;
    &:hover {
      transform: translateY(-3px);
    }
  }
  &:hover {
    div {
      top: 50%;
    }
  }
  &:last-of-type {
    margin-bottom: 10px;
  }
`;
export default Projects;

import React from "react";
import { firstColor, ContainerBody as Container, Button, Text } from "../Style";
import { Link } from "react-scroll";
import { skills } from "../assets/data/data";
const Skills = () => {
  return (
    <Container className="py-5">
      <div style={{ overflow: "hidden" }} className="container">
        <div className="row row-gap-4">
          <div className="col-md-6 col-lg-6">
            <Text>
              <h4>
                favorite <span style={{ color: firstColor }}>skills</span>
              </h4>
              <h3>my skills</h3>
              <p>
                See fully what skills I have and perform, to develop the
                projects for you.
              </p>
              <Button>
                <Link smooth={true} duration={500} to="projects">
                  see projects
                </Link>
              </Button>
            </Text>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="row ">
              {skills.map((ele, index) => {
                return (
                  <div key={index} className="col-lg-3 col-md-6 col-6">
                    <div>
                      {ele.map((ele, index) => {
                        return (
                          <h5
                            title={ele[0]}
                            key={index}
                            style={{
                              color: "white",
                              marginBottom: "15px",
                              fontSize: "0.9rem",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                            }}
                          >
                            <span
                              style={{
                                color: firstColor,
                                fontSize: "1.5rem",
                                marginRight: "5px",
                              }}
                            >
                              {ele[1]}
                            </span>
                            {ele[0]}
                          </h5>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;

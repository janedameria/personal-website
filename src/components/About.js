import React from "react";
import styled from "styled-components";
import icon from "../me sketch.png";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify_center && "center"};
  align-items: center;
  margin: 1em;
`;

const ContainerIcon = styled.div`
  color: #fbfbfb;
  margin-top: 1em;

  > * {
    margin: 0 0.3em;
    color: #99cdb5;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;

const MyImage = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 5%;
  margin: 1em;

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const About = () => {
  return (
    <Container>
      <ContainerColumn justify_center>
        <h1 className="main-title">John Doe</h1>
        <p className="text">
          I’m a fresh graduate from University. I have a great interest in
          software engineering and web development.
        </p>
        <ContainerIcon>
          <a
            href="https://www.linkedin.com/in/jennifer-dameria/"
            target={"_blank"}
          >
            <ImLinkedin size={"1.3em"} />
          </a>
          <a href="mailto:jenniferhutabarat@gmail.com">
            <HiOutlineMail size={"1.3em"}></HiOutlineMail>
          </a>
          <a href="https://github.com/janedameria" target={"_blank"}>
            <BsGithub size={"1.3em"} />
          </a>
        </ContainerIcon>
      </ContainerColumn>

      <MyImage src={icon} />
    </Container>
  );
};

export default About;

import React from "react";
import styled from "styled-components";
import { HiBadgeCheck } from "react-icons/hi";
import TrackVisibility from "react-on-screen";
import { motion } from "framer-motion";
import { Heading1 } from "../../types/typography";

const MainBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5%;
  background: #fff;
  padding: 5%;
  border-radius: 2rem;
  border: 1px solid transparent;
  ul {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
  }
  @media screen and (max-width: 120vh) {
    grid-template-columns: 1fr;
  }
`;

const BoxPart = styled.div`
  background: #3553;
  margin: 5%;
  padding: 2.4rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: 1.5s;
  gap: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #407388;
    cursor: default;
    opacity: 0.8;
  }
`;

export const UpperBox = styled.div`
  background: #fff;
  border-radius: 1rem;
  text-align: center;
`;

const Leftcontainer = {
  hidden: { opacity: 0, y: -2500 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.5,
      duration: 2,
    },
  },
};

const Rightcontainer = {
  hidden: { opacity: 0, y: 2500 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.5,
      duration: 2,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Tools = () => {
  return (
    <TrackVisibility once>
      {({ isVisible }) =>
        isVisible ? (
          <motion.div
            initial={{ x: -2500 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
          >
            <MainBox>
              <motion.ul
                variants={Leftcontainer}
                initial="hidden"
                animate="show"
              >
                <BoxPart>
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Figma",
                  ].map((index) => (
                    <motion.li key={index} variants={listItem}>
                      <article className="experience_details">
                        <HiBadgeCheck />
                        <h4>{index}</h4>
                        <small className="text-light"> Experienced </small>
                      </article>
                    </motion.li>
                  ))}
                </BoxPart>
              </motion.ul>
              {/* tässä vaihtuu boksi backendiin */}
              <motion.ul
                variants={Rightcontainer}
                initial="hidden"
                animate="show"
              >
                <BoxPart>
                  {[
                    "Node js",
                    "MySql",
                    "Heroku",
                    "Deno",
                    "Scala",
                    "Docker",
                  ].map((index) => (
                    <motion.li key={index} variants={listItem}>
                      <article className="experience_details">
                        <HiBadgeCheck />
                        <h4>{index}</h4>
                        <small className="text-light"> Experienced </small>
                      </article>
                    </motion.li>
                  ))}
                </BoxPart>
              </motion.ul>
            </MainBox>
          </motion.div>
        ) : (
          <div className="placeholder" />
        )
      }
    </TrackVisibility>
  );
};

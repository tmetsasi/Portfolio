import React from "react";
import styled from "styled-components";
import { HiBadgeCheck } from "react-icons/hi";
import TrackVisibility from "react-on-screen";
import { motion } from "framer-motion";

const MainBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: #fff;
  padding: 2.4rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  ul {
    list-style-type: none;
  }
`;

const BoxPart = styled.div`
  background: #3553;
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
  @media screen and (max-width: 90vh) {
    gap: 1rem;
    width: 100%;
    padding: 2rem;
    display: block;
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
    <TrackVisibility>
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

import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
export const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "yellow", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Foami yhteystiedot
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Yhteystiedot</Heading>
            <FooterLink href="#">Tomas Metsä-Simola</FooterLink>
            <FooterLink href="#">Luukas Kumpulainen</FooterLink>
          </Column>
          <Column>
            <Heading>Jotain lisää ehkä</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
          </Column>
          <Column>
            <Heading>Yritystiedot</Heading>
            <FooterLink href="#">
              <i className="fab fa-Foami OY-f">
                <span style={{ marginLeft: "10px" }}>
                  Foami OY
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
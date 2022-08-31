import styled from 'styled-components';
import React from 'react';
   
const Box = styled.div`
  padding: 50px;
  background: #203942;
  position: relative;
  bottom: 0;
  width: 100%;
  @media (max-width: 1000px) {
    padding: 80px;
  }
`;
   
const Heading = styled.p`
  text-align: center;
  font-size: 24px;
  color: #fff;
  margin-bottom: 4vh;
  font-weight: lighter;
`;

const FooterPic = styled.img`
  height: 30%;
  width: 30%;
`;

const TextChapter = styled.p`
  font-style: italic;
  font-weight: normal;
  text-align: center;
  font-size: 20px;
  color: #fff;
  margin-bottom: 5vh;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20%;
   
  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 5vh;
  color: #fff;
  font-style: italic;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
    
`;

export const Footer = () => {
  return (
    <Box>
     <FooterPic src={'/images/HeaderLogo.png'}/>
      <Heading> Yhteystiedot</Heading>
      <TextChapter>foamioy@outlook.com</TextChapter>
      <Container> 
        <Row>
         <Column> 
         Tomas Metsä-Simola 9253053523
         <br/>
         Luukas Kumpulainen 9348693468 
         </Column>
          <Column> 
          Osoitetietoja: 
          <br/>
          Takomotie 14 C 36 <br/> 00380 Helsinki 
          </Column>
          <Column> 
          Yritystiedot: <br/>
          Foami OY <br/>
          Y-2664624
          <br/>
          </Column>
         </Row>
      </Container>
    </Box>
  );
};
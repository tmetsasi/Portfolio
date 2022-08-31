import { React, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Area = styled.div`
width: 40%;
height: 60%;
position: absolute;
background-color: blue;
`;
const Formi = styled.form`
 background: #407388;
 position: absolute;
 left: 64%;
 top: 19%;
 background-color: #407388;
 width: 34vw;
 height: 34vw;
 font-size: 2vw;
 
`;

const Name = styled.input`
    width: 15vw;
    border: 0;
    border-radius: 1rem;
    height: 4vw;
`;

const Boxi = styled.div`
  padding: 0.5rem;
`;

const Maili = styled.input`
    border: 0;
    border-radius: 1rem;
    width: 20vw;
    height: 4vw;
`;


const EmailPut = styled.input`

`;

const Message = styled.input`

`;

const MessageArea = styled.textarea`
    border: 0;
    border-radius: 1rem;
    width: 25vw;
    height: 4vw;
`;

const SubmitPut = styled.button`
    border: 0;
    border-radius: 1rem;
    height: 4vw;
    cursor: pointer;
    
`;

const Butti = styled.div`
  background-color: yellow;
  width: 5vw;
  height: 5vw;
  position: absolute;
`;

const FORM_ENDPOINT = "https://public.herotofu.com/v1/9b0bb090-2851-11ed-a7a0-3f26160640a2";

export const ContactUs = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };
  
    if (submitted) {
      return (
        <>
          <h2>Thank you!</h2>
          <div>We'll be in touch soon.</div>
        </>
      );
    }
  
    return (
        
      <Formi
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <Boxi>
          <Name type="text" placeholder="Nimi" name="name" required />
        </Boxi>
        <Boxi>
          <Maili type="email" placeholder="Sähköpostisi" name="email" required />
        </Boxi>
        <Boxi>
          <MessageArea placeholder="Kuinka voimme palvella?" name="message" required />
        </Boxi>
        <Boxi>
          <SubmitPut type="submit"> Lähetä </SubmitPut>
        </Boxi>
      </Formi>
      
  
    );
  };




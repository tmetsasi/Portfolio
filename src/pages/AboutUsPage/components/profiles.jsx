import React from "react";
import styled from "styled-components";


const ProfilePic = styled.img`
padding: 10px;
float: left;
height: 400px;
width: 300px;
background-size: cover;
border-radius: 10rem;
display: block;
background-color: #88c7ff;
`;

const ProfileBackground = styled.div`
    background: #d8caca;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const Profiles = () => {
    return ( 
        <ProfileBackground> 
            <ProfilePic src = {'/images/pexels-paul-ijsendoorn-33041.jpg' }/> 
            <ProfilePic src = {'/images/pexels-paul-ijsendoorn-33041.jpg'}/> 
        </ProfileBackground>
            

        

    )
};
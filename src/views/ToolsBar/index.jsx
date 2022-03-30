import React from "react";
import styled from 'styled-components';
import { HiBadgeCheck } from "react-icons/hi";

const MainBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    background: #fff;
    padding: 2.4rem;
    border-radius: 0 0 2rem 2rem;
    border: 1px solid transparent;
    
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

const UpperBox = styled.div`
    background: #fff;
    border-radius: 1rem;
    text-align: center;
`;


export const Tools = () => { 
    return ( 
        <UpperBox>Jotain dataa 
            <MainBox> 
                
                    <BoxPart>
                    
                        <article className='experience_details'>
                            <HiBadgeCheck/>
                            <h4>HTML</h4>
                            <small className='text-light'> Experienced </small>
                        </article>
                        <article className='experience_details'>
                            <HiBadgeCheck/>
                            <h4>CSS</h4>
                            <small className='text-light'> Experienced </small>
                        </article>                        <article className='experience_details'>
                            <HiBadgeCheck/>
                            <h4>JavaScript</h4>
                            <small className='text-light'> Experienced </small>
                        </article>                        <article className='experience_details'>
                            <HiBadgeCheck/>
                            <h4>TypeScript</h4>
                            <small className='text-light'> Experienced </small>
                        </article>
                        <article className='experience_details'>
                            <HiBadgeCheck/>
                            <h4>React</h4>
                            <small className='text-light'> Experienced </small>
                        </article>
                        <article className='experience_details'>
                            <HiBadgeCheck/>
                            <h4>Figma</h4>
                            <small className='text-light'> Experienced </small>
                        </article>
                    </BoxPart>
                
                {/* tässä vaihtuu boksi backendiin */}
                
                
                    <BoxPart>
                        
                        <article className='experience_details'>
                            <HiBadgeCheck/>
                            <h4>Node js</h4>
                            <small className='text-light'> Experienced </small>
                        </article>
                        <article className='experience_details'>
                            <HiBadgeCheck/>
                            <h4>MySQL</h4>
                            <small className='text-light'> Experienced </small>
                        </article>                        <article className='experience_details'>
                            <HiBadgeCheck/>
                            <h4>Heroku</h4>
                            <small className='text-light'> Experienced </small>
                        </article>                        <article className='experience_details'>
                            <HiBadgeCheck/>
                            <h4>Deno</h4>
                            <small className='text-light'> Experienced </small>
                        </article>
                        <article className='experience_details'>
                            <HiBadgeCheck/>
                            <h4>Scala</h4>
                            <small className='text-light'> Experienced </small>
                        </article>
                        <article className='experience_details'>
                            <HiBadgeCheck/>
                            <h4>Docker</h4>
                            <small className='text-light'> Experienced </small>
                        </article>
                    </BoxPart>
                
            </MainBox>
         </UpperBox>
    )
}
import React from "react";
import styled from 'styled-components';
import { HiBadgeCheck } from "react-icons/hi";

const KokoRoska = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    background: #fff;
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    row-gap: 2rem;
`;

const JokuRoska = styled.div`
    background: #3553;
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    display: grid;
    grid-template-columns: 1fr 1fr;
    transition: var(--transition);
    gap: 2rem;
    cursor: pointer;
    &:hover { 
       background-color: #407388;
       cursor: default;
    }
`;

const Heading3 = styled.div`
    text-align: center;
    margin-bottom: 2rem;
    
`;

const Osahomma = styled.section`

`;


export const Tools = () => { 
    return ( 
        <Osahomma>
            <h4> Meidän työkalumme</h4>

            <KokoRoska>
                
                    
                    <JokuRoska>
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
                    </JokuRoska>
                
                {/* tässä vaihtuu boksi backendiin */}
                
                
                    <JokuRoska>
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
                    </JokuRoska>
                
            </KokoRoska>
        </Osahomma>
    )
}
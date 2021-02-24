import React from 'react'
import styled from "styled-components";

const AccordionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: ${({theme}) => theme.primary};
  color: #fff;
  flex-grow: 1;
  @media screen and (min-width: 992px) {
    width: 45%;
  }
`

const AccordionText = styled.div`
  flex: 1;
  padding: 2rem 3rem;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    @media screen and (min-width: 992px) {
      width: 70%;
    }
  }
  
`

const InnerWrapper = styled.div`
  padding: 2rem 3rem;
  transition: .5s max-height;
  overflow: hidden;
  background: ${({theme}) => theme.primaryDark};;
  //border-left: 2px solid ${({theme}) => theme.primary};
  
  ul {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
  }
  
  li {
    margin-right: 1rem;
  }
  
  h3 {
    margin-bottom: 1rem;
  }
`

const Accordion = ({title, description, features}) => {
    return (
        <AccordionWrapper>
            <AccordionText>
                <h2>{title}</h2>
                <p>{description}</p>
            </AccordionText>
            <InnerWrapper>
                <h3>Lista zabiegów:</h3>
                <ul>
                  {features.map(feature => (
                    <li>{feature.text}</li>
                  ))}
                </ul>
            </InnerWrapper>
        </AccordionWrapper>
    )
}

export default Accordion
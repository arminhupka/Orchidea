import React from 'react'
import styled from 'styled-components'
import {Container} from "../styles/GlobalStyle";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const StyledSection = styled.section``
const InnerWrapper = styled(Container)``

const Pricing = () => (
    <StyledSection>
        <InnerWrapper>
            <SectionTitle title="Cennik"/>
            <h2>Pricing</h2>
        </InnerWrapper>
    </StyledSection>
)

export default Pricing
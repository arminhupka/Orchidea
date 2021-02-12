import React from 'react'
import styled from 'styled-components'
import {Container} from "../styles/GlobalStyle";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import PricingTab from "../components/PricingTab/PricingTab";

const StyledSection = styled.section``
const InnerWrapper = styled(Container)``



const Pricing = () => {

    return (
        <StyledSection>
            <InnerWrapper>
                <SectionTitle title="Cennik"/>
                <PricingTab/>
            </InnerWrapper>
        </StyledSection>
    )
}

export default Pricing
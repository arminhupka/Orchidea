import React from 'react'
import styled from 'styled-components'
import TableItem from "./TableItem/TableItem";

const StyledWrapper = styled.div`
  flex: 2;
  padding: 2rem;
  color: #fff;
  background-color: ${({theme}) => theme.primary};
`
const StyledList = styled.ul`
  width: 100%;
`

const Title = styled.h2`
  margin-bottom: 2rem;
`

const OpeningTable = () => (
    <StyledWrapper>
        <Title>Godziny otwarcia</Title>
        <StyledList>
            <TableItem day="Poniedziałek" hour="11:00 - 20:00"/>
            <TableItem day="Wtorek" hour="08:00 - 16:00"/>
            <TableItem day="Środa" hour="08:00 - 17:00"/>
            <TableItem day="Czwartek" hour="11:00 - 20:00"/>
            <TableItem day="Piątek" hour="08:00 - 14:00"/>
            <TableItem day="Sobota" hour="Nieczynne"/>
            <TableItem day="Niedziela" hour="Nieczynne"/>
        </StyledList>
    </StyledWrapper>
)

export default OpeningTable
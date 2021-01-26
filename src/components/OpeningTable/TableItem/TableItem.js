import React from 'react'
import styled from "styled-components";

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  color: #fff;
`
const StyledDay = styled.p`
  padding-right: 1rem;
  font-weight: 500;
`
const StyledHour = styled.p`
  padding-left: 1rem;
  font-weight: 700;
`
const StyledLine = styled.hr`
  flex: 1;
  border: 1px solid ${({theme}) => theme.primaryDark};
`

const TableItem = ({day, hour}) => (
    <StyledItem>
        <StyledDay>{day}</StyledDay>
        <StyledLine/>
        <StyledHour>{hour}</StyledHour>
    </StyledItem>
)

export default TableItem
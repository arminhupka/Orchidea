import React from "react";
import styled, {css} from "styled-components";

const TabItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  color: #fff;
`
const TabTitleBody = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${({theme}) => theme.primary};
  cursor: pointer;
`

const TabTitle = styled.h3``

const TabBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  width: 98%;
  background-color: ${({theme}) => theme.primaryDark};
  overflow: hidden;
  transition: height 0.3s;
  ${({active, bodyHeight}) =>
          active &&
          css`
            height: ${bodyHeight}px;
          `}
`
const TabList = styled.ul`
  margin: 0;
  padding: 2rem;
  height: auto;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const StyledLine = styled.hr`
  flex: 1;
  margin: 0 2rem;
  border: 1px solid ${({theme}) => theme.primary};
`

const TabItem = ({refs, sampleAccordionData, currentTab, setCurrentTab, bodyHeight, setBodyHeight}) => (
    <>
        {console.log(sampleAccordionData)}
        {sampleAccordionData.map(({category, services}, i) => (
            <TabItemWrapper key={`tab-item${i}`}>
                <TabTitleBody onClick={() => {
                    setCurrentTab(i);
                    setBodyHeight(refs[i].current.clientHeight);
                    if(currentTab === i) {
                        setBodyHeight(0)
                    }
                }}>
                    <TabTitle>{category}</TabTitle>
                </TabTitleBody>
                <TabBody active={currentTab === i} bodyHeight={bodyHeight}>
                    <TabList ref={refs[i]}>
                        {services.map(service => (
                            <ListItem>
                                <p>{service.title}</p>
                                <StyledLine/>
                                <p>{service.price} PLN</p>
                            </ListItem>
                        ))}
                    </TabList>
                </TabBody>
            </TabItemWrapper>
        ))}
    </>
)

export default TabItem
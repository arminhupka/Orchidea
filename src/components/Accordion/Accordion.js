import React, {useState} from 'react'
import styled from "styled-components";

const AccordionWrapper = styled.div`
  padding: 2rem 3rem;
  background: ${({theme}) => theme.primary};
  color: #fff;
  cursor: pointer;
`

const InnerWrapper = styled.div`
  max-height: ${({checked}) => checked ? "400px" : 0};
  transition: .5s max-height;
  overflow: hidden;
`

const Accordion = () => {
    const [checked, setChecked] = useState(false)

    return (
        <AccordionWrapper onClick={() => setChecked(!checked)}>
            <h2>Accordion</h2>
            <p>Kto nie marzy o pięknej i zadbanej skórze? Ten kto ją ma! Dzięki naszym zabiegom Twoja skóra twarzy, szyi
                i dekoltu będzie dopieszczona, a Ty będziesz odprężona i zrelaksowana.</p>
            <InnerWrapper checked={checked}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias amet beatae consequuntur
                    corporis cum cupiditate delectus deleniti, dolor eligendi est eveniet expedita facere harum incidunt
                    ipsum laboriosam magnam natus necessitatibus neque non praesentium quae quas quo recusandae sapiente
                    voluptates! Accusamus aspernatur, assumenda corporis error impedit itaque iure maiores optio
                    repellat sequi? Amet consequatur dignissimos dolore doloremque eligendi facilis fuga fugiat illo
                    ipsam minima mollitia nemo numquam possimus, reiciendis tempore ut veniam vitae. At earum modi
                    molestiae odit omnis porro quasi ratione vero, voluptatibus. Atque dolor et exercitationem
                    repellendus, vitae voluptate voluptatibus! Aut blanditiis consequatur, cupiditate ipsum laudantium
                    officia velit.</p>
            </InnerWrapper>
        </AccordionWrapper>
    )
}

export default Accordion
import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src="/images/viewers-disney.png" alt="" />
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png" alt="" />
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png" alt="" />
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png" alt="" />
        </Wrap>
        <Wrap>
            <img src="/images/viewers-national.png" alt="" />
        </Wrap>
    </Container>
  )
}

export default Viewers

let Container=styled.div`
    margin-top:60px;
    display:grid;   
    grid-template-columns:repeat(5, minmax(0,1fr));
    grid-gap:25px;


`

let Wrap=styled.div`
    cursor:pointer;
    border:solid 4px rgba(249,249,249,0.1);
    border-radius:10px;
    box-shadow:rgb(0 0 0/ 69%) 0 26px 30px -10px,rgb(0 0 0/ 73%) 0 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94);
    img{
        height:100%;
        width:100%;
        object-fit:cover;
    }
    &:hover{
        transform:scale(1.08);
        border-color:rgba(249,249,249,0.8);
    }
`
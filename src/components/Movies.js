import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
function Movies() {
  return (
    <Container>
        <h4>Recommended for you</h4>
        <Content>
            <Link to="/detail">
                <Wrap>
                    <img src="/images/infinity-war.jpg" alt="" />
                </Wrap>
            </Link>
                <Wrap>
                    <img src="/images/scarlett-witch.jpg" alt="" />
                </Wrap>
            <Wrap>
                <img src="/images/scarlett-witch2.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/avengers-2.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/doctor-strange.jpg" alt="" />
            </Wrap>
        
            <Wrap>
                <img src="/images/iron-man-vs-cpt-america.jpg" alt="" />
            </Wrap>

        
        </Content>

    </Container>
  )
}

export default Movies

const Container=styled.div`
    margin-top:30px;
    //margin-bottom:30px;
    h4{
        font-size:22px;
    }
`
const Content=styled.div`
    margin-top:15px;
    display:grid;
    grid-template-columns:repeat(4, minmax(0, 1fr));
    grid-gap:30px;
`

const Wrap=styled.div`
    border:3px solid rgba(249,249,249,0.1);
    transition:all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94);
    border-radius:10px;
    box-shadow:rgb(0 0 0/ 69%) 0 26px 30px -10px,rgb(0 0 0/ 73%) 0 16px 10px -10px;
    cursor:pointer;
    overflow:hidden;
    width:100%;
    height:100%;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        border-color:rgba(249,249,249,0.8);
        transform:scale(1.05);
    }
`
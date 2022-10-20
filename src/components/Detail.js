import React from 'react'
import styled from 'styled-components'

function Scarlett() {
  return (
    <Container>
      <Background>
        <img src="/images/infinity-war.jpg" alt="" />
      </Background>
      <ImageTitle>
          <img src="/images/InfinityWar-logo.png" alt="" />
      </ImageTitle>  
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png" alt="Group watching" />
        </GroupButton>        
      </Controls>
      <Description>
        <p>The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.</p>
      </Description>
    </Container>
  )
}

export default Scarlett

const Container=styled.div`
  position:relative;
  min-height:calc(100vh - 70px);
  margin-left:20px;

`
const Background=styled.div`
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:-1;
  img{
    width:100%;
    height:100%;
    object-fit:cover;
    filter: brightness(70%);
    
  }
`
const ImageTitle=styled.div`
  height:200px;
  width:350px;
  margin-top:50px;
  margin-left:50px;
  img{
    width:100%;
    height:100%;
    object-fit:contain;
  }
`
const Controls=styled.div`
  display:flex;
  margin-left:30px;
  margin-top:50px;
  &>*{
    margin-right:35px;
  }
`
const PlayButton=styled.button`
  color:black;
  font-weight:bold;
  display:flex;
  justify-content:center;
  align-items:center;
  border:none;
  cursor:pointer;
  background:white;
  border-radius:5px;
  padding:0 20px;
  height:50px;
  width:150px;  
  &:hover{
    background:rgb(198, 198, 198);
  }
  span{
    padding:0 10px;
  }

`
const TrailerButton=styled(PlayButton)`
  
  background:rgba(0,0,0,0.2);
  color:white;

  &:hover{
    border:2px solid white;
    background:rgba(0,0,0,0.2);
  }

`
const AddButton=styled.button`
  background:rgba(0,0,0,0.4);
  color:white;
  border-radius:50%;
  width:44px;
  height:44px;
  margin-top:auto;
  margin-bottom:auto;
  font-size:30px;
  cursor:pointer;
  border:2px solid white;
  &:hover{
    transform:scale(1.05);
  }
`
const GroupButton=styled(AddButton)`
  display:flex;
  justify-content:center;
  align-items:center;
`
const Description=styled.div`
  width:500px;
  margin-left:30px;
  p{
    font-size:20px;
  }
`
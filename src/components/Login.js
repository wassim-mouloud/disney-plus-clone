import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <Container>
        <Pack>
            <img src="/images/cta-logo-one.svg" alt="" />
        </Pack>
        <Link>
            <SignUp>
                GET ALL THERE
            </SignUp>
        </Link>
        <Description>
            <p><span>Warning</span>: you will spend most of your time and don't do anything in your life because our shows and movies are so addicting.</p>
            <p>From Matt Murdock "Daredevil".</p>
        </Description>
        <Logos src="/images/cta-logo-two.png" ></Logos>

    </Container>
  )
}

export default Login

const Container=styled.div`
    min-height:calc(100vh - 70px);
    position:relative;
    display:flex;
    justify-content:top;
    align-items:center;
    flex-direction:column;
    //height:300vh;
    &::before{
        content:'';
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background-image:url('/images/login-background.jpg') ;
        background-repeat:no-repeat;
        z-index:-1;
        
    }
    a{
        max-width:800px;
        width:90%;
    }

`
const Pack=styled.div`
    max-width:800px;
    width:90%;
    margin-top:100px;
`
const SignUp=styled.button`
    background-color:#0063e5;
    color:white;
    border-radius:5px;
    border:none;
    max-width:800px;
    width:100%;
    height:60px;
    font-size:20px;
    padding:20px;
    letter-spacing:1.8px;
    cursor:pointer;
    margin-top:30px ;
    text-align:center;
    &:hover{
        background:#0483ee;
    }
    `
const Description=styled.div`
    text-align:center;
    font-size:18px;
    max-width:800px;
    width:90%;

`

const  Logos=styled.img`
    max-width:800px;
    width:80%;

`
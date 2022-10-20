import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Nav>
            <Logo src='/images/logo.svg'/>
            <NavMenu>
                <Link to='/' >
                    <img src="/images/home-icon.svg" alt="" />
                    <span>Home</span>
                </Link>
                <a>
                    <img src="/images/search-icon.svg" alt="" />
                    <span>Search</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>Watchlist</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="" />
                    <span>Originals</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="" />
                    <span>Movies</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="" />
                    <span>Series</span>
                </a>
                
            </NavMenu>
            <UserImg src='/images/yasmine.jpg' />
        </Nav>
        
    </div>
  )
}
const Nav = styled.nav`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
` 
const Logo=styled.img`
    width:80px;

`
const NavMenu=styled.div`
    display:flex;
    flex:1;
    margin-left:20px;
    
    
    a{
        text-decoration:none;
        display:flex;
        align-items:center;
        cursor:pointer;
        padding:0 10px;
        position:relative;
        img{
            width:25px;
        }
    
    
    span{
        font-size:13px;
        letter-spacing:1.42px;
        margin-left:10px;
        color:white;
        &::after{
            content:'';
            position:absolute;
            right:0;
            left:0;
            bottom:-6px;
            background:white;
            height:2px;
            border-radius:5px;
            opacity:0;
            transform:scaleX(0);
            transition:all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        &:hover{
            &::after{
                opacity:1;
                transform:scaleX(0.75);
            }
        }
        
    }
}
`
const UserImg=styled.img`
    height:45px;
    width:45px;
    border-radius:50%;
`
export default Navbar

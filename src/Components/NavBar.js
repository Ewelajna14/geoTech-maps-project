import React from 'react'
import styled from 'styled-components';
import {FaMapMarkedAlt } from 'react-icons/fa';
import {NavLink} from "react-router-dom";


function NavBar(){
    return(
        <>
        <Wrapper>
            <Title>
                <Icon/>
                GeoTech Maps
            </Title>
            </Wrapper>
            <NavMenu>

             <NavElement>  
            <NavLink to="/">
             Home
            </NavLink>
            </NavElement> 

            <NavElement>
            <NavLink to="/form">
             Form
            </NavLink>
            </NavElement>

            <NavElement>  
            <NavLink to="/contacts">
             Contacts
            </NavLink>
            </NavElement> 

            </NavMenu>
            </>
    )
}

export default NavBar

const Wrapper=styled.nav`
background-color:#3A5A40;
height:90px;
display:flex;
justify-content:left;
align-items:center;

`
const Title=styled.h1`
text-align: left;
font-size:40px;
color:white;
`
const Icon = styled(FaMapMarkedAlt)`
margin-right: 0.5rem;
margin-left: 1rem;
`

const NavMenu=styled.div`
display:flex;
justify-content:left;
background-color:#3A5A40;
padding:5px;
`

const NavElement=styled.li`
margin-right: 0.5rem;
margin-left: 1rem;
list-style-type: none;
a {
    text-decoration: none;
    color: white;
 }

`
import React from "react";
import styled from 'styled-components';

function InfoSection(){
    return(
        <Section>
            <InfoRow>
                <InfoColumn>
                    <h1>Welcome to GeoTech Maps</h1>
                    <p> If you are looking for an App where you can track all of yours geotechnical data, together with displaying them on the map, you couldn't find better place! </p>
                    <p>To start:</p>
                    <ul>
                        <li>Find your Location using coordinates</li>
                        <li>Provide your data to the Form</li>
                        <li>Submit your data and start to explore</li>
                    </ul>
                </InfoColumn>
                <InfoColumn>
                    <img src="/maplogo.svg" alt="image"/>
                </InfoColumn>
            </InfoRow>
        </Section>   
    )
}

export default InfoSection

const Section = styled.div`
background-image: linear-gradient(#F1F2B5,#135058 );
padding 5rem 0;
height: 100vh;
width:100vw;
`

const InfoRow=styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-gap: 30px;
`
const InfoColumn=styled.div`
margin:1rem;
img{
    width: 100%;
    max-width: 400px;
    height: auto;
}
h1{
    font-size:3rem;
    font-family: "Trattatello", cursive;
}

p{
    font-size:1.4rem;
    font-family: "Trattatello", cursive;
    
}

ul{
    font-size:1.4rem;
    font-family: "Trattatello", cursive;
}
`


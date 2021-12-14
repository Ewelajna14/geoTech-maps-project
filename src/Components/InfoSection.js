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
padding: 50px 0;
height: 80vh;
`

const InfoRow=styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-gap: 30px;
`
const InfoColumn=styled.div`
padding:30px;
img{
    width: 500px;
    height: 300px;    
}
h1{
    font-size:50px;
    font-family: "Monaco"
}

p{
    font-size:20px;
}

ul{
    font-size:20px;
}
`


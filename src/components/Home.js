import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'

const Home = () => {
    return (
        <Container>
            <ImgSlider/>
            <Viewers/>  
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    
    // add a div before all the other html
    &:before {
        background: url("./images/home-background.png") center center / cover 
        no-repeat fixed;
        content:"";
        position: absolute;
        top: 0;   // 0px from the top
        left: 0;  // 0px from the left
        right: 0;
        bottom: 0;
        z-index: -1;   //  behind of all
    }
`
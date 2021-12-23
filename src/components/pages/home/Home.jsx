import React from 'react'
import styled from "styled-components";
import FeaturedInfo from '../../featuredinfo/FeaturedInfo';
const Container = styled.div`
    flex: 4;
`

export default function Home() {
    return (
        <Container>
            <FeaturedInfo/>
        </Container>
    )
}

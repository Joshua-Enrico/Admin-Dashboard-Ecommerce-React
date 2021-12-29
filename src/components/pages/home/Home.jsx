import React from 'react'
import styled from "styled-components";
import Chart from '../../chart/Chart';
import FeaturedInfo from '../../featuredinfo/FeaturedInfo';
import { userdata } from '../../../DemoData';
import WidgetSmall from '../../widgetUser/WidgetSmall';
import WidgetLarge from '../../widgetUser/WidgetLarge';
const Container = styled.div`
    position: sticky;

`
const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`



export default function Home() {
    console.log(userdata)
    return (
        <Container>
            <FeaturedInfo/>
            <Chart
            data={userdata}
            title='User Analytics'
            grid={true}
            dataKey='Active User'
            />
            <HomeWidgets>
                <WidgetSmall />
                <WidgetLarge />
            </HomeWidgets>
        </Container>
    )
}

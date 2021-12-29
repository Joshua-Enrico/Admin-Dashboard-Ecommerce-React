import styled from "styled-components";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Container = styled.div`
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 7px 13px -4px rgba(0,0,0,0.47);
    -webkit-box-shadow: 2px 7px 13px -4px rgba(0,0,0,0.47);
    -moz-box-shadow: 2px 7px 13px -4px rgba(0,0,0,0.47);
`
const ChartTitle = styled.h3`
    margin-bottom: 20px;
`

export default function Chart({title, data, dataKey, grid}) {
    

    return (
        <Container>
            <ChartTitle>{title}</ChartTitle>
            <ResponsiveContainer width="100%" aspect={4 / 1} >
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    {grid && <CartesianGrid  stroke="#e0dfdf" strokeDasharray="5 5" />}
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    )
}

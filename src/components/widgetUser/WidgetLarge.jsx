import styled from "styled-components";
const Container = styled.div`
    flex: 2;
    border-radius: 10px;
    box-shadow: 2px 7px 13px -4px rgba(0,0,0,0.47);
    -webkit-box-shadow: 2px 7px 13px -4px rgba(0,0,0,0.47);
    -moz-box-shadow: 2px 7px 13px -4px rgba(0,0,0,0.47);
    padding: 20px;
    margin-right: 20px;
    `

export default function WidgetLarge() {
    return (
        <Container>
            Large
        </Container>
    )
}

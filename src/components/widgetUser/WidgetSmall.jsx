import styled from "styled-components";
import UserResume from "./UserResume";
const Container = styled.div`
    flex: 1;
    border-radius: 10px;
    box-shadow: 2px 7px 13px -4px rgba(0,0,0,0.47);
    -webkit-box-shadow: 2px 7px 13px -4px rgba(0,0,0,0.47);
    -moz-box-shadow: 2px 7px 13px -4px rgba(0,0,0,0.47);
    padding: 20px;
    margin-right: 20px;
`
const WidgetSmTitle = styled.span`
    font-size: 32px;
    font-weight: bold;
`


export default function WidgetSmall() {
    return (
        <Container>
            <WidgetSmTitle>New Joins Members</WidgetSmTitle>
            <UserResume
            img="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            username="Carlos Javier"
            position="Seller"
            />
            <UserResume
            img="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            username="Carlos Javier"
            position="Seller"
            />
            <UserResume
            img="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            username="Carlos Javier"
            position="Seller"
            />
            <UserResume
            img="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            username="Carlos Javier"
            position="Seller"
            />
            <UserResume
            img="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            username="Carlos Javier"
            position="Seller"
            />
        </Container>
    )
}

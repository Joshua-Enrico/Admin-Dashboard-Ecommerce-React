import styled from "styled-components";
import {
    Visibility
} from "@material-ui/icons";

const WidgetSmList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`
const WidgetSmListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
`
const WirdgetImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`
const WirdgetSmUser = styled.div`
    display: flex;
    flex-direction: column;
`

const WirdgetSmUsername = styled.span`
    font-weight: 600;
`
const WirdgetSmUserPosition = styled.span`
    font-weight: 300;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #eeeef7;
    color: #555;
    &:hover {
        background-color: #f5f5f5;
        transform: scale(1.05);
    }
`

export default function UserResume({img, username, position}) {
    return (
        <WidgetSmList>
        <WidgetSmListItem>
            <WirdgetImg alt="" src={img}></WirdgetImg>
            <WirdgetSmUser>
                <WirdgetSmUsername>{username}</WirdgetSmUsername>
                <WirdgetSmUserPosition>{position}</WirdgetSmUserPosition>
            </WirdgetSmUser>
            <Button>
                <Visibility style={{ fontSize:"16", marginRight:"5" }} />
                Display
            </Button>
        </WidgetSmListItem>
        </WidgetSmList>
    )
}

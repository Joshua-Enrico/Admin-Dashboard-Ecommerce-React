import styled from "styled-components";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';

const Container = styled.div`
    width: 100%;
    height: 50px;

    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 12;
`
const TopBarWrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
`
const TopLeft = styled.div`

`
const TopRight = styled.div`
    margin-right: 20px;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    z-index: 999;
`
const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
`

const TopBarIcons = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
`
const TopIconBadge = styled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: -5
    px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`

const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
`

export default function Topbar() {
    return (
        <Container>
            <TopBarWrapper>

                <TopRight>
                    <TopBarIcons>
                        <NotificationsNoneIcon />
                        <TopIconBadge>2</TopIconBadge>
                    </TopBarIcons>
                    <TopBarIcons>
                        <LanguageIcon />
                    </TopBarIcons>
                    <TopBarIcons>
                        <SettingsIcon />
                    </TopBarIcons>
                    <Avatar alt="" src='https://cdn-icons-png.flaticon.com/512/147/147144.png' />
                </TopRight>
            </TopBarWrapper>
        </Container>
    )
}

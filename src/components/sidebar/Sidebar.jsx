import styled from "styled-components";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
  } from "@material-ui/icons";

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: rgb(251, 251, 255);
    position: sticky;
    top: 15px;
`
const SideBarWrapper = styled.div`
    padding: 20px;
    color: #555;
`
const SideBarMenu = styled.div`
    margin-bottom: 10px;
`
const SideBarTitle = styled.h3`
    font-size: 13px;
    color:  rgb(187, 186, 186);
`
const SideBarList = styled.ul`
    list-style: none;
    padding: 5px;
`
const SideBarListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    border-radius: 10px;
    &:hover {
        background-color: rgb(187, 186, 186);
        transform: scale(1.05);
    };
    &.active {
        background-color: rgb(187, 186, 186);
        transform: scale(1.05);
    }

`



export default function Sidebar() {
    let id = "default";
    let flag = 0;
    const ActiveLink = (e) => {
        if (e.target.id !== id && flag > 0) {
            const header = document.querySelector('#' + id);
            header.classList.remove('active');
        }
        flag = 1;
        id = e.target.id;
        const header = document.querySelector('#' + e.target.id);
        header.classList.add('active');
    }

    return (
        <Container>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarTitle>Dashboard</SideBarTitle>
                    <SideBarList>
                        <SideBarListItem id="a" onClick={(e) => ActiveLink(e)}>
                            <LineStyle style={{ fontSize: 20, marginRight: 5 }} />
                            Home
                        </SideBarListItem>
                        <SideBarListItem id="b" onClick={(e) => ActiveLink(e)}>
                            <Timeline style={{ fontSize: 20, marginRight: 5 }} />
                            Analytics
                        </SideBarListItem>
                        <SideBarListItem id="c" onClick={(e) => ActiveLink(e)}>
                            <TrendingUp style={{ fontSize: 20, marginRight: 5 }} />
                            Sales
                        </SideBarListItem>
                    </SideBarList>
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarTitle>QuickMenu</SideBarTitle>
                    <SideBarList>
                        <SideBarListItem id="d" onClick={(e) => ActiveLink(e)}>
                            <PermIdentity style={{ fontSize: 20, marginRight: 5 }} />
                            Users
                        </SideBarListItem>
                        <SideBarListItem id="e" onClick={(e) => ActiveLink(e)}>
                            <Storefront style={{ fontSize: 20, marginRight: 5 }} />
                            Products
                        </SideBarListItem>
                        <SideBarListItem id="f" onClick={(e) => ActiveLink(e)}>
                            <AttachMoney style={{ fontSize: 20, marginRight: 5 }} />
                            Transactions
                        </SideBarListItem>
                        <SideBarListItem id="g" onClick={(e) => ActiveLink(e)}>
                            <BarChart style={{ fontSize: 20, marginRight: 5 }} />
                            Reports
                        </SideBarListItem>
                    </SideBarList>
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarTitle>Notifications</SideBarTitle>
                    <SideBarList>
                        <SideBarListItem id="h" onClick={(e) => ActiveLink(e)}>
                            <MailOutline style={{ fontSize: 20, marginRight: 5 }} />
                            Mail
                        </SideBarListItem>
                        <SideBarListItem id="i" onClick={(e) => ActiveLink(e)}>
                            <DynamicFeed style={{ fontSize: 20, marginRight: 5 }} />
                            Feedback
                        </SideBarListItem>
                        <SideBarListItem id="j" onClick={(e) => ActiveLink(e)}>
                            <ChatBubbleOutline style={{ fontSize: 20, marginRight: 5 }} />
                            Messages
                        </SideBarListItem>
                    </SideBarList>
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarTitle>Staff</SideBarTitle>
                    <SideBarList>
                        <SideBarListItem id="k" onClick={(e) => ActiveLink(e)}>
                            <WorkOutline style={{ fontSize: 20, marginRight: 5 }} />
                            Manage
                        </SideBarListItem>
                        <SideBarListItem id="l" onClick={(e) => ActiveLink(e)}>
                            <Timeline style={{ fontSize: 20, marginRight: 5 }} />
                            Analytics
                        </SideBarListItem>
                        <SideBarListItem id="m" onClick={(e) => ActiveLink(e)}>
                            <Report style={{ fontSize: 20, marginRight: 5 }} />
                            Reports
                        </SideBarListItem>
                    </SideBarList>
                </SideBarMenu>
            </SideBarWrapper>
        </Container>
    )
}

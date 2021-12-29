import React from 'react'
import styled from "styled-components";
import {
    HomeSharp,
    DonutSmallSharp,
    MailOutlineSharp,
    PersonOutlineSharp,
} from "@material-ui/icons";

import { BsCircle } from 'react-icons/bs';

const SideBarList = styled.ul`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    paddin-left: 5px;
    padding-top: 40px;

`

const B = styled.b`

`
const DropMenu = styled.ul`
    margin: 0;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    paddin-left: 5px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 15px;
    display: none;
`
const DropMenuDiv = styled.div`
    display: flex;
    align-items: center;
    &.active {
        background: #f5f5f5;
        border-radius: 10px;
    }
`

const SideBarListItem = styled.li`
    cursor: pointer;
    position: relative;
    list-style: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 100%;
    
    &.active {
        background: #fff;
        & > a{
            color: black;
        }
        & > b:nth-child(1){
            position: absolute;
            top: -20px;
            height: 20px;
            width: 100%;
            background: #fff;
        }
        & > b:nth-child(1)::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-bottom-right-radius: 20px;
            background: #4d5bf9;
        }
        & > b:nth-child(2){
            position: absolute;
            bottom: -20px;
            height: 20px;
            width: 100%;
            background: #fff;
        }
        & > b:nth-child(2)::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-top-right-radius: 20px;
            background: #4d5bf9;
        }
        
    }
`
const Container = styled.div`
    position: fixed;
    z-index: 999;
    top: 20px;
    left: 20px;
    bottom: 20px;
    width: 65px;
    box-sizing: initial;
    border-radius: 10px;
    border-left: 5px solid #4d5bf9;
    background: #4d5bf9;
    transition: width 0.2s;
    overflow-x: hidden;
    &:hover {
        width: 200px;
        ${SideBarListItem} {
            &.active {
                & > ${DropMenu} {
                    display: block;
                }
            }
        }
    };
`


const Aref = styled.a`
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: #fff;

`

const SpanIcon = styled.span`
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    line-height: 70px;
    text-align: center;

`

const SpanText = styled.span`
    position: relative;
    display: block;
    padding-left: 10px;
    height: 60px;
    line-height: 60px;
    white-space: normal;
`

const Toggle = styled.div`
    display: flex;
    justify-content: start;
    cursor: pointer;
`


const DropMenuText = styled.span`
    display: block;
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
`

const DropMenuIcon = styled.span`
    display: block;
    padding-left: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    line-height: 10px;
`


export default function Sidebar1() {

    let id = "default";
    let flag = 0;
    let Did = "default";
    const ActiveLink = (e) => {
        console.log(e)
        console.log(id)
        if (e !== id && flag > 0) {
            const header = document.querySelector('#' + id);
            header.classList.remove('active');
            // if (Did !== "default") {
            //     const header = document.querySelector('#' + Did);
            //     header.classList.remove('active');
            // }
        }
        flag = 1;
        id = e;
        const header = document.querySelector('#' + e);
        header.classList.add('active');
    }


    let Dflag = 0;
    const ActiveDropLink = (e) => {
        console.log(e.currentTarget.id)
        if (e.currentTarget.id !== Did && Dflag > 0) {
            const item = document.querySelector('#' + Did);
            item.classList.remove('active');
        }
        Dflag = 1;
        Did = e.currentTarget.id;
        const item = document.querySelector('#' + e.currentTarget.id);
        item.classList.add('active');
    }

    return (
        <Container>
            <SideBarList>
                <SideBarListItem id="a" >
                    <B></B>
                    <B></B>
                    <Aref href="#" onClick={(e) => ActiveLink("a")}>
                        <SpanIcon><HomeSharp /></SpanIcon>
                        <SpanText>Dashboard</SpanText>
                        <SpanText>X</SpanText>
                    </Aref>
                    <DropMenu>
                        <DropMenuDiv id="a1" onClick={(e) => ActiveDropLink(e)}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Home</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="a2" onClick={(e) => ActiveDropLink(e)}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Analytics</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="a3" onClick={(e) => ActiveDropLink(e)}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Sales</DropMenuText>
                        </DropMenuDiv>

                    </DropMenu>
                </SideBarListItem>
                <SideBarListItem id="b">
                    <B></B>
                    <B></B>
                    <Aref href="#" onClick={(e) => ActiveLink("b")}>
                        <SpanIcon><DonutSmallSharp /></SpanIcon>
                        <SpanText>QuickMenu</SpanText>
                    </Aref>
                    <DropMenu>
                        <DropMenuDiv id="a4" onClick={(e) => ActiveDropLink(e)}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Users</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="a5" onClick={(e) => ActiveDropLink(e)}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Products</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="a6" onClick={(e) => ActiveDropLink(e)}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Transactions</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="a6" onClick={(e) => ActiveDropLink(e)}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Reports</DropMenuText>
                        </DropMenuDiv>

                    </DropMenu>
                </SideBarListItem>
                <SideBarListItem id="c" >
                    <B></B>
                    <B></B>
                    <Aref href="#" onClick={(e) => ActiveLink("c")}>
                        <SpanIcon><MailOutlineSharp /></SpanIcon>
                        <SpanText>Notifications</SpanText>
                    </Aref>
                    <DropMenu>
                        <DropMenuDiv id="a7" onClick={(e) => ActiveDropLink(e)}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Mail</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="a8" onClick={(e) => ActiveDropLink(e)}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Feedback</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="a9" onClick={(e) => ActiveDropLink(e)}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Messages</DropMenuText>
                        </DropMenuDiv>

                    </DropMenu>
                </SideBarListItem>
                <SideBarListItem id="e">
                    <B></B>
                    <B></B>
                    <Aref href="#" onClick={(e) => ActiveLink("e")}>
                        <SpanIcon><PersonOutlineSharp /></SpanIcon>

                        <SpanText>Staff</SpanText>
                    </Aref>
                </SideBarListItem>
            </SideBarList>

        </Container>
    )
}

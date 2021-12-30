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
const BR = styled.br`
content: " ";
display: none;
margin: 2.5em 0;
`

const SideBarListItem = styled.li`
    cursor: pointer;
    position: relative;
    list-style: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 100%;
    
    &.selected {
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
            background: #42b883;
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
            background: #42b883;
        }
    }


    &.active {


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
    border-left: 5px solid #42b883;
    background: #42b883;
    transition: width 0.2s;
    overflow-x: hidden;
    &:hover {
        width: 200px;
        ${SideBarListItem} {
            &.space {
                & > ${BR}{
                    display: block;
                }
            }
            &.active {
                & > ${DropMenu} {
                    display: block;
                }
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
                    background: #42b883;
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
                    background: #42b883;
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

    let id = {};
    let index = "";
    let flag = 0;
    let flag1 = 0;
    let Did = "default";
    const ActiveLink = (e) => {
        console.log(Object.keys(id).length)
        if (e !== id && flag > 0 && Object.keys(id).length > 0) {
            const header = document.querySelector('#' + id[index]);
            delete id[index]
            header.classList.remove('active');

            // if (Did !== "default") {
            //     const header = document.querySelector('#' + Did);
            //     header.classList.remove('active');
            // }
        }
        flag = 1;
        id[e] = e;
        index = e
        console.log(id)
        const header = document.querySelector('#' + e);
        header.classList.add('active');
    }

    let LitemId = "default"
    let Dflag = 0;
    const ActiveDropLink = (e, b) => {
        if (e.currentTarget.id !== Did && Dflag > 0) {
            const item = document.querySelector('#' + Did);
            item.classList.remove('active');
            flag1 = 0;
            const ListItem = document.querySelector('#' + LitemId);
            ListItem.classList.remove('space');
            let x = e.currentTarget.id[0].split("")
            let y = Did[0].split("")
            console.log(id)
            // handle active box
            if (x[0] != y[0]) {
                console.log("diferent")
                const header = document.querySelector('#' + y);
                header.classList.remove('space');
                header.classList.remove('active');
                header.classList.remove('selected');
            }
        }
        Dflag = 1;
        flag1 = 1;
        Did = e.currentTarget.id;
        LitemId = b
        delete id[b]
        const item = document.querySelector('#' + e.currentTarget.id);
        item.classList.add('active');
        const ListItem = document.querySelector('#' + LitemId);

        ListItem.classList.add('space');
        ListItem.classList.add('selected');
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
                        <DropMenuDiv id="a1" onClick={(e) => ActiveDropLink(e, "a")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Home</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="a2" onClick={(e) => ActiveDropLink(e, "a")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Analytics</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="a3" onClick={(e) => ActiveDropLink(e, "a")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Sales</DropMenuText>
                        </DropMenuDiv>
                    </DropMenu>
                    <BR />
                </SideBarListItem>
                <SideBarListItem id="b">
                    <B></B>
                    <B></B>
                    <BR />
                    <Aref href="#" onClick={(e) => ActiveLink("b")}>
                        <SpanIcon><DonutSmallSharp /></SpanIcon>
                        <SpanText>QuickMenu</SpanText>
                    </Aref>
                    <DropMenu>
                        <DropMenuDiv id="b4" onClick={(e) => ActiveDropLink(e, "b")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Users</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="b5" onClick={(e) => ActiveDropLink(e, "b")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Products</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="b6" onClick={(e) => ActiveDropLink(e, "b")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Transactions</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="b6" onClick={(e) => ActiveDropLink(e, "b")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Reports</DropMenuText>
                        </DropMenuDiv>

                    </DropMenu>
                    <BR />
                </SideBarListItem>
                <SideBarListItem id="c" >
                    <B></B>
                    <B></B>
                    <BR />
                    <Aref href="#" onClick={(e) => ActiveLink("c")}>
                        <SpanIcon><MailOutlineSharp /></SpanIcon>
                        <SpanText>Notifications</SpanText>
                    </Aref>
                    <DropMenu>
                        <DropMenuDiv id="c7" onClick={(e) => ActiveDropLink(e, "c")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Mail</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="c8" onClick={(e) => ActiveDropLink(e, "c")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Feedback</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="c9" onClick={(e) => ActiveDropLink(e, "c")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Messages</DropMenuText>
                        </DropMenuDiv>
                    </DropMenu>
                    <BR />
                </SideBarListItem>
                <SideBarListItem id="e">
                    <B></B>
                    <B></B>
                    <BR />
                    <Aref href="#" onClick={(e) => ActiveLink("e")}>
                        <SpanIcon><PersonOutlineSharp /></SpanIcon>
                        <SpanText>Staff</SpanText>
                    </Aref>
                    <DropMenu>
                        <DropMenuDiv id="e8" onClick={(e) => ActiveDropLink(e, "e")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Manage</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="e9" onClick={(e) => ActiveDropLink(e, "e")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Analytics</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="e10" onClick={(e) => ActiveDropLink(e, "e")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Reports</DropMenuText>
                        </DropMenuDiv>
                    </DropMenu>
                </SideBarListItem>
            </SideBarList>

        </Container>
    )
}

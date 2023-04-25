import { Link } from "react-router-dom";
import styled from "styled-components";

export const Page = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`

export const ButtonHome = styled(Link)`
margin-left:auto;
margin-right:auto;
margin-bottom:30px;

`

export const Button = styled.button`
margin-top: 30px;
background: linear-gradient(114.99deg, rgb(71, 28, 169) -0.99%, rgb(87, 54, 163) 54.28%, rgb(75, 42, 153) 78.99%);
color: #fff

`
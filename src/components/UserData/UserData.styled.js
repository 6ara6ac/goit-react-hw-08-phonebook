import styled from "styled-components";
import backgroundImg from '../assets/picture.png'
import userBorder from '../assets/border.svg'


export const Logo = styled.img`
padding:20px;
`

export const Tweet = styled.div`
position:relative;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
width: 380px;
height: 460px;
border-radius:20px;
`

export const ImagesWrapper = styled.div`
background: url(${backgroundImg});
background-repeat: no-repeat;
background-position: center;
width:auto;
height:50%;
`
export const User = styled.div`
display: grid;
align-items:center;
justify-content:center;
position: absolute;


top: 43%;
left: 40%;

width:80px;
height:80px;

border-radius: 40px;
background: #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
`

export const Avatar = styled.img`
border-radius:40px;
`

export const List = styled.ul`
display:grid;
gap:16px;
`

export const UserInfo = styled.div`
text-align:center;
padding:0;
`

export const Button = styled.button`
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`

export const ButtonActive = styled.button`
background: #5CD3A8;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

`
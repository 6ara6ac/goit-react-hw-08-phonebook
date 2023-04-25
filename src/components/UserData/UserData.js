import React, { useEffect, useState } from "react"
import { 
    Logo, 
    ImagesWrapper, 
    User, 
    UserInfo, 
    List, 
    Tweet, 
    Avatar, 
    Button,
    ButtonActive } from "./UserData.styled"
import { updUsers } from "../../api/fetchUsers"
    

    export const UserData = ({ tweets, followers, avatar, following, id}) => {
    const [updFollowing, updSetFollowing] = useState(following)
    const [updFollowers, updSetFollowers] = useState(followers)

    useEffect(() =>{
        const updData = async () => {
            try{
            await updUsers(id, updFollowing, updFollowers)
            }   
            catch{

            }
        }
        updData()
    },[id, updFollowers, updFollowing])


    const handleFollow = () => {
       updSetFollowing(prevState => !prevState)
        if (!updFollowing) {
            updSetFollowers(prevState => prevState + 1)
        }
        else{
            updSetFollowers(prevState => prevState - 1)
        }
    }

 


    return <Tweet key={id}>
    <ImagesWrapper>
    <Logo src={require('../assets/Vector.png')}></Logo>
    <User><Avatar src={avatar} width={62}></Avatar></User>
    </ImagesWrapper>
    <UserInfo>
    <List>
    <li>{Intl.NumberFormat('en-US').format(tweets)} tweets</li>    
    <li>{updFollowers} followers</li>    
    </List>
    {!updFollowing ? <Button onClick={handleFollow}>Follow</Button> : 
    <ButtonActive onClick={handleFollow}>Following</ButtonActive>}
    
    </UserInfo>
    </Tweet>
}
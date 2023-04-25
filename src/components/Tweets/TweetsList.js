import React from "react"

import { UserData } from "../UserData/UserData";

export const Tweets = ({users}) => {

    return users.map(({ tweets, followers, avatar, id, following})=>{
      return <UserData
      key={id}
      id={id}
      tweets = {tweets}
      followers = {followers}
      avatar = {avatar}
      following = {following}
      />
    })
}
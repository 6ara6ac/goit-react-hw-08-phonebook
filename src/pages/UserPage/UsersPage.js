import React from "react"
import { Tweets } from '../../components/Tweets/TweetsList'
import { Page, Button, ButtonHome } from './UsersPage.styled'
import { Filter } from "../../components/Filter/Filter";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../api/fetchUsers";



 const UsersPage = () => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
    const [page, setPage] = useState(JSON.parse(localStorage.getItem('page')) || 1)
    const [status, setStatus] = useState('idle');
    const [filter, setFilter] = useState('show all');
    const [hideButton, setHideButton] = useState(false)
    


    useEffect(() => {
      const getTweets = async () => {
        setStatus('pending')
        try {
          const data  = await fetchUsers(page);
          setUsers(prevState => [...prevState, ...data]);
          setStatus('resolved')
          if (data.length < 3){
            setHideButton(true)
          }
        } catch (error) {
          console.log(error);
          setStatus('rejected')
        }
      };
      localStorage.setItem('page', page)
      localStorage.setItem('users', JSON.stringify(users))
      getTweets()
    },[page])
    

    const handleLoad = () => {
      setPage(prevState => prevState + 1)
      }


      const filterInput = (event) => {
        setFilter(event.target.value);
      };
      
      const visibleUsers = () => {
        if (filter === 'show all') {
          return users;
        }
        if (filter === 'follow') {
          return users.filter(user => user.following === false);
        }
        if (filter === 'following') {
          return users.filter(user => user.following === !false);
        }
      };
 

    return <>
        <Filter filter={filter} filterInput={filterInput}/>
        <ButtonHome to={'/'}>Go home</ButtonHome>
        <Page>
        {status === 'pending' && <p>Loading...</p>}
        {status === 'resolved' && <Tweets users={visibleUsers(filter)}/>}
        {status === 'rejected' && <p>Sorry somthing went wrong. Plaese try later</p>}
        </Page>

        {status === 'resolved' && (!hideButton ? 
        (<Button type="button" onClick={handleLoad}>Load more</Button>) : (
          <p>All users fetched</p>
        ))}
        </>
}

export default UsersPage






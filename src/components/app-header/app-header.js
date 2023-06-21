import React from 'react';
import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return(
        <div className = "app-header d-flex">
            
           <a href='https://t.me/brtkvvvv7777'><h1>Brtkwitter</h1></a> 
            <h2>{allPosts} tweets, {liked} of them liked</h2>
        </div>
    )
}

export default AppHeader;
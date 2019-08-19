import React, { useState, useEffect } from 'react';
import FredImg from '../Assets/fred.jpg';
import './Home.css';

const Home = () => {
    const [tweets, setTweets] = useState('')
    function getData() {
        var url = `http://localhost:3005/post/my-post`
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNTgxMzFhNTlmZmIwMjQ0YWViMjU2YyIsImlhdCI6MTU2NjIzMTg4MiwiZXhwIjoxNTY2MzE4MjgyfQ.KI_oHoAkFaTbCyZ83ojNFGjxxylZYTXrxU52b1ocTQc'
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setTweets(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div id='home-wrapper'>
            {
                tweets ?
                    tweets.map((x, index) => {
                        return (
                            <SingleTweetView key={index} tweetData={x} />
                        )
                    })
                    : null
            }
        </div>
    )
}

const SingleTweetView = (props) => {
    console.log(props.tweetData)
    return (
        <div className='tweet-wrapper'>
            <div className='tweet-content'>
                <div className='tweet-user'>
                    <img src={FredImg} alt="user-profile-pic" className='user-profile-pic' />
                    <div>
                        <div className='user-name'>fred</div>
                        <div className='user-username'>freddyboi_05</div>
                    </div>
                </div>
                <div className='tweet-text'></div>
            </div>
            <div className='tweet-share'></div>
        </div>
    )
}

export default Home;
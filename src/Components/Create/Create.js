import React, { useState } from 'react';
import Img from './Assets/picture.svg';
import Gif from './Assets/gif.svg';
import './Create.css';

const Create = (props) => {
    const [characters, setCharacters] = useState(140);
    const [text, setText] = useState('')

    function handleImg() {
        var input = document.getElementById('add-img')
        input.click()
    }

    function updateChar(event) {
        var key = event.keyCode || event.which;
        if (key === 8 || key === 46) {
            if (characters < 140) {
                setCharacters(characters + 1)
            } else {
                setCharacters(characters)
            }
        } else {
            if (characters === 0) {
                setCharacters(characters)
            } else {
                setCharacters(characters - 1)
            }
        }
    }

    function handleCompose() {
        var url = `http://localhost:5000/post/create-post`;

        let bodyData = {
            text: text
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/Json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMmFkYmJhMGItYzE5OS00YzE3LTllYzUtMjMzYTkzODMwNjMyIiwiaWF0IjoxNTY1MTA2NzI2LCJleHAiOjE1NjUxOTMxMjZ9.GKt7S0Qb_N0ChzhXKa2xkKKvTRy_wZq00J8afGA-8ao'
            },
            body: JSON.stringify(bodyData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div id='compose-wrapper'>
            <div id='compose-input-wrap'>
                <textarea placeholder="What's happening?" maxLength='140' onKeyDown={updateChar} onChange={e => setText(e.target.value)}></textarea>
                <div id='compose-btns'>
                    <div id='add-ons'>
                        <input type="file" hidden id='add-img' />
                        <img src={Img} alt="img" className='addey' onClick={handleImg} />
                        <img src={Gif} alt="gif" className='addey' />
                    </div>
                    <div id='complete'>
                        <div id='char'>{characters} left</div>
                        <button id='sub-tweet' onClick={text.length > 0 ? handleCompose : null}>Tweet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;
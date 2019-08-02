import React, { useState } from 'react';
import './Auth.css';

function Auth(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginToggle, setLoginToggle] = useState(false)

    function handleLogin(event) {

        event.preventDefault();

        var url = loginToggle ? `http://localhost:5000/user/login` : `http://localhost:5000/user/signup`;

        var bodyData = {
            username: username,
            password: password
        };

        fetch(url, {
            headers: {
                'Content-type': 'Application/Json'
            },
            method: 'POST',
            body: JSON.stringify(bodyData)
        })
            .then(function received(data) {
                return data.json()
            })
            .then(function something(data) {
                props.handleLogin(data.sessionToken);
                console.log(data);
            })
    };

    return (
        <form id='auth-form' onSubmit={e => handleLogin(e)}>
            {
                loginToggle ? <h1>Login</h1> : <h1>Sign Up</h1>
            }
            {
                loginToggle ?
                    null :
                    <>
                        <input type="text" name='name' placeholder='name' className='auth-input' />
                        <input type="text" name='email' placeholder='email' className='auth-input' />
                    </>
            }

            <input type="text" name='username' placeholder='username' className='auth-input' onChange={e => setUsername(e.target.value)} required maxLength='15' minLength='5' />
            <input type="password" name='password' placeholder='password' className='auth-input' onChange={e => setPassword(e.target.value)} required minLength='5' maxLength='20' />
            <button className='auth-sub-btn' type='submit'>{loginToggle ? 'Login' : 'Sign Up'}</button>
            {
                loginToggle ? <p>Don't have an account? <span onClick={e => setLoginToggle(false)} className='login-toggler'>Sign Up</span></p> : <p>Already have an account? <span onClick={e => setLoginToggle(true)} className='login-toggler'>Login</span></p>
            }
        </form>
    );
};

export default Auth;
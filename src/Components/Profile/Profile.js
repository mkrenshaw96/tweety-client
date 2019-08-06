import React from 'react';

const Profile = (props) => {
    console.log(props)
    return (
        <div onClick={props.handleLogout}>logout</div>
    )
}

export default Profile;
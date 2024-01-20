import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please login</div>

    return <>
    welcome {user.username}
    </>
}

export default Profile
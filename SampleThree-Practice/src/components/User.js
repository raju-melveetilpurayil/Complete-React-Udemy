import React from 'react'
import AddUser from './AddUser'

const User = ({onAddUserHandler}) => {
    const onFormSubmitHandler=user=>{
        onAddUserHandler(user);
    }
    return (
        <>
            <AddUser onFormSubmit={onFormSubmitHandler}></AddUser>
        </>
    )
}

export default User

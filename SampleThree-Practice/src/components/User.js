import React from 'react'
import AddUserForm from './AddUserForm'

const User = ({onAddUserHandler}) => {
    const onFormSubmitHandler=user=>{
        onAddUserHandler(user);
    }
    return (
        <>
            <AddUserForm onFormSubmit={onFormSubmitHandler}></AddUserForm>
        </>
    )
}

export default User

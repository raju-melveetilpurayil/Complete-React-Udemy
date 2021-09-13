import React from 'react'
// import './UserList.css'
import styled from 'styled-components'

const UserListContainer = styled.div`
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    background-color: white;
    margin-top:30px;
`;

const UserListUl = styled.ul`
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;

& li {
    font-size: 14px;
    margin: 5px;
    padding: 5px;
    border: #ccc solid 1px;
    width: 99%;
}
`;

const UserList = ({ users }) => {
    console.log(users);
    return (
        <UserListContainer>
            <UserListUl>
                {users.map((user) => (<li key={user.id}>{user.name} ({user.age} years old)</li>))}
            </UserListUl>
        </UserListContainer>
    )
}

export default UserList

import React from 'react';
import { useState } from 'react';
import './AddUser.css';
import Card from './Card';
import ErrorModel from './UI/ErrorModel';

const AddUser = ({ onFormSubmit }) => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const onUsernameHandler = event => {
        setUsername(event.target.value);
    };
    const onAgeHandler = event => {
        setAge(event.target.value);
    };

    const onFormSubmitHandler = (e) => {
        e.preventDefault();

        if (username.trim().length === 0) {
            setError({
                title: 'Invalid name',
                message: 'Please enter a valid name'
            });

            return;
        }

        if (+age < 1) {

            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age, it must the greate than 0'
            });

            return;
        }

        const user = { name: username, age: parseInt(age) };
        onFormSubmit(user);

        setAge('');
        setUsername('');
    };
    const errorHandler = () => {
        setError(null);
    }
    return (
        <>
            {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModel>}
            <form className="form-container" onSubmit={onFormSubmitHandler}>
                <div>
                    <div className="label">Username</div>
                    <div>
                        <input type="text" value={username} onChange={onUsernameHandler}></input>
                    </div>
                </div>
                <div>
                    <div className="label">Age (Years)</div>
                    <div><input type="number" value={age} onChange={onAgeHandler}></input></div>
                </div>
                <div>
                    <button type="submit">Add User</button>
                </div>
            </form>
        </>
    )
}

export default AddUser

import React from 'react';
import { useState, useRef } from 'react';
import './AddUser.css';
import Card from './Card';
import ErrorModel from './UI/ErrorModel';

const AddUser = ({ onFormSubmit }) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const onFormSubmitHandler = (e) => {

        const enteredUsername = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        e.preventDefault();

        if (enteredUsername.trim().length === 0) {
            setError({
                title: 'Invalid name',
                message: 'Please enter a valid name'
            });

            return;
        }

        if (+enteredAge < 1) {

            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age, it must the greate than 0'
            });

            return;
        }

        const user = { name: enteredUsername, age: +enteredAge };
        onFormSubmit(user);
        nameInputRef.current.value='';
        ageInputRef.current.value='';
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
                        <input type="text" ref={nameInputRef}></input>
                    </div>
                </div>
                <div>
                    <div className="label">Age (Years)</div>
                    <div>
                        <input type="number" ref={ageInputRef}></input>
                    </div>
                </div>
                <div>
                    <button type="submit">Add User</button>
                </div>
            </form>
        </>
    )
}

export default AddUser

import React from 'react';
import { useState } from 'react';
import './AddUserForm.css';

const AddUserForm = ({ onFormSubmit }) => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const onUsernameHandler = event => {
        setUsername(event.target.value);
    };
    const onAgeHandler = event => {
        setAge(event.target.value);
    };

    const onFormSubmitHandler = (e) => {
        e.preventDefault();

        if(username.length===0){
            alert("Please enter username");
            return;
        }

        if(age<1){
            alert("Please enter Age");
            return;
        }

        const user = { name: username, age: parseInt(age) };
        onFormSubmit(user);

        setAge('');
        setUsername('');
    };

    return (
        <div>
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
        </div>
    )
}

export default AddUserForm

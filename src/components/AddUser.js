import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({});
    const  handlAddUser = event => {
        event.preventDefault();
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('User added Successfully');
                event.target.reset();
            }
        })

    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <h2>Please add a new User</h2>
            <form onSubmit={handlAddUser}>
            <input onBlur={handleInputBlur} type="text" name='name' placeholder='Name' required />
            <br />
            <input onBlur={handleInputBlur} type="email" name="email" id="" placeholder='email' required/>
            <br />
            <input onBlur={handleInputBlur} type="address" name="address" id="" placeholder='address' required/>

            <br />
            <button type='submit'>Add User</button>
        </form>
        </div>
    );
};

export default AddUser;
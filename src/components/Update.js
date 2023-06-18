import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const Update = () => {
    const storageUser = useLoaderData();
    const [user, setUser] = useState(storageUser);
    const  handlUpdateUser = event => {
        event.preventDefault();
        console.log(user);

       
    }

    const handleInputChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div>
            <h2>This is Update: {storageUser.name}</h2>
            <form onSubmit={handlUpdateUser}>
            <input onChange={handleInputChange} defaultValue={storageUser.name} type="text" name='name' placeholder='Name' required />
            <br />
            <input onChange={handleInputChange} defaultValue={storageUser.email} type="email" name="email" id="" placeholder='email' required/>
            <br />
            <input onChange={handleInputChange} defaultValue={storageUser.address} type="address" name="address" id="" placeholder='address' required/>

            <br />
            <button type='submit'>Update User</button>
        </form>
        </div>
    );
};

export default Update;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    });
    const navigate = useNavigate();

    const onChangeInput = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();
        if (!user.name) {
            alert("Name cannot be empty");
            return;
        }
        if (!user.username) {
            alert("Username cannot be empty");
            return;
        }
        if (!user.email) {
            alert("Email cannot be empty");
            return;
        }
        if (!user.phone) {
            alert("Phone cannot be empty");
            return;
        }

        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/users/", user);
            console.log(response.data);
            navigate('/');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto p-5 shadow">
                <h2 className="text-center mb-4">Add User</h2>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your full name"
                            name="name"
                            value={user.name}
                            onChange={onChangeInput}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your username"
                            name="username"
                            value={user.username}
                            onChange={onChangeInput}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter your email"
                            name="email"
                            value={user.email}
                            onChange={onChangeInput}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your phone number"
                            name="phone"
                            value={user.phone}
                            onChange={onChangeInput}
                        />
                    </div>
                    <button type="submit" className="btn btn-info text-white col-12">Add User</button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
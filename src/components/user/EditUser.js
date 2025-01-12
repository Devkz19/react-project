import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const [user, setUser] = useState({
        name: '',
        username: '',
        phone: ''
    });
    const { name, username, phone } = user;
    const navigate = useNavigate();
    const { userId } = useParams();

    const fetchUser = useCallback(async () => {
        try {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            setUser(result.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }, [userId]);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    const onChangeInput = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();
        if (!user.name) {
            alert("Name cannot be empty");
            return;
        }
        if (!user.phone) {
            alert("Phone cannot be empty");
            return;
        }

        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, user);
            console.log(response.data);
            navigate('/');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const onDeleteUser = async () => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
            navigate('/');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto p-5 shadow">
                <h2 className="text-center mb-4">Edit User</h2>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your full name"
                            name="name"
                            value={name}
                            onChange={onChangeInput}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your username"
                            name="username"
                            value={username}
                            onChange={onChangeInput}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your phone number"
                            name="phone"
                            value={phone}
                            onChange={onChangeInput}
                        />
                    </div>
                    <button type="submit" className="btn btn-info text-white col-12 mb-2">Update User</button>
                    <button type="button" className="btn btn-danger text-white col-12" onClick={onDeleteUser}>Delete User</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
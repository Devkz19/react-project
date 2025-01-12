import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Table, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const HomePage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(UserContext);

    useEffect(() => {
        getAllUsersWithAwait();
    }, []);

    const getAllUsersWithAwait = async () => {
        setLoading(true);
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(result);
        setUsers(result.data.reverse());
        setLoading(false);
        console.log("after axios call");
    };

    return (
        <div className="container">
            <h2 className="text-center my-4">User List</h2>
            {user && <h3 className="text-center my-4">Welcome, {user.name}!</h3>}
            {loading ? (
                <div className="text-center">
                    <Spinner animation="border" />
                </div>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link to={`/edit/${user.id}`} className="btn btn-warning btn-sm mx-2">Edit</Link>
                                    <Button variant="danger" size="sm">Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default HomePage;
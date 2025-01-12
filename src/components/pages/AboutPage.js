import React from 'react';

function AboutPage() {
    return (
        <div className="container">
            <h2 className="py-3">About This Project</h2>
            <p className="lead">
                Welcome to the User Management System Application (UMSA). This project is designed to provide a comprehensive solution for managing user data efficiently and effectively. Built with modern web technologies, UMSA offers a user-friendly interface and robust functionality to handle various user management tasks.
            </p>
            <p className="lead">
                <strong>Key Features:</strong>
                <ul>
                    <li>View, add, edit, and delete user information seamlessly.</li>
                    <li>Responsive design ensuring accessibility on all devices.</li>
                    <li>Secure authentication and authorization mechanisms.</li>
                    <li>Real-time data updates and error handling.</li>
                </ul>
            </p>
            <p className="lead">
                <strong>Technologies Used:</strong>
                <ul>
                    <li><strong>Frontend:</strong> React, React Router, Bootstrap</li>
                    <li><strong>Backend:</strong> JSONPlaceholder API (for demonstration purposes)</li>
                    <li><strong>State Management:</strong> React Context API</li>
                    <li><strong>HTTP Client:</strong> Axios</li>
                </ul>
            </p>
            <p className="lead">
                This project is a part of the Upmetrics task, aimed at demonstrating proficiency in building and managing a full-stack web application. The goal is to provide a practical example of how to create a user management system with a focus on best practices and modern development techniques.
            </p>
            <p className="lead">
                We hope you find this project insightful and useful. Feel free to explore the features and provide feedback.
            </p>
        </div>
    );
}

export default AboutPage;
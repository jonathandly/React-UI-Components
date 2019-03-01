import React from 'react';
import './Card.css';

function CardContent() {
    return (
        <div className="card-content-div">
            <h3>Get started with React</h3>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <a className="react-link" href="https://reactjs.org" target="_blank">reactjs.org</a>
        </div>
    );
}

export default CardContent;
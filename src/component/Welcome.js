import React  from 'react';
import './Styles/Card.css';


const Welcome = ({userName}) => (
    <div className="container">
        <div className="UserInfo">
            <h1>{userName}!</h1>
            <p>Bienvenidos a mi App</p>
        </div>
    </div>
)

export default Welcome
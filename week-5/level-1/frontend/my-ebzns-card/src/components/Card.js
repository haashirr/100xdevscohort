import React from 'react';
import './card.css';
const Card = ({ name, description, socials, interests }) => {
    return (
        <div className="card">
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="socials">
                {socials.linkedin && (
                    <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                )}
                {socials.twitter && (
                    <a href={socials.twitter} target="_blank" rel="noreferrer">Twitter</a>
                )}
            </div>
            <h2>Interests</h2>
            <ul className="interests">
                {interests.map((interest, index) => {
                    <li key={index}>{interest}</li>
                })}
            </ul>
        </div>
    )
}
export default Card;
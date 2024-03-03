import React, {useState} from 'react';

const CardCreation = ({ onCardSubmit}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [socials, setSocials] = useState({linkedin: '', twitter: ''});    
    const [interests, setInterests] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const cardData = {name, description, socials, interests};
        onCardSubmit(cardData);
        setName('');
        setDescription('');
        setSocials({linkedin: '', twitter: ''});    
        setInterests([]);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder="linkedin" value={socials.linkedin} onChange={(e) => setSocials({...socials, linkedin: e.target.value})} />
            <input type="text" placeholder="twitter" value={socials.twitter} onChange={(e) => setSocials({...socials, twitter: e.target.value})} />
            <input type="text" placeholder="interests" value={interests} onChange={(e) => setInterests(e.target.value.split(','))} />
            <button type="submit">Create Card</button>
        </form>
    );
}
export default CardCreation;
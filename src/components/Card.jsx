// Card.jsx
import React from 'react';

function Card({ image, title, children }) {
    return (
        <div style={styles.card}>
            {image && <img src={image} alt={title} style={styles.image} />}
            <div style={styles.boxTitle}>
                <h3 style={styles.title}>{title}</h3>
            </div>
        </div>
    );
}

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '180px',
        height: '230px',
        margin: '10px',
        backgroundColor : '#1E1E1E',
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px 8px 0 0',
    },
    boxTitle: {
        backgroundColor: '#F5D817',
        borderRadius: '16px',
        padding: '1px',
        marginTop: '8px',
    },
    title: {
        fontSize: '0.9em',
        margin: '8px 0',
        
    },
};

export default Card;

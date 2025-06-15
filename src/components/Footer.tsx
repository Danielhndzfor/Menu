import React from 'react';

const Footer = () => (
    <footer
        style={{
            textAlign: 'center',
            padding: '0.5rem 0',
            background: 'bg-black',
            color: '#bbb',
            fontSize: '0.85rem',
            borderTop: 'none',
        }}
    >
        Powered by{' '}
        <a
            href="https://danielfor.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                color: '#bbb',
                textDecoration: 'none',
                fontWeight: '600',
                
            }}
        >
            danielfor.dev
        </a>
    </footer>
);

export default Footer;
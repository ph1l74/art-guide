import React, { useState } from 'react';
import './Card.css'

export default function Card({ card }) {
    return (
        <div className="uk-width-1-4@l uk-width-1-2@m uk-width-1-1@s  my-card-link">
            <a target="_blank" href={card.url} rel="noopener noreferrer">
                <div className="uk-card uk-card-hover uk-card-default uk-card-body my-card"
                    style={card && card.img ? { backgroundImage: 'url(' + card.img + ')', backgroundSize: 'cover' } : card.section === 'video' ? { background: '#C33F31' } : card.section === 'article' ? { background: '#2A95A9' } : { background: '#C37831' }}>
                    <div className="uk-overlay uk-overlay-default my-overlay">
                        <h3 className="uk-card-title my-title">{card.title}</h3>
                    </div>
                </div>
            </a>
        </div>
    )

}
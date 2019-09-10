import React, { useContext } from 'react';
import './Section.css'
import Card from './Card';
import { Context } from '../context';

export default function Section({ title, count, cards }) {

    const { filterContent, translate } = useContext(Context);

    return (
        <li className='uk-animation-slide-left-medium'>
            <a className="uk-accordion-title">
                <h1 className="uk-heading-bullet">{translate('ru', title)}<span className="uk-badge section-count">{count}</span></h1>
            </a>
            <div className="uk-accordion-content">
                <div className="uk-grid" uk-grid="masonry: true">
                    {cards.map((item, index) => <Card key={item.type + index} card={item}></Card>)}
                </div>
            </div>
        </li>
    )
}
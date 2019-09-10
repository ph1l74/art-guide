import React, { useContext } from 'react';
import { Context } from '../context';
import './NavBar.css'

export default function NavBar({ types }) {

    const { filterContent, translate } = useContext(Context);

    return (
        <div className="uk-container menu">
            <div className="uk-margin-medium-top uk-margin-medium-bottom">
                <ul className="uk-flex-center" uk-tab='true'>
                    {types.map((item, index) => (
                        <li key={item + '_' + index}>
                            <a onClick={() => filterContent(item)} href={null}>
                                {translate('ru', item)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}
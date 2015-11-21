/**
 * Created by vvliebe on 15/11/10.
 */

/**
 *
 */

import React from 'react';

import './2048.scss';

import GameContainer from '../../../components/2048/GameContainer.js';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="game-2048-container">
            <GameContainer />
        </div>
    }
}
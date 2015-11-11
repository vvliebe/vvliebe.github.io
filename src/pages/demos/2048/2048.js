/**
 * Created by vvliebe on 15/11/10.
 */

/**
 *
 */

import React from 'react';

import './2048.scss'

class Game2048 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {



        return <div className="game-area">

        </div>
    }
}

export default class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="game-2048-container">
            <Game2048 />
        </div>
    }
}
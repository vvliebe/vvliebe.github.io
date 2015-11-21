/**
 * Created by vvliebe on 15/11/21.
 */

import React from 'react';

import './game2048.scss';

import GameCell from './GameCell.js';

export default class GameRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: this.props.size
        }
    }

    // 生成列
    getCell() {
        let cells = [];
        let size = parseInt((588 - 12 * this.state.size) / this.state.size);
        for (let i = 0; i < this.state.size; i++) {
            cells.push(<GameCell key={i} size={size}/>)
        }
        return cells;
    }

    render() {
        let size = parseInt((588 - 12 * this.state.size) / this.state.size);
        let rowStyle = {
            height: `${size}px`
        };
        return <div className="game-2048-row" style={rowStyle}>
            {this.getCell()}
        </div>
    }
}

GameRow.propTypes = {
    size: React.PropTypes.number
};

GameRow.defaultProps = {
    size: 4
};


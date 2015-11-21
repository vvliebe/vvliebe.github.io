/**
 * Created by vvliebe on 15/11/21.
 */

import React from 'react';

import './game2048.scss';

export default class GameCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: this.props.size
        }
    }

    render() {
        let cellStyle = {
            width: `${this.state.size}px`,
            height: `${this.state.size}px`
        };
        return <div style={cellStyle} className="game-2048-cell">

        </div>
    }
}

GameCell.propTypes = {
    size: React.PropTypes.number
};

GameCell.defaultProps = {
    size: 135
};

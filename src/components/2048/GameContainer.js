/**
 * Created by vvliebe on 15/11/21.
 */
import React from 'react';

import './game2048.scss';

export default class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: this.props.size
        }
    }


    render() {


        return <div className="game-area">

        </div>
    }
}

GameContainer.propTypes = {
    size: React.PropTypes.number
};

GameContainer.defaultProps = {
    size: 4
};


/**
 * Created by vvliebe on 15/11/21.
 */
import React from 'react';

import './game2048.scss';

import GameRow from './GameRow.js';

export default class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: this.props.size
        }
    }

    // 开始游戏
    startGame(){
        // 清空棋盘

        // 生成一个一个棋子

        // 监听键盘事件
    }

    // 生成各行
    getRows() {
        let rows = [];
        for (let i = 0; i < this.state.size; i++) {
            rows.push(<GameRow size={this.state.size} key={i}/>);
        }
        return rows;
    }

    render() {


        return <div className="game-2048-area">
            {this.getRows()}
        </div>
    }
}

GameContainer.propTypes = {
    size: React.PropTypes.number
};

GameContainer.defaultProps = {
    size: 4
};


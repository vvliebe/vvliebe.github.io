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
            size: this.props.size,
            data: []
        }
    }

    componentWillMount() {
        this.startGame();
    }

    generatePoint(num) {
        let {size,data} = this.state;
        for(let i = 0 ; i<num;i++) {
            let x = Math.floor(Math.random() * size);
            let y = Math.floor(Math.random() * size);
            if (!data[x][y]) {
                data[x][y] = 2;
            }
        }
        this.setState({data: data});
    }

    // 开始游戏
    startGame() {
        // 清空棋盘
        let {size,data} = this.state;
        for (let i = 0; i < size; i++) {
            let rowData = [];
            for (let j = 0; j < size; j++) {
                rowData.push(0);
            }
            data.push(rowData);
        }
        console.log(data);
        // 生成一个两个棋子
        this.generatePoint(2);

        console.log(x, y);
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


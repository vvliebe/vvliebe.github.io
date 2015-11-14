/**
 * Created by vvliebe on 15/11/13.
 */
import React from 'react';

import './cube.scss';

export default class Cube extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="cube-wrap">
            <div className="cube-container">
                <div className="cube-front">前</div>
                <div className="cube-back">后</div>
                <div className="cube-up">上</div>
                <div className="cube-down">下</div>
                <div className="cube-left">左</div>
                <div className="cube-right">右</div>
            </div>
        </div>
    }
}
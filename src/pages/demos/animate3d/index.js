/**
 * Created by vvliebe on 15/11/13.
 */

import React from 'react';

import './index.scss';

import Cube from '../../../components/cube/cube.js';

export default class Page extends  React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="animate-3d-container">
            <Cube />
        </div>
    }
}
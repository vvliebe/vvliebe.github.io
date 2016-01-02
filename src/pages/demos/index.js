/**
 * Created by vvliebe on 15/10/31.
 */

import React from 'react';

import './index.scss';

import Modal from './modal/index.js';
import Game2048 from './2048/2048.js';
import AnimatePage from './animate3d/index.js';
import Switch from './switch/index.js';

import demos from '../../data/demos';

const componentMap = {
    'v-rodal': Modal,
    '2048': Game2048,
    'animate-3d': AnimatePage,
    'switch': Switch
};

export class DemoListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const linkListDom = demos.map((data, index) => {
            let style = {
                backgroundColor: data.color
            };

            return <div key={index} className="link-div" style={style}>
                <a href={data.url} target="_blank">{data.title}</a>
            </div>
        });

        return <div className="page-container">
            <div className="link-list-div">
                {linkListDom}
            </div>
        </div>
    }
}

export class DemoPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let name = this.props.params.name;
        let Component = componentMap[name];
        return <Component {...this.props} />
    }
}

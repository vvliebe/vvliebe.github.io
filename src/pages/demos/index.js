/**
 * Created by vvliebe on 15/10/31.
 */

import React from 'react';

import './index.scss';

import Modal from './modal/index';

const componentMap = {
    'v-rodal': Modal
};

export class DemoListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: 'v-rodal',
                    url: 'http://vvliebe.com/#/demo->v-rodal',
                    color: 'rgb(108, 196, 173)'
                },
                {
                    title: '2048',
                    url: 'http://2048.vvliebe.com',
                    color: 'rgb(138,118,167)'
                }
            ]
        }
    }

    render() {

        const linkListDom = this.state.data.map((data, index) => {
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

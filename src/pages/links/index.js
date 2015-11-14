/**
 * Created by vvliebe on 15/11/13.
 */

import React from 'react';

import './index.scss';

class Links extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: [
                {
                    title: 'neverland',
                    link: 'http://www.neverl.com/blog/',
                    labels: ['前端1111111']
                }
            ]
        }
    }

    render() {
        // TODO: 三维立体动画
        let links = this.state.urls.map((data, index) => {
            let labels = data.labels.map((label, keyIndex) => {
                return <span key={keyIndex}>{label}</span>
            });
            return <li className="lp-link-li" key={index}>
                <a target="_blank" href={data.link}>
                    <div className="title">{data.title}</div>
                    <div className="labels">
                        {labels}
                    </div>
                </a>
            </li>
        });

        return <ul className="lp-link-list">
            {links}
        </ul>
    }
}

export default class LinkPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="lp-links-container">
            <Links />
        </div>
    }
}
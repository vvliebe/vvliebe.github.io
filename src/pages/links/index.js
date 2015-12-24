/**
 * Created by vvliebe on 15/11/13.
 */

import React from 'react';

import './index.scss';

import links from '../../data/links';

class Links extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: links
        }
    }

    render() {
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
            <div className="bg-div"></div>
            <div className="link-title">Links</div>
            <Links />
        </div>
    }
}
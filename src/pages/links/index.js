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
                    title: 'jadegong',
                    link: 'http://www.jadegong.com.cn/',
                    labels: ['前端']
                },
                {
                    title: 'jl',
                    link: 'http://jlxy.cz/',
                    labels: ['前端']
                },
                {
                    title: 'neverland',
                    link: 'http://www.neverl.com/blog/',
                    labels: ['前端']
                },
                {
                    title: 'norgerman',
                    link: 'https://www.norgerman.com/',
                    labels: ['后端']
                },
                {
                    title: 'Renfei Song',
                    link: 'http://www.renfei.org/',
                    labels: ['全栈']
                },
                {
                    title: 'sunxfancy',
                    link: 'http://sunxfancy.github.io/',
                    labels: ['编译器']
                },
                {
                    title: 'szm',
                    link: 'http://blog.szm.me/',
                    labels: ['操作系统']
                },
                {
                    title: 'vincentbel',
                    link: 'http://www.vincentbel.com/',
                    labels: ['全栈']
                },
                {
                    title: 'wanzy',
                    link: 'http://wanzy.me/',
                    labels: ['软件开发']
                },
                {
                    title: 'WunGCQ',
                    link: 'http://wcqblog.github.io/',
                    labels: ['前端']
                },
                {
                    title: 'zstao',
                    link: 'http://zstao.tk/',
                    labels: ['前端']
                }
            ]
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
            <div className="link-title">Links</div>
            <Links />
        </div>
    }
}
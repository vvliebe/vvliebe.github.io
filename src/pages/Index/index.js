/**
 * Created by vvliebe on 15/10/30.
 */
// library
import React from 'react';

// stylesheet
import './index.scss';

// page
import Clock from '../../components/clock/clock.js';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let menu_li = this.props.menus.map((data, index) => {
            return <li key={data.id}>
                <a className="menu-link" href={data.link}>
                    <span className="content-span">{data.title}</span>
                </a>
            </li>
        });
        return <nav className="clear-fix">
            <ul className="clear-fix">
                {menu_li}
            </ul>
        </nav>
    }
}

class Page extends React.Component {

    render() {
        let menus = [
            {
                id: 1,
                title: 'demo',
                link: '/#/demos'
            },
            {
                id: 2,
                title: 'blog',
                link: 'http://blog.vvliebe.com'
            },
            {
                id: 3,
                title: 'gitbook',
                link: 'https://vvliebe.gitbooks.io/front-end-books/content/'
            },
            {
                id: 4,
                title: 'about',
                link: '/#/about'
            },
            {
                id: 5,
                title: 'links',
                link: '/#/links'
            }
        ];
        return <div className="container">
            <Nav menus={menus} />
            <div className="left-clock">
                <Clock />
            </div>
        </div>
    }
}

export default Page;
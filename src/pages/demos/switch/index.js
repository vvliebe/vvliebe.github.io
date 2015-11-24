/**
 * Created by vvliebe on 15/11/24.
 */

import React from 'react';

import './index.scss';

import Switch from '../../../components/vswitch/vswitch.js';

export default class SwitchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        }
    }

    render() {
        return <div className="switch-page-container">
            <Switch checked={this.state.checked} />
        </div>
    }
}
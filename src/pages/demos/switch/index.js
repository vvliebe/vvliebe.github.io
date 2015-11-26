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
            checked: false
        }
    }

    handleChange(flag) {
       if(flag) {
           alert("on");
       } else {
           alert("off");
       }
    }

    render() {
        return <div className="switch-page-container">
            <Switch checked={this.state.checked} title={"全选"} handleChange={this.handleChange.bind(this)}/>
        </div>
    }
}
/**
 * Created by vvliebe on 15/11/13.
 */

import React from 'react';

import './index.scss';

import Cube from '../../../components/cube/cube.js';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cube: {
                perspective: 500
            }
        }
    }

    changeCube(key, e) {
        let value = e.target.value;
        let {cube} = this.state;
        cube[key] = value;
        this.setState({cube: cube});
    }

    render() {
        let {cube} = this.state;
        return <div className="animate-3d-container">
            <div className="animate-3d-form-div">
                <div>
                    perspective:
                    <input type="range" min="400" max="1500" value={cube.perspective}
                           onChange={this.changeCube.bind(this,'perspective')}/>
                    {cube.perspective}px
                </div>
            </div>

            <div className="animate-3d-cube-demo">
                <Cube {...cube} />
            </div>
        </div>
    }
}
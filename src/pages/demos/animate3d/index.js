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
            active: 1,
            cube: {
                perspective: 500,
                perspectiveOriginX: 0,
                perspectiveOriginY: 0,
                direction: 'horizontal'
            }
        }
    }

    changeCube(key, e) {
        let value = e.target.type == 'range' ? parseInt(e.target.value) : e.target.value;
        let {cube} = this.state;
        cube[key] = value;
        this.setState({cube: cube});
    }

    changeDirection(dir) {
        let {cube} = this.state;
        cube['direction'] = dir == 1 ? 'horizontal' : 'vertical';
        this.setState({cube: cube, active: dir});
    }


    render() {
        let {cube} = this.state;
        let btnClass1 = this.state.active == 1 ? 'left-btn active' : 'left-btn';
        let btnClass2 = this.state.active == 2 ? 'right-btn active' : 'right-btn';
        return <div>
            <div className="animate-3d-form-div">
                <div className="btn-group">
                    <button onClick={this.changeDirection.bind(this,1)} className={btnClass1}>horizontal
                    </button>
                    <button onClick={this.changeDirection.bind(this,2)} className={btnClass2}>vertical</button>
                </div>
                <div className="input-group">
                    perspective:
                    <input type="range" min="400" max="1500"
                           value={cube.perspective}
                           onChange={this.changeCube.bind(this,'perspective')}/>
                    {cube.perspective}px
                </div>
                perspective-origin:
                <div className="input-group">
                    <input type="range" min="-100" max="300"
                           value={cube.perspectiveOriginX}
                           onChange={this.changeCube.bind(this,'perspectiveOriginX')}
                    />{cube.perspectiveOriginX}px
                    <input type="range" min="-100" max="300"
                           value={cube.perspectiveOriginY}
                           onChange={this.changeCube.bind(this,'perspectiveOriginY')}
                    />{cube.perspectiveOriginY}px
                </div>
            </div>
            <div className="animate-3d-demo">
                <Cube {...cube} />
            </div>
        </div>
    }
}
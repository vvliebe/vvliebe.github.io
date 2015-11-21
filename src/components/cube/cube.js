/**
 * Created by vvliebe on 15/11/13.
 */

/**
 * 1.wrap层可以添加旋转，使之可以看到不同的旋转
 */
import React from 'react';

import './cube.scss';

export default class Cube extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cubeWrapStyle = {
            perspective: `${this.props.perspective}px`,
            perspectiveOrigin: `${this.props.perspectiveOriginX}px ${this.props.perspectiveOriginY}px `
        };

        let cubeContainerStyle = {
            animationName: this.props.direction == 'vertical' ? 'spin-vertical' : 'spin-horizontal'
        };

        return <div style={cubeWrapStyle}>
            <div className="cube-container" style={cubeContainerStyle}>
                <div className="cube-front">前</div>
                <div className="cube-back">后</div>
                <div className="cube-up">上</div>
                <div className="cube-down">下</div>
                <div className="cube-left">左</div>
                <div className="cube-right">右</div>
            </div>
        </div>
    }
}

Cube.propTypes = {
    perspective: React.PropTypes.number,
    perspectiveOriginX: React.PropTypes.number,
    perspectiveOriginY: React.PropTypes.number,
    direction: React.PropTypes.oneOf(['horizontal','vertical'])
};

Cube.defaultProps = {
    perspective: 400,
    perspectiveOriginX: 200,
    perspectiveOriginY: 200,
    direction: 'horizontal'
};
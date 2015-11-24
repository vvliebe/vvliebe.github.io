/**
 * Created by vvliebe on 15/11/24.
 */

import React from 'react';

import './vswitch.scss';

export default class Vswitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        }
    }

    changeCheckState() {
        let {checked} = this.state;
        this.setState({checked: !checked});
    }

    render() {
        let {checked} = this.state;
        let {width,height,checked_title,unchecked_title} = this.props;
        let vSwitchStyle = {
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: `${height}px`
        };
        let vCircleStyle = {
            width: `${height - 4}px`,
            height: `${height - 4}px`
        };

        let vSwitchClass = checked ? "v-switch v-switch-checked" : "v-switch";

        let vText = checked ? checked_title : unchecked_title;

        return <div onClick={this.changeCheckState.bind(this)}
                    className={vSwitchClass}
                    style={vSwitchStyle}>
            <span>{vText}</span>
            <span className="v-switch-circle" style={vCircleStyle}/>
        </div>
    }
}

Vswitch.defaultProps = {
    checked: false,
    width: 50,
    height: 25,
    checked_title: '',
    unchecked_title: ''
};

Vswitch.propTypes = {
    checked: React.PropTypes.bool,
    width: React.PropTypes.number,
    height: React.PropTypes.number
};


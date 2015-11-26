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

    componentWillReceiveProps(nextProps) {
        if (nextProps.checked != this.state.checked) {
            this.setState({checked: nextProps.checked});
        }
    }

    changeCheckState() {
        let {checked} = this.state;
        let {handleChange} = this.props;
        this.setState({checked: !checked});
        if (handleChange) {
            handleChange(!checked);
        }
    }

    getTitle() {
        if (!this.props.title)
            return null;
        let vTitleStyle = {
            lineHeight: `${this.props.height}px`
        };
        return <span style={vTitleStyle} className="v-title-span">
            {this.props.title}
        </span>
    }

    render() {
        let {checked} = this.state;
        let {width,height,checked_title,unchecked_title} = this.props;

        // style
        let vSwitchStyle = {
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: `${height}px`
        };
        let vCircleStyle = {
            width: `${height - 4}px`,
            height: `${height - 4}px`,
            transform: checked ? `translate(${width - height + 2}px,0)` : `translate(2px,0)`
        };
        let vTextLeftStyle = {
            width: `${width - height + 4}px`,
            display: checked ? 'inline-block' : 'none'
        };
        let vTextRightStyle = {
            width: `${width - height + 4}px`,
            display: checked ? 'none' : 'inline-block'
        };

        // class
        let vSwitchClass = checked ? "v-switch v-switch-checked" : "v-switch";


        return <div onClick={this.changeCheckState.bind(this)}
                    className={vSwitchClass}
                    style={vSwitchStyle}>
            <span className="v-text-left-span" style={vTextLeftStyle}>{checked_title}</span>
            <span className="v-switch-circle" style={vCircleStyle}/>
            {this.getTitle()}
            <span className="v-text-right-span" style={vTextRightStyle}>{unchecked_title}</span>
        </div>
    }
}

Vswitch.defaultProps = {
    checked: false,
    width: 50,
    height: 25,
    checked_title: '',
    unchecked_title: '',
    title: ''
};

Vswitch.propTypes = {
    checked: React.PropTypes.bool,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    checked_title: React.PropTypes.string,
    unchecked_title: React.PropTypes.string,
    title: React.PropTypes.string,
    handleChange: React.PropTypes.func
};


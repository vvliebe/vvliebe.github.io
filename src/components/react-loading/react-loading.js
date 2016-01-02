/**
 * Created by vvliebe on 15/12/25.
 */

import React from 'react';

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let {type,visible} = this.props;
        let loadingBoxStyle = {
            display: visible ? 'block' : 'none'
        };
        return <div className="v-loading-box" style={loadingBoxStyle}>
            <div className="v-loading-mask"></div>
            <div className="v-loading"></div>
        </div>
    }
}

Loading.propTypes = {
    visible: React.PropTypes.bool.isRequired,
    type: React.PropTypes.string,
    hasMask: React.PropTypes.bool
};

Loading.defaultProps = {};



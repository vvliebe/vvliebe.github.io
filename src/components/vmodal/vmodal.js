/**
 * Created by vvliebe on 15/10/31.
 */

/**
 * TODO:
 * 1. 进场动画与出场动画
 * 2. 左右两个按钮文字接受参数以及接受事件
 * 3. 宽度，高度接受参数
 * 4. 主内容滚动条
 * 5. 屏蔽父节点滚动条
 */


import React, {PropTypes} from 'react';
import './vmodal.scss';

class VModal extends React.Component {
    constructor(props) {
        super(props);
        const visible = props.visible;
        this.state = {
            isShow: visible
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(`next props is ${nextProps.visible}`);
        console.log(`this props is ${this.props.visible}`);
        console.log(`this state is ${this.state.isShow}`);
        if (nextProps.visible && !this.state.isShow) {
            this.show();
        } else if(!nextProps.visible && this.state.isShow) {
            // 此函数不一定会被调用
            this.hide();
        }
    }

    show() {
        this.setState({isShow: true});
    }

    hide() {
        this.setState({isShow: false});
    }

    render() {

        const vModalStyle = {
            display: this.state.isShow ? 'block' : 'none'
        };
        const vModalClazz = `v-modal v-modal-${this.props.animation}`;


        return <div className={vModalClazz} style={vModalStyle}>
            <div className="v-modal-mask" onClick={this.hide.bind(this)}></div>
            <div className="v-modal-box">
                <div className="v-modal-close-btn" onClick={this.hide.bind(this)}></div>
                <div className="v-modal-title">{this.props.title}</div>
                <div className="v-modal-child">{this.props.children}</div>
                <div className="v-modal-button-group">
                    <button className="v-modal-left-btn">取消</button>
                    <button className="v-modal-right-btn">确定</button>
                </div>
            </div>
        </div>
    }
}

VModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    animation: PropTypes.string
};

export default VModal;
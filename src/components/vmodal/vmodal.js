/**
 * Created by vvliebe on 15/10/31.
 */

/**
 * TODO:
 * 1. 进场动画与出场动画
 * 2. 左右两个按钮文字接受参数以及接受事件  (done)
 * 3. 宽度，高度接受参数 (done)
 * 4. 主内容滚动条
 * 5. 屏蔽父节点滚动条
 * 6. 默认props (done)
 */


import React from 'react';
import './vmodal.scss';

class VModal extends React.Component {
    constructor(props) {
        super(props);
        const visible = props.visible;
        this.state = {
            isShow: visible,
            animationType: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(`next props is ${nextProps.visible}`);
        console.log(`this props is ${this.props.visible}`);
        console.log(`this state is ${this.state.isShow}`);
        if (nextProps.visible && !this.props.visible) {
            this.show();
        } else if (!nextProps.visible && this.props.visible) {
            // 此函数不一定会被调用
            this.hide();
        }
    }

    show() {
        document.querySelector('body').style.overflow = 'hidden';
        this.setState({animationType: 'enter', isShow: true});
    }

    hide() {
        this.props.onClose();
        document.querySelector('body').style.overflow = null;
        this.setState({animationType: 'leave'}, () => {
            let duration = 0;
            if (this.props.animation_duration == 'duration-25') {
                duration = 250;
            } else if (this.props.animation_duration == 'duration-5') {
                duration = 500;
            } else {
                duration = 750;
            }
            setTimeout(() => {
                this.setState({isShow: false});
            }, duration);
        });
    }

    render() {

        const vModalStyle = {
            display: this.state.isShow ? 'block' : 'none'
        };

        const vModalBoxStyle = {
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
            margin: `${-this.props.height / 2}px 0 0 ${-this.props.width / 2}px`
        };
        let oHeight = this.props.showTitle ? 90 : 50;
        const vModalContentStyle = {
            height: `${this.props.height - oHeight}px`
        };

        const vModalClazz = `v-modal ${this.props.animation_duration} v-modal-fade-${this.state.animationType}`;
        const vModalBoxClazz = `v-modal-box ${this.props.animation_duration} v-modal-${this.props.animation}-${this.state.animationType}`;

        const buttonsDom = this.props.buttons.map((data, index) => {
            let style = {
                backgroundColor: data.color,
                width: `${data.width}%`
            };
            return <button style={style} key={index}
                           onClick={() => {data.handleClick();this.hide();}}>{data.title}
            </button>
        });

        const titleDom = this.props.showTitle ? <div className="v-modal-title">{this.props.title}</div> : null;

        return <div className={vModalClazz} style={vModalStyle}>
            <div className="v-modal-mask" onClick={this.hide.bind(this)}></div>
            <div className={vModalBoxClazz} style={vModalBoxStyle}>
                {titleDom}
                <div className="v-modal-child" style={vModalContentStyle}>{this.props.children}</div>
                <div className="v-modal-close-btn" onClick={this.hide.bind(this)}></div>
                <div className="v-modal-button-group">
                    {buttonsDom}
                </div>
            </div>
        </div>
    }
}

VModal.propTypes = {
    visible: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string,
    animation: React.PropTypes.oneOf(['fade', 'zoom', 'flip', 'door', 'rotate', 'slideDown', 'slideLeft', 'slideRight', 'slideUp']),
    animation_duration: React.PropTypes.oneOf(['duration-75', 'duration-5', 'duration-25']),
    buttons: React.PropTypes.arrayOf(React.PropTypes.shape({
        title: React.PropTypes.string,
        handlerClick: React.PropTypes.func,
        color: React.PropTypes.string,
        width: React.PropTypes.number
    })),
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    onClose: React.PropTypes.func.isRequired,
    showTitle: React.PropTypes.bool
};

VModal.defaultProps = {
    animation: 'fade',
    animation_duration: 'duration-5',
    width: 400,
    height: 400,
    showTitle: true,
    buttons: [
        {
            title: '取消',
            color: 'rgba(0,0,0,.45)',
            width: 50
        },
        {
            title: '确定',
            color: '#00CED1',
            width: 50
        }
    ]
};

export default VModal;
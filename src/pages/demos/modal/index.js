/**
 * Created by vvliebe on 15/10/31.
 */
import React from 'react';

import './index.scss';
import Modal from '../../../components/vmodal/vmodal.js';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.data = ['zoom', 'fade', 'flip', 'door', 'rotate', 'slideUp', 'slideDown', 'slideLeft', 'slideRight'];
        this.state = {
            visible: false,
            animation: this.data[0]
        }
    }

    showModal(index) {
        console.log(`you click ${index}`);
        this.setState({animation: this.data[index],visible: true});
    }

    doCancel() {
        console.log("cancel");
    }


    render() {
        let bgs = this.data.map((value, index) => {
            return <button key={index} onClick={this.showModal.bind(this, index)}>{value}</button>;
        });

        const modal_props = {
            visible: this.state.visible,
            title: "hahah",
            animation: this.state.animation,
            buttons: [
                {
                    title: '取消',
                    handleClick: this.doCancel.bind(this),
                    color: '#aabbcc',
                    width: 25
                },
                {
                    title: '确定',
                    handleClick: this.doCancel.bind(this),
                    color: '#aabbcc',
                    width: 25
                },
                {
                    title: '确定2',
                    handleClick: this.doCancel.bind(this),
                    color: '#00CED1',
                    width: 50
                }
            ]
        };

        return <div className="demo-modal-container">
            <div className="tp-logo-wrapper">
                <a className="tp-logo-link" href="#">View on GitHub</a>
            </div>
            <div className="demo-content">
                <div className="description">
                    <h1>v-Rodal</h1>

                    <h2>A React modal with animations.</h2>

                    <h2>Refer to rodal from <a href="http://github.com/chenjiahan/rodal">chen jiahan</a></h2>
                </div>
                <div className="button-groups">
                    {bgs}
                </div>
            </div>
            <Modal {...modal_props} />
        </div>
    }
}


export default Page;
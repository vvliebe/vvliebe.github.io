/**
 * Created by vvliebe on 15/10/31.
 */
import React from 'react';

import './index.scss';
import Modal from '../../../components/vmodal/vmodal.js';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['zoom', 'fade', 'flip', 'door', 'rotate', 'slideUp', 'slideDown', 'slideLeft', 'slideRight'],
            visible: false

        }
    }

    showModal(index) {
        console.log(`you click ${index}`);
        this.setState({visible: true});
    }

    render() {
        let bgs = this.state.data.map((value, index) => {
            return <button key={index} onClick={this.showModal.bind(this, index)}>{value}</button>;
        });
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
            <Modal visible={this.state.visible} title={"v-Rodal"}/>
        </div>
    }
}


export default Page;